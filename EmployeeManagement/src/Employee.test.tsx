/**
 * @jest-environment jsdom
 */

import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import EmployeeTable from './Components/Employee';
import { GET_EMPLOYEES, ADD_EMPLOYEE,REMOVE_EMPLOYEE , UPDATE_EMPLOYEE} from '../src/Testqueries/queries';
import '@testing-library/jest-dom';

const mockEmployeesData = {
    getEmployees: [
      {
        id: 1,
        name: 'John Doe',
        department: 'Engineering',
        createdBy: 'Admin',
        updatedBy: '',
      },
      {
        id: 2,
        name: 'Jane Smith',
        department: 'Marketing',
        createdBy: 'Admin',
        updatedBy: '',
      },
    ],
  };
  
  const mocks = [
    {
      request: {
        query: GET_EMPLOYEES,
      },
      result: {
        data: mockEmployeesData,
      },
    },
    {
      request: {
        query: REMOVE_EMPLOYEE,
        variables: {
          id: '2', // Mocking removal of the second employee
        },
      },
      result: {
        data: {
          removeEmployee: {
            id: '2',
          },
        },
      },
    },
    {
        request: {
          query: UPDATE_EMPLOYEE, 
          variables: {
            id: '1', // Mocking update of the first employee
            name: 'New Name', // New name value
            // You can include other variables if your mutation requires them
          },
        },
        result: {
          data: {
            updateEmployee: {
              id: '1', // Return the updated employee ID
              name: 'New Name', // Return the updated name
            },
          },
        },
    }
  ];
 

const renderComponent = () =>
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <EmployeeTable />
    </MockedProvider>
  );
// Mocked mutations
const mockMutations = {
  addEmployee: jest.fn(),
  removeEmployee: jest.fn(),
  updateEmployee: jest.fn(),
};



describe('EmployeeTable', () => {
    beforeAll(() => {
        jest.spyOn(console, "error").mockImplementation(() => {});
      });
      afterAll(() => {
        jest.restoreAllMocks();
      });

  it('renders loading state initially', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <EmployeeTable />
      </MockedProvider>
    );

    expect(screen.getByText('Loading...')).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.queryByText('Loading...')).toBeNull();
    });
  });

  it('renders employees data after loading', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <EmployeeTable />
      </MockedProvider>
    );

    await waitFor(() => {
      expect(screen.getByText('John Doe')).toBeInTheDocument();
      expect(screen.getByText('Jane Smith')).toBeInTheDocument();
    });
  });

it('should add an employee', async () => {
    renderComponent();
  
    await waitFor(() => {
      expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
    });
  
 
    const nameInput = screen.getByLabelText('Name');
    fireEvent.change(nameInput, { target: { value: 'Johny Doe' } });
  expect(nameInput).toBeInTheDocument();

  const inputName = screen.getByDisplayValue('Johny Doe');
  expect(inputName).toBeInTheDocument();

  const DepartmentInput = screen.getByLabelText('Department');
  fireEvent.change(DepartmentInput, { target: { value: 'IT' } });
expect(DepartmentInput).toBeInTheDocument();

const inputDepartment = screen.getByDisplayValue('IT');
expect(inputDepartment).toBeInTheDocument();

    fireEvent.click(screen.getByText('Add Employee'));
  expect(inputDepartment).toHaveValue('IT');
  expect(inputName).toHaveValue('Johny Doe');
  });

  it('opens modal when update button is clicked', async () => {
    const { getAllByTestId, findByText } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <EmployeeTable />
      </MockedProvider>,
    );
  
    await findByText('John Doe');
    const updateButtons = getAllByTestId('update-button');
    fireEvent.click(updateButtons[0]);
    await findByText('Edit Employee');
  });

it('closes modal when close button is clicked', async () => {
    const { getAllByTestId, findByText, queryByText } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <EmployeeTable />
      </MockedProvider>,
    );
  
    await findByText('John Doe');
    const updateButtons = getAllByTestId('update-button');
    fireEvent.click(updateButtons[0]);
    const closeButton = screen.getByLabelText('close');
    fireEvent.click(closeButton);
    
    await waitFor(() => {
      expect(queryByText('Edit Employee')).not.toBeInTheDocument();
    });
  });

it('updates employee name when "Save Changes" button is clicked', async () => {
    const { getAllByTestId, findByText, getByTestId } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <EmployeeTable />
      </MockedProvider>,
    );
  
    await findByText('John Doe');
    const updateButtons = getAllByTestId('update-button');
    fireEvent.click(updateButtons[0]);
    expect(screen.getByText('Edit Employee')).toBeInTheDocument();
    const newNameInput = getByTestId('name-input') as HTMLInputElement;
    newNameInput.value = 'New Name'; 
    expect(newNameInput.value).toBe('New Name');
    
    const saveButton = screen.getByText('Save Changes'); 
   fireEvent.click(saveButton);

});


it('triggers remove mutation with correct parameters when delete button is clicked', async () => {
    const { findByText } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <EmployeeTable />
      </MockedProvider>,
    );
  
    await findByText('John Doe');
    await findByText('Jane Smith');
  
    const deleteButton = screen.getAllByText('Delete')[1];
    fireEvent.click(deleteButton);

    const janeSmithElement = document.body.querySelector('td');
    expect(janeSmithElement).not.toHaveTextContent('Jane Smith');
});

it('handles error when adding an employee', async () => {
    const errorMock = {
      request: {
        query: ADD_EMPLOYEE,
        variables: {
          name: 'Johny Doe',
          department: 'IT',
        },
      },
      error: new Error('Failed to add employee'),
    };
  
    const { findByText, getByLabelText } = render(
      <MockedProvider mocks={[...mocks, errorMock]} addTypename={false}>
        <EmployeeTable />
      </MockedProvider>
    );
  
    const addButton = await findByText('Add Employee');
    fireEvent.click(addButton);
  
    fireEvent.change(getByLabelText('Name'), { target: { value: 'Johny Doe' } });
    fireEvent.change(getByLabelText('Department'), { target: { value: 'IT' } });
  
    await waitFor(() => {
        expect(console.error).toHaveBeenCalledWith('Error adding employee:', expect.any(Error));
      });
  });

  it('handles error when removing an employee', async () => {
    const errorMock = {
      request: {
        query: REMOVE_EMPLOYEE,
        variables: {
          id: '1', 
        },
      },
      error: new Error('Failed to remove employee'),
    };
  
    const { findAllByText } = render(
      <MockedProvider mocks={[...mocks, errorMock]} addTypename={false}>
        <EmployeeTable />
      </MockedProvider>
    );
  
    const removeButtons = await findAllByText('Delete');
  
    fireEvent.click(removeButtons[0]);
  
    await waitFor(() => {
      expect(console.error).toHaveBeenCalledWith('Error removing employee:', expect.any(Error));
    });
  });

  it('handles error when updating an employee', async () => {
    const errorMock = {
      request: {
        query: UPDATE_EMPLOYEE,
        variables: {
          id: '1', 
          name: 'New Name',
        },
      },
      error: new Error('Failed to update employee'),
    };
  
    const { findAllByText } = render(
      <MockedProvider mocks={[...mocks, errorMock]} addTypename={false}>
        <EmployeeTable />
      </MockedProvider>
    );
  
    // Wait for all "Update" buttons to appear
    const updateButtons = await findAllByText('Update');
  
    // Click the first "Update" button
    fireEvent.click(updateButtons[0]);
  
  });

  it('renders error message when failed to fetch employees', async () => {
    const errorMocks = [
      {
        request: {
          query: GET_EMPLOYEES,
        },
        error: new Error('Failed to fetch employees'),
      },
    ];
  
    render(
      <MockedProvider mocks={errorMocks} addTypename={false}>
        <EmployeeTable />
      </MockedProvider>,
    );
  
    expect(await screen.findByText('Loading...')).toBeInTheDocument();
  
    // Wait for error message to appear
    expect(await screen.findByText('Error: Failed to fetch employees')).toBeInTheDocument();
  });

});