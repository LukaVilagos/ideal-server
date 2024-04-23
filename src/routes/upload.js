const express = require("express");
const router = express.Router();

//#regions BasicUploadIncludes
const postCompany = require("../helpers/upload/PostCompanies");
const postEmployee = require("../helpers/upload/PostEmployees");
const postRole = require("../helpers/upload/PostRoles");
const postImages = require("../helpers/upload/PostImages");
const postObjectElement = require("../helpers/upload/PostObjectElements");
const postObject = require("../helpers/upload/PostObjects");
const postObjectTemplateElement = require("../helpers/upload/PostObjectTemplateElements");
const postObjectTemplate = require("../helpers/upload/PostObjectTemplates");
const postReportElement = require("../helpers/upload/PostReportElement");
const postReport = require("../helpers/upload/PostReports");
const postReportTemplateElements = require("../helpers/upload/PostReportTemplateElements");
const postReportTemplate = require("../helpers/upload/PostReportTemplates");
const postSignature = require("../helpers/upload/PostSignatures");
const postReportElements = require("../helpers/upload/PostReportElements");
const postReportTemplateElement = require("../helpers/upload/PostReportTemplatElement");
//#endregion

//#region uploads
router.post("/postCompany", async (req, res) => {
  const companyData = req.body;
  try {
    const newCompany = await postCompany(companyData);
    res.status(201).json(newCompany);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post("/postEmployee", async (req, res) => {
  const employeeData = req.body;
  try {
    const newEmployee = await postEmployee(employeeData);
    res.status(201).json(newEmployee);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post("/postRole", async (req, res) => {
  const roleData = req.body;
  try {
    const newRole = await postRole(roleData);
    res.status(201).json(newRole);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post("/postImages", async (req, res) => {
  const imageData = req.body;
  try {
    const newImages = await postImages(imageData);
    res.status(201).json(newImages);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post("/postObjectElement", async (req, res) => {
  const objectElementData = req.body;
  try {
    const newObjectElement = await postObjectElement(objectElementData);
    res.status(201).json(newObjectElement);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post("/postObject", async (req, res) => {
  const objectData = req.body;
  try {
    const newObject = await postObject(objectData);
    res.status(201).json(newObject);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post("/postObjectTemplateElement", async (req, res) => {
  const objectTemplateElementData = req.body;
  try {
    const newObjectTemplateElement = await postObjectTemplateElement(
      objectTemplateElementData
    );
    res.status(201).json(newObjectTemplateElement);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post("/postObjectTemplate", async (req, res) => {
  const objectTemplateData = req.body;
  try {
    const newObjectTemplate = await postObjectTemplate(objectTemplateData);
    res.status(201).json(newObjectTemplate);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post("/postReportElement", async (req, res) => {
  const reportElementData = req.body;
  try {
    const newReportElement = await postReportElement(reportElementData);
    res.status(201).json(newReportElement);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post("/postReportElements", async (req, res) => {
  const { reportElementsData, report_id } = req.body;
  try {
    const newReportElements = await postReportElements(
      reportElementsData,
      report_id
    );
    res.status(201).json(newReportElements);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
router.post("/postReport", async (req, res) => {
  const reportData = req.body;
  try {
    const newReport = await postReport(reportData);
    res.status(201).json(newReport);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post("/postReportTemplateElements", async (req, res) => {
  const { reportTemplateElementsData, report_template_id } = req.body;
  try {
    const newReportTemplateElements = await postReportTemplateElements(
      reportTemplateElementsData,
      report_template_id
    );
    res.status(201).json(newReportTemplateElements);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post("/postReportTemplateElement", async (req, res) => {
  const { reportTemplateElementsData, report_template_id } = req.body;
  console.log(reportTemplateElementsData, report_template_id);
  try {
    const newReportTemplateElements = await postReportTemplateElement(
      reportTemplateElementsData,
      report_template_id
    );
    res.status(201).json(newReportTemplateElements);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post("/postReportTemplate", async (req, res) => {
  const reportTemplateData = req.body;
  try {
    const newReportTemplate = await postReportTemplate(reportTemplateData);
    res.status(201).json(newReportTemplate);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post("/postSignature", async (req, res) => {
  const signatureData = req.body;
  try {
    const newSignature = await postSignature(signatureData);
    res.status(201).json(newSignature);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

//#endregion

module.exports = router;
