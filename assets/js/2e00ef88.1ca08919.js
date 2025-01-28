"use strict";(self.webpackChunkpersonal_documentation=self.webpackChunkpersonal_documentation||[]).push([[57],{94:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"PostgreSQL/introduction","title":"Introduction PostgreSQL","description":"Let\'s discover PostgreSQL in less than 5 minutes.","source":"@site/docs/PostgreSQL/introduction.md","sourceDirName":"PostgreSQL","slug":"/PostgreSQL/introduction","permalink":"/personal-documentation/docs/PostgreSQL/introduction","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/PostgreSQL/introduction.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar"}');var s=a(4848),d=a(8453);const i={sidebar_position:1},r="Introduction PostgreSQL",l={},c=[{value:"Data Identifier and Keyword",id:"data-identifier-and-keyword",level:2},{value:"PostgreSQL table information with Query",id:"postgresql-table-information-with-query",level:3}];function o(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"introduction-postgresql",children:"Introduction PostgreSQL"})}),"\n",(0,s.jsxs)(n.p,{children:["Let's discover ",(0,s.jsx)(n.strong,{children:"PostgreSQL in less than 5 minutes"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"data-identifier-and-keyword",children:"Data Identifier and Keyword"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Keywords"})," adalah kata yang sudah fixed dari SQL language, seperti SELECT, UPDATE, VALUE, dan lain-lain."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Identifier"})," adalah kata yang bukan dari SQL language, seperti nama_tabel, a, nama_kolom, dan lain-lain."]}),"\n",(0,s.jsx)(n.p,{children:"Berikut merupakan query singkat dan panjang untuk mencari informasi seputar tabel, skema, pengguna, dan izin secara mendetail:"}),"\n",(0,s.jsx)(n.h3,{id:"postgresql-table-information-with-query",children:"PostgreSQL table information with Query"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Query"}),(0,s.jsx)(n.th,{children:"Query Ekspansi yang Lebih Panjang"}),(0,s.jsx)(n.th,{children:"Penjelasan"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"\\d"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"SELECT table_schema, table_name, table_type FROM information_schema.tables WHERE table_schema = 'public';"})}),(0,s.jsx)(n.td,{children:"Menampilkan daftar semua tabel, views, dan sequences dalam skema saat ini."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"\\dt"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"SELECT tablename FROM pg_catalog.pg_tables WHERE schemaname = 'public';"})}),(0,s.jsx)(n.td,{children:"Menampilkan daftar semua tabel (hanya tabel) dalam skema saat ini."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"\\d table_name"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"SELECT column_name, data_type, is_nullable FROM information_schema.columns WHERE table_name = 'table_name';"})}),(0,s.jsx)(n.td,{children:"Menampilkan detail struktur tabel, termasuk kolom, tipe data, dan constraint."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"\\z"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"SELECT * FROM information_schema.role_table_grants WHERE table_schema = 'public';"})}),(0,s.jsx)(n.td,{children:"Menampilkan semua hak akses (privileges) untuk tabel, views, dan sequences."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"\\dp"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"SELECT table_schema, table_name, privilege_type, grantee FROM information_schema.role_table_grants WHERE table_schema = 'public';"})}),(0,s.jsx)(n.td,{children:"Menampilkan hak akses (privileges) pada tabel dalam skema."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"\\l"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"SELECT datname FROM pg_database;"})}),(0,s.jsx)(n.td,{children:"Menampilkan daftar semua database di server PostgreSQL saat ini."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"\\du"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"SELECT rolname, rolsuper, rolcreatedb, rolcreaterole, rolreplication FROM pg_roles;"})}),(0,s.jsx)(n.td,{children:"Menampilkan daftar semua pengguna (roles) di PostgreSQL."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"\\dx"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"SELECT extname, extversion, extnamespace::regnamespace AS schema_name FROM pg_extension;"})}),(0,s.jsx)(n.td,{children:"Menampilkan daftar semua ekstensi yang diinstal di database saat ini."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"\\df"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"SELECT routine_name, routine_schema FROM information_schema.routines WHERE routine_type = 'FUNCTION';"})}),(0,s.jsx)(n.td,{children:"Menampilkan daftar semua fungsi dalam skema."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"\\di"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"SELECT indexname, indexdef FROM pg_indexes WHERE schemaname = 'public';"})}),(0,s.jsx)(n.td,{children:"Menampilkan daftar semua indeks pada tabel dalam skema saat ini."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"\\dn"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"SELECT nspname FROM pg_namespace;"})}),(0,s.jsx)(n.td,{children:"Menampilkan daftar semua skema dalam database saat ini."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"\\ds"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"SELECT sequence_schema, sequence_name FROM information_schema.sequences WHERE sequence_schema = 'public';"})}),(0,s.jsx)(n.td,{children:"Menampilkan daftar semua sequence dalam skema saat ini."})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>i,x:()=>r});var t=a(6540);const s={},d=t.createContext(s);function i(e){const n=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);