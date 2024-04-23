const express = require("express");
const router = express.Router();

//#region BasicDeleteIncludes
const { deleteCompaniesById } = require("../helpers/delete/DeleteCompanies");
const { deleteEmployeesById } = require("../helpers/delete/DeleteEmployees");
const { deleteImagesById } = require("../helpers/delete/DeleteImages");
const { deleteObjectsById } = require("../helpers/delete/DeleteObjects");
const {
  deleteObjectElemetsById,
} = require("../helpers/delete/DeleteObjectElements");
const {
  deleteObjectTemplateElementsById,
} = require("../helpers/delete/DeleteObjectTemplateElements");
const {
  deleteObjectTemplatesById,
} = require("../helpers/delete/DeleteObjectTemplates");
const { deleteReportById } = require("../helpers/delete/DeleteReport");
const {
  deleteReportElementsById,
} = require("../helpers/delete/DeleteReportElements");
const {
  deleteReportTemplatesById,
} = require("../helpers/delete/DeleteReportTemplates");
const { deleteRolesById } = require("../helpers/delete/DeleteRoles");
const { deleteSignaturesById } = require("../helpers/delete/DeleteSignatures");
const { deleteUsersById } = require("../helpers/delete/DeleteUsers");
//#endregion BasicDeleteIncludes

//#region BasicDeletes
router.delete("/deleteCompaniesById", async (req, res) => {
  try {
    const { company_id } = req.body;

    const result = await deleteCompaniesById(company_id);

    res.status(200).json({ success: true, result });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, error: "Failed to delete the company" });
  }
});

router.delete("/deleteEmployeesById", async (req, res) => {
  try {
    const { employee_id } = req.body;

    const result = await deleteEmployeesById(employee_id);

    res.status(200).json({ success: true, result });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, error: "Failed to delete the employee" });
  }
});

router.delete("/deleteImagesById", async (req, res) => {
  try {
    const { image_id } = req.body;

    const result = await deleteImagesById(image_id);

    res.status(200).json({ success: true, result });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: "Failed to delete image" });
  }
});

router.delete("/deleteObjectsById", async (req, res) => {
  try {
    const { object_id } = req.body;

    const result = await deleteObjectsById(object_id);

    res.status(200).json({ success: true, result });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: "Failed to delete object" });
  }
});

router.delete("/deleteObjectElemetsById", async (req, res) => {
  try {
    const { object_element_id } = req.body;

    const result = await deleteObjectElemetsById(object_element_id);

    res.status(200).json({ success: true, result });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, error: "Failed to delete object element" });
  }
});

router.delete("/deleteObjectTemplateElementsById", async (req, res) => {
  try {
    const { object_template_element_id } = req.body;

    const result = await deleteObjectTemplateElementsById(
      object_template_element_id
    );

    res.status(200).json({ success: true, result });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      error: "Failed to delete object template element",
    });
  }
});

router.delete("/deleteObjectTemplatesById", async (req, res) => {
  try {
    const { object_template_id } = req.body;

    const result = await deleteObjectTemplatesById(object_template_id);

    res.status(200).json({ success: true, result });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      error: "Failed to delete object template",
    });
  }
});

router.delete("/deleteReportById/:report_id", async (req, res) => {
  try {
    const { report_id } = req.params;
    const result = await deleteReportById(report_id);

    res.status(200).json({ success: true, result });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: "Failed to delete report" });
  }
});

router.delete("/deleteReportElementsById", async (req, res) => {
  try {
    const { report_element_id } = req.body;

    const result = await deleteReportElementsById(report_element_id);

    res.status(200).json({ success: true, result });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, error: "Failed to delete report element" });
  }
});

router.delete(
  "/deleteReportTemplatesById/:report_template_id",
  async (req, res) => {
    try {
      const { report_template_id } = req.params;

      const result = await deleteReportTemplatesById(report_template_id);

      res.status(200).json({ success: true, result });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        success: false,
        error: "Failed to delete report template",
      });
    }
  }
);

router.delete("/deleteRolesById", async (req, res) => {
  try {
    const { role_id } = req.body;

    const result = await deleteRolesById(role_id);

    res.status(200).json({ success: true, result });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: "Failed to delete role" });
  }
});

router.delete("/deleteSignaturesById", async (req, res) => {
  try {
    const { signature_id } = req.body;

    const result = await deleteSignaturesById(signature_id);

    res.status(200).json({ success: true, result });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, error: "Failed to delete signature" });
  }
});

router.delete("/deleteUsersById", async (req, res) => {
  try {
    const { user_id } = req.body;

    const result = await deleteUsersById(user_id);

    res.status(200).json({ success: true, result });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: "Failed to delete user" });
  }
});

//#endregion BasicDeletes

module.exports = router;
