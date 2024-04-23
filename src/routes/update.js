const express = require("express");
const router = express.Router();

//#region BasicUpdateIncludes
const updateCompanyById = require("../helpers/update/UpdateCompanies");
const updateEmployeeById = require("../helpers/update/UpdateEmployees");
const updateRoleById = require("../helpers/update/UpdateRoles");
const updateImagesById = require("../helpers/update/UpdateImages");
const updateObjectElementsById = require("../helpers/update/UpdateObjectElements");
const updateObjectById = require("../helpers/update/UpdateObjects");
const updateObjectTemplateElementById = require("../helpers/update/UpdateObjectTemplateElements");
const updateObjectTemplateById = require("../helpers/update/UpdateObjectTemplates");
const updateReportElementsById = require("../helpers/update/UpdateReportElements");
const updateReportById = require("../helpers/update/UpdateReports");
const updateReportTemplateElementById = require("../helpers/update/UpdateReportTemplateElements");
const updateReportTemplateById = require("../helpers/update/UpdateReportTemplates");
const updateSignatureById = require("../helpers/update/UpdateSignatures");
const updateUserById = require("../helpers/update/UpdateUser");
//#endregion

//#region update
router.put("/updateCompanyById", async (req, res) => {
  try {
    const { companyId } = req.body;

    const result = await updateCompanyById(companyId);

    res.status(200).json({ success: true, result });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, error: "Failed to update the company" });
  }
});

router.put("/updateEmployeeById", async (req, res) => {
  try {
    const { employeeId } = req.body;

    const result = await updateEmployeeById(employeeId);

    res.status(200).json({ success: true, result });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, error: "Failed to update the employee" });
  }
});
//fix everything using this one as a model:
router.put("/updateRoleById", async (req, res) => {
  try {
    const { roleId, roleData } = req.body;

    const result = await updateRoleById(roleId, roleData);

    res.status(200).json({ success: true, result });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      error: "Failed to update the role",
    });
  }
});

router.put("/updateImageById", async (req, res) => {
  try {
    const { imageId } = req.body;

    const result = await updateImagesById(imageId);

    res.status(200).json({ success: true, result });
  } catch (error) {
    console.log(error);
    res.Routers.status(500).json({
      success: false,
      error: "Failed to update the image",
    });
  }
});

router.put("/updateObjectElementById", async (req, res) => {
  try {
    const { objectElementId } = req.body;

    const result = await updateObjectElementsById(objectElementId);

    res.status(200).json({ success: true, result });
  } catch (error) {
    console.log(error);
    res.Routers.status(500).json({
      success: false,
      error: "Failed to update the object element",
    });
  }
});

router.put("/updateObjectById", async (req, res) => {
  try {
    const { objectId } = req.body;

    const result = await updateObjectById(objectId);

    res.status(200).json({ success: true, result });
  } catch (error) {
    console.log(error);
    res.Routers.status(500).json({
      success: false,
      error: "Failed to update the object",
    });
  }
});

router.put("/updateObjectTemplateElementById", async (req, res) => {
  try {
    const { objectTemplateElementId } = req.body;

    const result = await updateObjectTemplateElementById(
      objectTemplateElementId
    );

    res.status(200).json({ success: true, result });
  } catch (error) {
    console.log(error);
    res.Routers.status(500).json({
      success: false,
      error: "Failed to update the object template element",
    });
  }
});

router.put("/updateObjectTemplateById", async (req, res) => {
  try {
    const { objectTemplateId } = req.body;

    const result = await updateObjectTemplateById(objectTemplateId);

    res.status(200).json({ success: true, result });
  } catch (error) {
    console.log(error);
    res.Routers.status(500).json({
      success: false,
      error: "Failed to update the object template",
    });
  }
});

router.put("/updateReportElementById", async (req, res) => {
  try {
    const { reportElementId, reportElement } = req.body;
    const result = await updateReportElementsById(
      reportElementId,
      reportElement
    );

    res.status(200).json({ success: true, result });
  } catch (error) {
    console.log(error);
    res.Routers.status(500).json({
      success: false,
      error: "Failed to update the report element",
    });
  }
});

router.put("/updateReportById", async (req, res) => {
  try {
    const { reportId, report } = req.body;

    const result = await updateReportById(reportId, report);

    res.status(200).json({ success: true, result });
  } catch (error) {
    console.log(error);
    res.Routers.status(500).json({
      success: false,
      error: "Failed to update the report",
    });
  }
});

router.put("/updateReportTemplateElementById", async (req, res) => {
  try {
    const { reportTemplateElementId, reporTemplatetElement } = req.body;

    const result = await updateReportTemplateElementById(
      reportTemplateElementId,
      reporTemplatetElement
    );

    res.status(200).json({ success: true, result });
  } catch (error) {
    console.log(error);
    res.Routers.status(500).json({
      success: false,
      error: "Failed to update the report template element",
    });
  }
});

router.put("/updateReportTemplateById", async (req, res) => {
  try {
    const { reportTemplateId, template } = req.body;

    const result = await updateReportTemplateById(reportTemplateId, template);

    res.status(200).json({ success: true, result });
  } catch (error) {
    console.log(error);
    res.Routers.status(500).json({
      success: false,
      error: "Failed to update the report template",
    });
  }
});

router.put("/updateSignatureById", async (req, res) => {
  try {
    const { signatureId } = req.body;

    const result = await updateSignatureById(signatureId);

    res.status(200).json({ success: true, result });
  } catch (error) {
    console.log(error);
    res.Routers.status(500).json({
      success: false,
      error: "Failed to update the signature",
    });
  }
});

router.put("/updateUserById", async (req, res) => {
  try {
    const { userId } = req.body;

    const result = await updateUserById(userId);

    res.status(200).json({ success: true, result });
  } catch (error) {
    console.log(error);
    res.Routers.status(500).json({
      success: false,
      error: "Failed to update the user",
    });
  }
});

//#endregion

module.exports = router;
