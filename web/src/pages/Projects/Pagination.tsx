import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { ProjectsType } from "./ProjectTable";
import { Typography } from "@mui/material";
import { apiBaseUrl } from "../../config/helpers";

type PaginationVariable = {
    from: number;
    to: number;
    count: number;
};

// number of data to fetch to display per page
const dataSize: number = 30;

type SetPropsType = {
    setProjectsData: React.Dispatch<React.SetStateAction<ProjectsType[]>>;
};

export const Paginatate = ({ setProjectsData }: SetPropsType) => {
    const [pagination, setPagination] = useState<PaginationVariable>({
        count: 0,
        from: 0,
        to: dataSize,
    });

    const [pageLoading, setPageLoading] = useState<boolean>(false);

    useEffect(() => {
        setPageLoading(true);
        const fetchProjects = async () => {
            fetch(`${apiBaseUrl}/search-project`, {
                method: "POST",
                body: JSON.stringify({
                    page: 1,
                    limit: 30,
                    orderby: "year",
                    dir: "desc",
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
            })
                .then((response) => response.json())
                .then((result) => {
                    const { data, total } = result;
                    if (data && total) {
                        setProjectsData(data);
                        setPagination({ ...pagination, count: total });
                        setPageLoading(false);
                    }
                    // setProjects(data);
                });
        };
        fetchProjects();
    }, []);

    const handleDataChange = (event: React.ChangeEvent<any>, page: number) => {
        const target = event.currentTarget.childNodes[0].data;
        setPageLoading(true);
        fetch(`${apiBaseUrl}/search-project`, {
            method: "POST",
            body: JSON.stringify({
                // filter: {
                //     year: ["2020", "2022"],
                //     procurement_method: ["open"],
                // },
                page: target,
                // orderby: "lga",
                orderby: "year",
                limit: 30,
                dir: "desc",
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
            .then((response) => response.json())
            .then((result) => {
                // console.log(result);
                const { data } = result;
                setProjectsData(data);
                setPageLoading(false);
            });

        const from = (page - 1) * dataSize + 1;
        const to = (page - 1) * dataSize + dataSize;

        setPagination({ ...pagination, from: from, to: to });
    };

    return (
        <Stack spacing={2} sx={{ display: "flex", alignItems: "end", m: 3 }}>
            {pageLoading && <em>loading...</em>}
            <Typography sx={{ marginLeft: "10%" }}>
                <span style={{ color: "#D4D4D4" }}>Showing projects: </span>
                &nbsp;
                <span style={{ color: "#0e0e2c" }}>
                    {pagination.from === 0
                        ? pagination.from + 1
                        : pagination.from}
                    -
                    {pagination.from + dataSize > pagination.count
                        ? pagination.count
                        : pagination.to}
                </span>
            </Typography>
            <Pagination
                count={Math.ceil(pagination.count / dataSize)}
                variant="outlined"
                shape="rounded"
                onChange={handleDataChange}
            />
        </Stack>
    );
};
