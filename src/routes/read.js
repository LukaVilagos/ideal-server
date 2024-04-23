const express = require("express");
const router = express.Router();

//#region DBIncludes
const User = require("../models/Users.model");
const Signatures = require("../models/Signatures.model");
const Companies = require("../models/Companies.model");
const Roles = require("../models/Roles.model");
const Employees = require("../models/Employees.model");
const Object_templates = require("../models/Object_templates.model");
const Object_template_elements = require("../models/Objects_template_elements.model");
const Objects = require("../models/Objects.model");
const Objects_elements = require("../models/Object_elements.model");
const Report_templates = require("../models/Report_templates.model");
const Report_template_elements = require("../models/Report_template_elements.model");
const Reports = require("../models/Reports.model");
const Report_elements = require("../models/Report_elements.model");
const Images = require("../models/Images.model");
const sequelize = require("../models/db");
//#endregion DBIncludes

//#region TableReads
router.get("/getAllUsers", async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(404).json({ message: "Can not get all users" });
  }
});

router.get("/getAllSignatures", async (req, res) => {
  try {
    const signatures = await Signatures.findAll();
    res.json(signatures);
  } catch (error) {
    console.error(error);
    res.status(404).json({ message: "Can not get all Signatures" });
  }
});

router.get("/getAllCompanies", async (req, res) => {
  try {
    const companies = await Companies.findAll();
    res.json(companies);
  } catch (error) {
    console.error(error);
    res.status(404).json({ message: "Can not get all companies" });
  }
});

router.get("/getAllRoles", async (req, res) => {
  try {
    const roles = await Roles.findAll();
    res.json(roles);
  } catch (error) {
    console.error(error);
    res.status(404).json({ message: "Can not get all roles" });
  }
});

router.get("/getAllEmployees", async (req, res) => {
  try {
    const employees = await Employees.findAll();
    res.json(employees);
  } catch (error) {
    console.error(error);
    res.status(404).json({ message: "Can not get all employees" });
  }
});

router.get("/getAllObjectTemplates", async (req, res) => {
  try {
    const object_templates = await Object_templates.findAll();
    res.json(object_templates);
  } catch (error) {
    console.error(error);
    res.status(404).json({ message: "Can not get all Object_templates" });
  }
});

router.get("/getAllObject", async (req, res) => {
  try {
    const objects = await Objects.findAll();
    res.json(objects);
  } catch (error) {
    console.error(error);
    res.status(404).json({ message: "Can not get all Objects" });
  }
});

router.get("/getAllObjectElements", async (req, res) => {
  try {
    const object_elements = await Object_ElementsObject_elements.findAll();
    res.json(object_elements);
  } catch (error) {
    console.error(error);
    res
      .status(404)
      .json({ message: "Can not get all Object_ElementsObject_elements" });
  }
});

router.get("/getAllObjectTemplateElements", async (req, res) => {
  try {
    const object_template_elements = await Object_template_elements.findAll();
    res.json(object_template_elements);
  } catch (error) {
    console.error(error);
    res.status(404).json({ message: "Can not get all ObjectTemplateElements" });
  }
});

router.get("/getAllObjectsElements", async (req, res) => {
  try {
    const objects_elements = await Objects_elements.findAll();
    res.json(objects_elements);
  } catch (error) {
    console.error(error);
    res.status(404).json({ message: "Can not get all Objects_elements" });
  }
});

router.get("/getAllReportTemplates", async (req, res) => {
  try {
    const report_templates = await Report_templates.findAll();
    res.json(report_templates);
  } catch (error) {
    console.error(error);
    res.status(404).json({ message: "Can not get all Report_templates" });
  }
});

router.get("/getAllReports", async (req, res) => {
  try {
    const reports = await Reports.findAll();
    res.json(reports);
  } catch (error) {
    console.error(error);
    res.status(404).json({ message: "Can not get all Reports" });
  }
});

router.get("/getAllReportTemplateElements", async (req, res) => {
  try {
    const report_template_elements = await Report_template_elements.findAll();
    res.json(report_template_elements);
  } catch (error) {
    console.error(error);
    res
      .status(404)
      .json({ message: "Can not get all Report_template_elements" });
  }
});

router.get("/getAllReportElements", async (req, res) => {
  try {
    const report_elements = await Report_elements.findAll();
    res.json(report_elements);
  } catch (error) {
    console.error(error);
    res.status(404).json({ message: "Can not get all Report_elements" });
  }
});

router.get("/getAllImages", async (req, res) => {
  try {
    const images = await Images.findAll();
    res.json(images);
  } catch (error) {
    console.error(error);
    res.status(404).json({ message: "Can not get all Images" });
  }
});

//#endregion TableReads

const applyAssociations = require("../models/Model.associations");

const associationModel = {
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
};

const model = applyAssociations(associationModel);

router.get("/getAllRelatedToReports", async (req, res) => {
  console.log("getRlatedReports");
  try {
    const reports = await model.Reports.findAll({
      include: [
        {
          model: model.Report_elements,
          as: "RE",
          required: true,
          include: [{ model: model.Report_template_elements, as: "RTE" }],
        },
        {
          model: model.Report_templates,
          required: true,
        },
        {
          model: model.Employees,
          required: true,
          include: [
            {
              model: model.User,
              required: true,
            },
          ],
        },
      ],
    });
    res.json({ reports });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

router.get("/getRelatedToReportsByReportId/:report_id", async (req, res) => {
  const { report_id } = req.params;
  try {
    const reports = await model.Reports.findOne({
      where: {
        report_id: report_id,
      },
      include: [
        {
          model: model.Report_templates,
          required: true,
        },
        {
          model: model.Employees,
          required: true,
          include: [
            {
              model: model.User,
              required: true,
            },
          ],
        },
        {
          model: model.Report_elements,
          as: "RE",
          required: true,
          include: [{ model: model.Report_template_elements, as: "RTE" }],
        },
      ],
    });
    res.json(reports);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

router.get(
  "/getAllRelatedToReportsByReportTemplate/:report_template_id",
  async (req, res) => {
    const { report_template_id } = req.params;
    console.log(report_template_id);
    try {
      const reports = await model.Reports.findAll({
        where: {
          report_template_id: report_template_id,
        },
        include: [
          {
            model: model.Report_templates,
            required: true,
          },
          {
            model: model.Employees,
            required: true,
            include: [
              {
                model: model.User,
                required: true,
              },
            ],
          },
          {
            model: model.Report_elements,
            as: "RE",
            required: true,
            include: [{ model: model.Report_template_elements, as: "RTE" }],
          },
        ],
      });
      res.json(reports);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }
);

router.get("/getRelatedEmployee", async (req, res) => {
  const { user_id } = req.body;
  try {
    const employee = await model.Employees.findOne({
      where: {
        user_id: user_id,
      },
    });
    res.json(employee);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

router.get("/getAllRelatedTemplates", async (req, res) => {
  try {
    const relatedTemplates = await model.Report_templates.findAll();
    res.json(relatedTemplates);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

router.get("/getAllReportTemplatesAndElementsByEmployee", async (req, res) => {
  const { employee_id } = req.body;
  try {
    const report_templates = await model.Report_templates.findAll({
      where: {
        employee_id: employee_id,
      },
      include: [
        {
          model: model.Report_template_elements,
          required: true,
        },
      ],
    });
    res.json(report_templates);
  } catch (error) {
    res.status(404).json({ error: error.message });
    console.error(error);
  }
});

router.get("/getAllReportTemplatesAndElements", async (req, res) => {
  try {
    const report_templates = await model.Report_templates.findAll({
      include: [
        {
          model: model.Report_template_elements,
          required: true,
        },
      ],
    });
    res.json(report_templates);
  } catch (error) {
    res.status(404).json({ error: error.message });
    console.error(error);
  }
});

router.get(
  "/getReportTemplatesAndElementsByReportTemplate/:report_template_id",
  async (req, res) => {
    const { report_template_id } = req.params;
    try {
      const report_templates = await model.Report_templates.findOne({
        where: {
          report_template_id: report_template_id,
        },
        include: [
          {
            model: model.Report_template_elements,
            required: true,
            as: "RTE",
          },
        ],
      });
      res.json(report_templates);
    } catch (error) {
      res.status(404).json({ error: error.message });
      console.error(error);
    }
  }
);

router.get(
  "/getAllReportTemplatesAndElementsByReportTemplate",
  async (req, res) => {
    try {
      const report_templates = await model.Report_templates.findAll({
        include: [
          {
            model: model.Report_template_elements,
            required: true,
            as: "RTE",
          },
        ],
      });
      res.json(report_templates);
    } catch (error) {
      res.status(404).json({ error: error.message });
      console.error(error);
    }
  }
);

router.get(
  "/getEmployeeByUserAndCompany/:user_id/:company_id",
  async (req, res) => {
    const { user_id, company_id } = req.params;
    try {
      const employee = await model.Employees.findOne({
        where: {
          user_id: user_id,
          company_id: company_id,
        },
      });
      res.json(employee);
    } catch (error) {
      res.status(404).json({ error: error.message });
      console.error(error);
    }
  }
);

router.get("/getFirstCompany", async (req, res) => {
  try {
    const compnay = await model.Companies.findOne();
    res.json(compnay);
  } catch (error) {
    res.status(404).json({ error: error.message });
    console.error(error);
  }
});

router.get(
  "/getReportTemplateElementsById/:report_template_element_id",
  async (req, res) => {
    const { report_template_element_id } = req.params;
    const result = await model.Report_template_elements.findOne({
      where: {
        report_template_element_id: report_template_element_id,
      },
    });
    res.json(result);
  }
);

router.get("/test", async (req, res) => {
  const result = await model.Report_elements.findAll({
    include: [
      {
        model: model.Report_template_elements,
      },
    ],
  });
  res.json(result);
});

module.exports = router;
