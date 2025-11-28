// import { test, expect } from "../../../../fixtures/orangehrm/fixtures.js";
// import { AddCandidate } from "../../../../pages/orangehrm/Recruitment/AddCandidate.js";
// import { CandidateAddPage } from "../../../../pages/orangehrm/Recruitment/RecruitmentPage.js";
// import { candidate } from "../utils/data.js";
// import { negativeEmployeeCases } from "../utils/negativeEmployeeCases.js";

// test.describe("Add Candidate", () => {
//   const {
//     firstName,
//     middleName,
//     lastName,
//     email,
//     contact,
//     resume,
//     keywords,
//     date,
//     notes,
//   } = candidate.addCandidateInfo;

//   test("Add candidate", async ({ page, login }) => {
//     const candidatePage = new CandidateAddPage(login);
//     await candidatePage.gotoViewCandidates();
//     await candidatePage.clickAddBtn();

//     const addCandidate = new AddCandidate(login);

//     await addCandidate.fillCandidateInfo(
//       firstName,
//       middleName,
//       lastName,
//       email,
//       contact,
//       resume,
//       keywords,
//       date,
//       notes
//     );

//     await addCandidate.save();
//   });
// });
