# Oracle APEX MCP Server

Servidor MCP (Model Context Protocol) completo para **Oracle Database** + **Oracle APEX 20.2**, diseñado para integrarse directamente con Claude y habilitar desarrollo auténtico con acceso a la base de datos y metadatos de APEX.

## Características

### Oracle Database (lectura + escritura)
- **Queries**: SELECT con bind variables, paginación, formato markdown/JSON
- **DML**: INSERT, UPDATE, DELETE, MERGE con auto-commit configurable
- **DDL**: CREATE, ALTER, DROP, TRUNCATE, GRANT, REVOKE
- **PL/SQL**: Ejecutar bloques anónimos y llamadas a procedimientos
- **Transacciones**: Múltiples sentencias en una transacción atómica
- **Explain Plan**: Análisis de planes de ejecución
- **Compilación**: Recompilar objetos PL/SQL y ver errores

### Inspección de Objetos (lectura)
- **Tablas**: Listar, describir (columnas, índices, constraints, triggers)
- **Objetos**: Listar por tipo (PACKAGE, VIEW, PROCEDURE, FUNCTION, etc.)
- **Código fuente**: Ver source de packages, procedures, views
- **Búsqueda**: Buscar en nombres de objetos y código fuente
- **Dependencias**: Análisis de impacto (qué usa / quién lo usa)
- **Preview de datos**: Muestra de filas con filtros opcionales

### Oracle APEX 20.2 (solo lectura)
- **Aplicaciones**: Listar apps, ver detalles (páginas, LOVs, auth schemes)
- **Páginas**: Describir regiones, items, procesos, dynamic actions, validaciones
- **Usuarios**: Listar usuarios de workspace
- **REST/ORDS**: Ver módulos REST, templates, handlers
- **AutoREST**: Ver objetos habilitados para ORDS

## Herramientas Disponibles (21 tools)

| Tool | Categoría | Tipo |
|------|-----------|------|
| `oracle_health_check` | DB | Read |
| `oracle_query` | DB | Read |
| `oracle_execute` | DB | Write |
| `oracle_transaction` | DB | Write |
| `oracle_explain_plan` | DB | Read |
| `oracle_compile_object` | DB | Write |
| `oracle_show_errors` | DB | Read |
| `oracle_table_data_preview` | DB | Read |
| `oracle_connection_info` | DB | Read |
| `oracle_list_tables` | Objects | Read |
| `oracle_describe_table` | Objects | Read |
| `oracle_list_objects` | Objects | Read |
| `oracle_get_source` | Objects | Read |
| `oracle_search` | Objects | Read |
| `oracle_dependencies` | Objects | Read |
| `apex_list_applications` | APEX | Read |
| `apex_describe_application` | APEX | Read |
| `apex_describe_page` | APEX | Read |
| `apex_list_workspace_users` | APEX | Read |
| `apex_list_rest_services` | APEX | Read |
| `apex_list_ords_enabled_objects` | APEX | Read |

## Instalación

### Prerrequisitos
- Node.js >= 18.0.0
- Acceso a Oracle Database (12c R1.2 o superior)
- Oracle Instant Client (solo si `ORACLE_OLD_CRYPTO=true`)

### Pasos

```bash
git clone <repo-url>
cd oracle-apex-mcp-server
npm install
npm run build
```

## Configuración

### Variables de Entorno

| Variable | Descripción | Default |
|----------|-------------|---------|
| `ORACLE_HOST` | Host del servidor Oracle | `localhost` |
| `ORACLE_PORT` | Puerto | `1521` |
| `ORACLE_SERVICE_NAME` | Nombre del servicio | `XE` |
| `ORACLE_USERNAME` | Usuario | `hr` |
| `ORACLE_PASSWORD` | Contraseña | (requerido) |
| `ORACLE_CONNECTION_STRING` | TNS connect string completo (alternativo) | — |
| `ORACLE_OLD_CRYPTO` | Usar modo Thick para Oracle antiguo | `false` |
| `ORACLE_CLIENT_LIB_DIR` | Ruta a Oracle Instant Client | — |
| `ORACLE_POOL_MIN` | Conexiones mínimas del pool | `1` |
| `ORACLE_POOL_MAX` | Conexiones máximas del pool | `10` |
| `ORACLE_POOL_TIMEOUT` | Timeout del pool (segundos) | `60` |
| `ORACLE_FETCH_SIZE` | Filas por fetch | `100` |
| `ORACLE_STMT_CACHE_SIZE` | Cache de statements | `30` |

### Configuración MCP para Claude Desktop

```json
{
  "mcpServers": {
    "oracle-apex": {
      "command": "node",
      "args": ["<ruta>/oracle-apex-mcp-server/dist/index.js"],
      "env": {
        "ORACLE_HOST": "tu-host",
        "ORACLE_PORT": "1521",
        "ORACLE_SERVICE_NAME": "tu-servicio",
        "ORACLE_USERNAME": "tu-usuario",
        "ORACLE_PASSWORD": "tu-password"
      }
    }
  }
}
```

### Para Oracle 12c con crypto antiguo

```json
{
  "mcpServers": {
    "oracle-apex": {
      "command": "node",
      "args": ["<ruta>/oracle-apex-mcp-server/dist/index.js"],
      "env": {
        "ORACLE_HOST": "tu-host",
        "ORACLE_PORT": "1521",
        "ORACLE_SERVICE_NAME": "tu-servicio",
        "ORACLE_USERNAME": "tu-usuario",
        "ORACLE_PASSWORD": "tu-password",
        "ORACLE_OLD_CRYPTO": "true",
        "ORACLE_CLIENT_LIB_DIR": "C:\\oracle\\instantclient_19_26"
      }
    }
  }
}
```

## Ejemplos de Uso

### Health Check
```
oracle_health_check()
```

### Query con bind variables
```
oracle_query({
  sql: "SELECT * FROM employees WHERE department_id = :dept_id",
  binds: { dept_id: 10 },
  max_rows: 50,
  format: "markdown"
})
```

### Ejecutar DML
```
oracle_execute({
  sql: "UPDATE employees SET salary = salary * 1.1 WHERE department_id = :dept",
  binds: { dept: 10 },
  auto_commit: true
})
```

### Transacción
```
oracle_transaction({
  statements: [
    "INSERT INTO audit_log (action, created_date) VALUES ('SALARY_UPDATE', SYSDATE)",
    "UPDATE employees SET salary = salary * 1.1 WHERE department_id = 10"
  ],
  rollback_on_error: true
})
```

### Describir tabla completa
```
oracle_describe_table({
  table_name: "EMPLOYEES",
  include_indexes: true,
  include_constraints: true,
  include_triggers: true
})
```

### Ver código fuente de un package
```
oracle_get_source({
  object_name: "PKG_PRE_VISACION",
  object_type: "PACKAGE BODY"
})
```

### Buscar en código fuente
```
oracle_search({
  search_term: "apex_json.parse",
  search_in: "source"
})
```

### Análisis de dependencias
```
oracle_dependencies({
  object_name: "VISACION_PREVIA",
  direction: "used_by"
})
```

### Listar apps APEX
```
apex_list_applications({ format: "markdown" })
```

### Describir página APEX con todo
```
apex_describe_page({
  app_id: 100,
  page_id: 10,
  include_regions: true,
  include_items: true,
  include_processes: true,
  include_dynamic_actions: true,
  include_validations: true
})
```

## Integración con Skills de APEX

Este MCP está diseñado para trabajar en conjunto con:

1. **apex-migrate-dev skill**: Acceso directo a la BD para validar schemas, ver source de packages, compilar y probar
2. **System prompts de APEX 20.2**: Los queries sobre APEX views entregan el contexto real de la aplicación
3. **Pre-visación API integration**: Consultar tablas de visacion_previa, feedback_matching, log_webhook_eventos directamente

## Licencia

MIT
