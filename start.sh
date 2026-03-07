#!/bin/bash
export ORACLE_OLD_CRYPTO=true
export ORACLE_CLIENT_LIB_DIR="C:\\instantclient_23_5"
export TNS_ADMIN="C:\\instantclient_23_5\\network\\admin"
node "C:/Users/sotelos/oracle-apex-mcp-server/dist/index.js"
