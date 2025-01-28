---
sidebar_position: 1
---

# Introduction PostgreSQL

Let's discover **PostgreSQL in less than 5 minutes**.

## Data Identifier and Keyword

**Keywords** adalah kata yang sudah fixed dari SQL language, seperti SELECT, UPDATE, VALUE, dan lain-lain.

**Identifier** adalah kata yang bukan dari SQL language, seperti nama_tabel, a, nama_kolom, dan lain-lain.

Berikut merupakan query singkat dan panjang untuk mencari informasi seputar tabel, skema, pengguna, dan izin secara mendetail:

### PostgreSQL table information with Query

| Query           | Query Ekspansi yang Lebih Panjang                                                                                                   | Penjelasan                                                                    |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `\d`            | `SELECT table_schema, table_name, table_type FROM information_schema.tables WHERE table_schema = 'public';`                         | Menampilkan daftar semua tabel, views, dan sequences dalam skema saat ini.    |
| `\dt`           | `SELECT tablename FROM pg_catalog.pg_tables WHERE schemaname = 'public';`                                                           | Menampilkan daftar semua tabel (hanya tabel) dalam skema saat ini.            |
| `\d table_name` | `SELECT column_name, data_type, is_nullable FROM information_schema.columns WHERE table_name = 'table_name';`                       | Menampilkan detail struktur tabel, termasuk kolom, tipe data, dan constraint. |
| `\z`            | `SELECT * FROM information_schema.role_table_grants WHERE table_schema = 'public';`                                                 | Menampilkan semua hak akses (privileges) untuk tabel, views, dan sequences.   |
| `\dp`           | `SELECT table_schema, table_name, privilege_type, grantee FROM information_schema.role_table_grants WHERE table_schema = 'public';` | Menampilkan hak akses (privileges) pada tabel dalam skema.                    |
| `\l`            | `SELECT datname FROM pg_database;`                                                                                                  | Menampilkan daftar semua database di server PostgreSQL saat ini.              |
| `\du`           | `SELECT rolname, rolsuper, rolcreatedb, rolcreaterole, rolreplication FROM pg_roles;`                                               | Menampilkan daftar semua pengguna (roles) di PostgreSQL.                      |
| `\dx`           | `SELECT extname, extversion, extnamespace::regnamespace AS schema_name FROM pg_extension;`                                          | Menampilkan daftar semua ekstensi yang diinstal di database saat ini.         |
| `\df`           | `SELECT routine_name, routine_schema FROM information_schema.routines WHERE routine_type = 'FUNCTION';`                             | Menampilkan daftar semua fungsi dalam skema.                                  |
| `\di`           | `SELECT indexname, indexdef FROM pg_indexes WHERE schemaname = 'public';`                                                           | Menampilkan daftar semua indeks pada tabel dalam skema saat ini.              |
| `\dn`           | `SELECT nspname FROM pg_namespace;`                                                                                                 | Menampilkan daftar semua skema dalam database saat ini.                       |
| `\ds`           | `SELECT sequence_schema, sequence_name FROM information_schema.sequences WHERE sequence_schema = 'public';`                         | Menampilkan daftar semua sequence dalam skema saat ini.                       |
