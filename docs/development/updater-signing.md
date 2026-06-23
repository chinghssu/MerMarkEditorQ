# Tauri Updater Signing

This project uses Tauri updater artifacts for in-app updates. The updater verifies every downloaded bundle with the public key embedded in `src-tauri/tauri.conf.json`; release builds must sign updater bundles with the matching private key.

## Sensitive Material

Commit these:

- `src-tauri/tauri.conf.json` updater `pubkey`
- documentation that names environment variables

Never commit these:

- updater private key files
- updater private key passwords
- `.env` files containing signing values
- generated `.key`, `.pem`, `.p12`, or similar secret files

## Generate A Key Pair

Generate keys outside the repository:

```bash
mkdir -p ~/.tauri
npm run tauri signer generate -- -w ~/.tauri/mermark-editor.key
```

The command writes:

- private key: `~/.tauri/mermark-editor.key`
- public key: `~/.tauri/mermark-editor.key.pub`

Copy the public key content into `plugins.updater.pubkey` in `src-tauri/tauri.conf.json`. Keep the private key and its password in a password manager or CI secret store.

## Local Signed Build

This Tauri CLI version expects the private key content in `TAURI_SIGNING_PRIVATE_KEY` during build:

```bash
export TAURI_SIGNING_PRIVATE_KEY="$(cat ~/.tauri/mermark-editor.key)"
export TAURI_SIGNING_PRIVATE_KEY_PASSWORD="your key password"
npm run tauri -- build
```

A successful macOS build creates:

- `src-tauri/target/release/bundle/dmg/MerMark Editor Q_<version>_aarch64.dmg`
- `src-tauri/target/release/bundle/macos/MerMark Editor Q.app.tar.gz`
- `src-tauri/target/release/bundle/macos/MerMark Editor Q.app.tar.gz.sig`

## GitHub Releases

The release workflow uses repository secrets:

- `TAURI_SIGNING_PRIVATE_KEY`
- `TAURI_SIGNING_PRIVATE_KEY_PASSWORD`

`tauri-apps/tauri-action` is configured with `includeUpdaterJson: true`, so release assets include updater metadata. The static updater endpoint in `src-tauri/tauri.conf.json` points to:

```text
https://github.com/chinghssu/MerMarkEditorQ/releases/latest/download/latest.json
```

For manual releases, ensure `latest.json` includes the signature content from the generated `.sig` file. The app does not fetch a `.sig` file path at runtime; it validates the update bundle with the signature string in `latest.json`.

## Key Rotation

Changing `plugins.updater.pubkey` rotates the trust root. Apps already installed with the previous public key can only install updates signed by that previous private key. Publish a transition build carefully if existing users must migrate to a new updater key.
