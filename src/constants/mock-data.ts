import { Subject } from "../types";

export const MOCK_SUBJECTS: Subject[] = [
  {
    id: 1,
    code: "SCI",
    name: "Advancing in science",
    department: "SCI",
    description:
      "An Advanced study of Chem, Phy, Bio covering concepts of Science.",
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    code: "MATH",
    name: "Intro to MATH",
    department: "MATH",
    description:
      "An Advanced study of Integration, Seriese covering concepts of MATH.",
    createdAt: new Date().toISOString(),
  },
  {
    id: 3,
    code: "ENG",
    name: "Intro to ENG",
    department: "ENG",
    description:
      "An focused english course on reading and writing through the study of various literary genres.",
    createdAt: new Date().toISOString(),
  },
];
