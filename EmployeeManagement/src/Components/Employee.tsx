import { ChangeEvent, FormEvent, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import {
  GET_EMPLOYEES,
  ADD_EMPLOYEE,
  REMOVE_EMPLOYEE,
  UPDATE_EMPLOYEE,
} from "services/QueryMutation_SR";
import { IconButton, SvgIcon } from "@mui/material";

function EmployeeTable() {
  interface Employee {
    id: number;
    name: string;
    department: string;
    createdBy: string;
    updatedBy: string;
  }
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(
    null,
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal for editing an employee
  const openModal = (employee: Employee | null) => {
    setSelectedEmployee(employee);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const authToken = localStorage.getItem("authToken");
  const { loading, error, data } = useQuery(GET_EMPLOYEES, {
    context: {
      headers: {
        authorization: authToken ? `Bearer ${authToken}` : "",
      },
    },
  });
  const [addEmployee] = useMutation(ADD_EMPLOYEE, {
    context: {
      headers: {
        authorization: authToken ? `Bearer ${authToken}` : "",
      },
    },
    refetchQueries: [
      {
        query: GET_EMPLOYEES,
        context: {
          headers: { authorization: authToken ? `Bearer ${authToken}` : "" },
        },
      },
    ],
  });
  const [removeEmployee] = useMutation(REMOVE_EMPLOYEE, {
    context: {
      headers: {
        authorization: authToken ? `Bearer ${authToken}` : "",
      },
    },
    refetchQueries: [
      {
        query: GET_EMPLOYEES,
        context: {
          headers: { authorization: authToken ? `Bearer ${authToken}` : "" },
        },
      },
    ],
  });
  const [updateEmployee] = useMutation(UPDATE_EMPLOYEE, {
    context: {
      headers: {
        authorization: authToken ? `Bearer ${authToken}` : "",
      },
    },
    refetchQueries: [
      {
        query: GET_EMPLOYEES,
        context: {
          headers: { authorization: authToken ? `Bearer ${authToken}` : "" },
        },
      },
    ],
  });
  const [newEmployee, setNewEmployee] = useState({
    name: "",
    department: "",
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setNewEmployee({ ...newEmployee, [name]: value });
  };

  const handleAddEmployee = () => {
    addEmployee({
      variables: {
        name: newEmployee.name,
        department: newEmployee.department,
      },
    })
      .then(() => {
        setNewEmployee({ name: "", department: "" });
      })
      .catch((err) => {
        console.error("Error adding employee:", err);
      });
  };

  const handleDeleteEmployee = (id: number) => {
    removeEmployee({
      variables: {
        id: id.toString(),
      },
    })
      .then(() => {
        console.log("Employee removed successfully.");
      })
      .catch((err) => {
        console.error("Error removing employee:", err);
      });
  };

  const handleUpdateEmployee = async (
    id: number,
    name: string,
    department: string,
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();
    await updateEmployee({
      variables: {
        id: id.toString(),
        name,
        department,
      },
    })
      .then(() => {
        closeModal();
      })
      .catch((err) => {
        console.error("Error updating employee:", err);
        // Add error handling logic here if needed
      });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <div style={{ marginTop: "20px" }}>
        <TextField
          label="Name"
          name="name"
          value={newEmployee.name}
          onChange={handleInputChange}
          variant="outlined"
          style={{ marginRight: "10px" }}
        />
        <TextField
          label="Department"
          name="department"
          value={newEmployee.department}
          onChange={handleInputChange}
          variant="outlined"
          style={{ marginRight: "10px" }}
        />
        <Button variant="contained" color="primary" onClick={handleAddEmployee}>
          Add Employee
        </Button>
      </div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Department</TableCell>
              <TableCell>Created By</TableCell>
              <TableCell>Updated By</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.getEmployees.map((employee: Employee) => (
              <TableRow key={employee.id}>
                <TableCell>{employee.name}</TableCell>
                <TableCell>{employee.department}</TableCell>
                <TableCell>{employee.createdBy}</TableCell>
                <TableCell>{employee.updatedBy}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => openModal(employee)}
                  >
                    Update
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleDeleteEmployee(employee.id)}
                    style={{ marginLeft: "20px" }}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Modal open={isModalOpen} onClose={closeModal}>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "8px",
          }}
        >
          <h3 style={{ marginTop: "-5px" }}>Edit Employee</h3>
          <IconButton
            aria-label="close"
            onClick={closeModal}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <SvgIcon>
              <path d="M19 6.41l-1.41-1.41L12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </SvgIcon>
          </IconButton>
          <form
            onSubmit={(e) =>
              selectedEmployee &&
              handleUpdateEmployee(
                selectedEmployee.id,
                selectedEmployee.name,
                selectedEmployee.department,
                e,
              )
            }
          >
            <TextField
              label="Name"
              value={selectedEmployee ? selectedEmployee.name : ""}
              onChange={(e) =>
                setSelectedEmployee({
                  ...(selectedEmployee || {}),
                  name: e.target.value,
                } as Employee)
              }
              variant="outlined"
              style={{ marginBottom: "10px" }}
            />
            <TextField
              label="Department"
              value={selectedEmployee ? selectedEmployee.department : ""}
              onChange={(e) =>
                setSelectedEmployee({
                  ...(selectedEmployee || {}),
                  name: e.target.value,
                } as Employee)
              }
              variant="outlined"
              style={{ marginBottom: "10px", marginLeft: "10px" }}
            />
            <br />
            <Button variant="contained" color="primary" type="submit">
              Save Changes
            </Button>
          </form>
        </div>
      </Modal>
    </div>
  );
}

export default EmployeeTable;
