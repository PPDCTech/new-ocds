import mock_contract from "../data/mock_contract.json";
import mock_projects from "../data/mock_projects.json";

export const getContractorData = (from: number, to: number) => {
   return new Promise((resolve, reject) => {
      const data = mock_contract.slice(from, to)
      resolve({
         count: mock_contract.length,
         data: data
      })
   })
}
export const getProjectsData = (from: number, to: number) => {
   return new Promise((resolve, reject) => {
      const data = mock_projects.slice(from, to)
      resolve({
         count: mock_contract.length,
         data: data
      })
   })
}
