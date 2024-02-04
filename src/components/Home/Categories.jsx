import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

import { categories } from "../../constants/data";
import { Link, useSearchParams } from "react-router-dom";

function Categories() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  return (
    <div className="category">
      <Link to={`/create?category=${category || ""}`}>
        <Button className="create-blog-button">Create Blog</Button>
      </Link>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <Link to="/">All Categories</Link>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {categories.map((eachCategory) => {
            return (
              <TableRow key={eachCategory.id}>
                <TableCell>
                  <Link to={`/?category=${eachCategory.type}`}>
                    {eachCategory.type}
                  </Link>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

export default Categories;
