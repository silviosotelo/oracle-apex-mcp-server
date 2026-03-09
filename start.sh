#!/bin/bash
# Oracle APEX MCP Server — start script
# Configure these variables for your environment, or set them in ~/.claude/mcp.json env

# Auto-detect Oracle Instant Client if not set
if [ -z "$ORACLE_CLIENT_LIB_DIR" ]; then
  for d in \
    /opt/oracle/instantclient* \
    /usr/lib/oracle/*/client*/lib \
    /usr/local/oracle/instantclient* \
    "$HOME/instantclient"* \
    "C:/instantclient"* \
    "C:/oracle/instantclient"* \
    "C:/app/oracle/instantclient"*; do
    if [ -d "$d" ]; then
      export ORACLE_CLIENT_LIB_DIR="$d"
      break
    fi
  done
fi

# Auto-detect TNS_ADMIN if not set
if [ -z "$TNS_ADMIN" ]; then
  if [ -n "$ORACLE_CLIENT_LIB_DIR" ] && [ -d "$ORACLE_CLIENT_LIB_DIR/network/admin" ]; then
    export TNS_ADMIN="$ORACLE_CLIENT_LIB_DIR/network/admin"
  elif [ -n "$ORACLE_HOME" ] && [ -d "$ORACLE_HOME/network/admin" ]; then
    export TNS_ADMIN="$ORACLE_HOME/network/admin"
  fi
fi

# Enable thick mode for legacy Oracle databases (pre-12c)
# Uncomment if needed:
# export ORACLE_OLD_CRYPTO=true

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
node "$SCRIPT_DIR/dist/index.js"
