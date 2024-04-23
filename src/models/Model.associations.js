function applyAssociations(models) {
  const {
    User,
    Signatures,
    Employees,
    Companies,
    Roles,
    Reports,
    Report_elements,
    Report_templates,
    Report_template_elements,
    Objects,
    Objects_elements,
    Object_templates,
    Object_template_elements,
  } = models;
  // users table associations
  User.hasMany(Signatures, { foreignKey: "user_id" });
  Signatures.belongsTo(User, { foreignKey: "user_id" });

  Employees.belongsTo(User, { foreignKey: "user_id" });
  User.hasOne(Employees, { foreignKey: "user_id" });

  // companies table associations
  Companies.hasMany(Roles, { foreignKey: "company_id" });
  Roles.belongsTo(Companies, { foreignKey: "company_id" });

  Employees.belongsTo(Companies, { foreignKey: "company_id" });
  Companies.hasMany(Employees, { foreignKey: "company_id" });

  Object_templates.belongsTo(Companies, { foreignKey: "company_id" });
  Companies.hasMany(Object_templates, { foreignKey: "company_id" });

  Report_templates.belongsTo(Companies, {
    foreignKey: "company_id",
  });
  Companies.hasMany(Report_templates, { foreignKey: "company_id" });

  // roles table associations
  Roles.hasMany(Employees, { foreignKey: "role_id" });
  Employees.belongsTo(Roles, { foreignKey: "role_id" });

  // employees table associations
  Employees.belongsTo(Roles, { foreignKey: "role_id" });
  Roles.hasMany(Employees, { foreignKey: "role_id" });

  Reports.belongsTo(Employees, { foreignKey: "employee_id" });
  Employees.hasMany(Reports, { foreignKey: "employee_id" });

  Report_templates.hasMany(Reports, { foreignKey: "report_template_id" });
  Reports.belongsTo(Report_templates, { foreignKey: "report_template_id" });

  Objects.belongsTo(Employees, { foreignKey: "employee_id" });
  Employees.hasMany(Objects, { foreignKey: "employee_id" });

  // report_templates table associations
  Report_template_elements.belongsTo(Report_templates, {
    foreignKey: "report_template_id",
  });
  Report_templates.hasMany(Report_template_elements, {
    foreignKey: "report_template_id",
    as: "RTE",
  });

  Reports.hasMany(Report_elements, { foreignKey: "report_id", as: "RE" });
  Report_elements.belongsTo(Reports, { foreignKey: "report_id" });

  // report_elements table associations
  Report_elements.belongsTo(Report_template_elements, {
    foreignKey: "report_template_element_id",
    as: "RTE",
  });
  Report_template_elements.hasMany(Report_elements, {
    foreignKey: "report_template_element_id",
    as: "RE",
  });

  return models;
}

module.exports = applyAssociations;
