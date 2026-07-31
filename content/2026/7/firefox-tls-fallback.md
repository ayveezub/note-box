---
title: "Firefox TLS fallback"
pubDate: "2026-07-26"
tags: ["browsers", "firefox", "fallback"]
description: ""
---

`security.tls.version.fallback-limit` is a hidden preference in Mozilla Firefox that sets the lowest security version the browser can drop down to if a secure connection fails.

The integer values map to specific protocol versions:

- 1 for TLS 1.0
- 2 for TLS 1.1
- 3 for TLS 1.2
- 4 for TLS 1.3

To use TLS 1.0 or TLS 1.1 enable `security.tls.version.enable-deprecated`

## Example

To enable fallback to TLS 1.1, open `about:config`, change:

- `security.tls.version.enable-deprecated` to `true`
- `security.tls.version.fallback-limit` to `2`
- `security.tls.version.min` to `2`
