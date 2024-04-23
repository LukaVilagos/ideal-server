--1st step logging into postgres user
psql -d postgres -U postgres

--create user which has CREATEDB
CREATE USER ideal_admin WITH LOGIN PASSWORD 'AEgPt6b9rxw2w3lx';
ALTER ROLE ideal_admin CREATEDB;


//log into postgres with ideal_admin
psql -d postgres -U ideal_admin
AEgPt6b9rxw2w3lx

--creating the database ideal and add uuid random generated uuid-ossp
CREATE DATABASE ideal; 
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";


--the tables and constraints

--ITS FIXED, FULLY WORKING PSQL CODE
--makes the table Users whole primary key is user_id
--index the user_id
CREATE TABLE users(
user_id uuid default uuid_generate_v4(),
last_name varchar(255) NOT NULL,
first_name varchar(255) NOT NULL,
email varchar NOT NULL,
password varchar NOT NULL,
created_at timestamp default now(),

CONSTRAINT pk_user_id PRIMARY KEY (user_id)
);

CREATE TABLE signatures(
signature_id uuid default uuid_generate_v4(),
user_id uuid REFERENCES Users(user_id) NOT NULL,

CONSTRAINT pk_singature_id PRIMARY KEY (signature_id)
);


CREATE TABLE companies(
company_id uuid default uuid_generate_v4(),
company_name varchar(255) NOT NULL,
created_at timestamp default current_timestamp,
company_location varchar(255),
date_of_creation timestamp default current_timestamp,
company_phone_number varchar(20) UNIQUE,
company_code TEXT UNIQUE,
company_password TEXT UNIQUE,
company_description text,
company_email varchar(255) UNIQUE,

CONSTRAINT pk_company_id PRIMARY KEY (company_id)
);


CREATE TABLE roles(
role_id uuid default uuid_generate_v4(),
role_name varchar(255),
can_view boolean not null default true,
can_edit boolean not null default false,
can_delete boolean not null default false,
can_download boolean not null default false,
can_create_template boolean not null default false,
can_create_roles boolean not null default false,
can_manage_company boolean not null default false,
company_id uuid REFERENCES Companies(company_id) NOT NULL,

CONSTRAINT pk_role_id PRIMARY KEY (role_id)
);


CREATE TABLE employees(
employee_id uuid default uuid_generate_v4(),
user_id uuid REFERENCES Users(user_id) NOT NULL,
company_id uuid REFERENCES Companies(company_id) NOT NULL,
role_id uuid REFERENCES Roles(role_id) NOT NULL,
created_at timestamp default current_timestamp,

CONSTRAINT pk_employee_id PRIMARY KEY (employee_id)
);


CREATE TABLE object_templates(
object_template_id uuid default uuid_generate_v4(),
object_template_name varchar(255) NOT NULL,
created_at timestamp default current_timestamp,
company_id uuid REFERENCES Companies(company_id) NOT NULL,
employee_id uuid REFERENCES Employees(employee_id) NOT NULL,

CONSTRAINT pk_object_template_id PRIMARY KEY (object_template_id)
);


CREATE TABLE object_template_elements(
object_template_element_id uuid default uuid_generate_v4(),
object_template_id uuid REFERENCES Object_templates(object_template_id) NOT NULL,
object_template_element_name varchar(255),
object_template_element_type varchar(255),
object_template_element_options JSONB,
object_template_element_image_count int,
object_template_element_images_column_count int,
object_templatet_element_length varchar(10),
object_template_element_orientation varchar(10),
object_template_element_break_count int,

CONSTRAINT pk_object_template_element_id PRIMARY KEY (object_template_element_id)
);

CREATE TABLE objects(
object_id uuid default uuid_generate_v4(),
object_name varchar(40),
object_template_id uuid REFERENCES Object_templates(object_template_id) NOT NULL,
created_at timestamp default current_timestamp,
employee_id uuid REFERENCES Employees(employee_id) NOT NULL,

CONSTRAINT pk_object_id PRIMARY KEY (object_id)
);

CREATE TABLE object_elements(
object_element_id uuid default uuid_generate_v4(),
object_id uuid REFERENCES Objects(object_id) NOT NULL,
object_template_element_id uuid REFERENCES Object_template_elements(object_template_element_id) NOT NULL,
object_element_value JSONB,

CONSTRAINT pk_object_element_id PRIMARY KEY (object_element_id)
);


CREATE TABLE report_templates(
report_template_id uuid default uuid_generate_v4(),
report_template_name varchar(255),
created_at timestamp default current_timestamp,
company_id uuid REFERENCES Companies(company_id) NOT NULL,
employee_id uuid REFERENCES Employees(employee_id) NOT NULL,

CONSTRAINT pk_report_template_id PRIMARY KEY (report_template_id)
);


CREATE TABLE report_template_elements(
report_template_element_id uuid default uuid_generate_v4(),
report_template_id uuid REFERENCES Report_templates(report_template_id) NOT NULL,
report_template_element_name varchar(255),
report_template_element_type varchar(255),
report_template_element_options JSONB,
report_template_element_image_count int,
report_template_element_images_column_count int,
object_template_id uuid REFERENCES Object_templates(object_template_id), --can be null
report_template_element_signature_text varchar(255),
report_template_element_signature_position varchar(10),
report_template_element_length varchar(10),
report_template_element_orientation varchar(10),
report_template_element_break_count int,
is_required boolean not null default false, --maybe we shouldnt

CONSTRAINT pk_report_template_element_id PRIMARY KEY (report_template_element_id)
);

--DIGITAL SIGNATURE COLLUMN
CREATE TABLE reports(
report_id uuid default uuid_generate_v4(),
report_name varchar(255),
report_template_id uuid REFERENCES Report_templates(report_template_id) NOT NULL,
is_draft boolean not null default false,
created_at timestamp default current_timestamp,
last_edited timestamp default current_timestamp,
employee_id uuid REFERENCES Employees(employee_id) NOT NULL,
company_id uuid REFERENCES Companies(company_id) NOT NULL,

CONSTRAINT pk_report_id PRIMARY KEY (report_id)
);

CREATE TABLE report_elements(
report_element_id uuid default uuid_generate_v4(),
report_id uuid REFERENCES Reports(report_id) NOT NULL,
report_template_element_id uuid REFERENCES Report_template_elements(report_template_element_id) NOT NULL,
report_element_value JSONB,

CONSTRAINT pk_report_element_id PRIMARY KEY (report_element_id)
);


CREATE TABLE images(
image_id uuid default uuid_generate_v4(),
image_name varchar (255) NOT NULL,
image_url varchar (255) NOT NULL,
company_id uuid REFERENCES Companies(company_id) NOT NULL,
user_id uuid REFERENCES Report_elements(report_element_id) NOT NULL,
signature_id uuid REFERENCES Signatures(signature_id) NOT NULL,
report_element_id uuid REFERENCES Report_elements(report_element_id) NOT NULL,
object_element_id uuid REFERENCES Object_elements(object_element_id) NOT NULL,

CONSTRAINT pk_image_id PRIMARY KEY (image_id)
);

--for every connection this:  
<--
CREATE TABLE imagecompany(
    id uuid default uuid_generate_v4(),
    image_id uuid default uuid_generate_v4(),
    company_id uuid REFERENCES Companies(company_id) NOT NULL,

    CONSTRAINT pk_id PRIMARY KEY (id);
);
-->