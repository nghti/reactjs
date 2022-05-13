import React, { useContext, useState, useEffect, useRef } from 'react';
import { Table, Input, Button, Popconfirm, Form } from 'antd';
import { connect } from 'react-redux';

import ContainerWrap from '@/assets/styledContainer';
import { userRequest } from '@/store/modules/dashboard/actions';

const EditableContext = React.createContext();
const EditableRow = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};
const EditableCell = ({ title, editable, children, dataIndex, record, handleSave, ...restProps }) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef();
  const form = useContext(EditableContext);
  useEffect(() => {
    if (editing) {
      inputRef.current.focus();
    }
  }, [editing]);

  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({
      [dataIndex]: record[dataIndex],
    });
  };

  const save = async (e) => {
    try {
      const values = await form.validateFields();
      toggleEdit();
      handleSave({ ...record, ...values });
    } catch (errInfo) {
      console.log('Save failed:', errInfo);
    }
  };

  let childNode = children;

  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{
          margin: 0,
        }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: `${title} is required.`,
          },
        ]}>
        <Input ref={inputRef} onPressEnter={save} onBlur={save} />
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{
          paddingRight: 24,
        }}
        onClick={toggleEdit}>
        {children}
      </div>
    );
  }

  return <td {...restProps}>{childNode}</td>;
};
class PageTable extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [
      {
        title: 'email',
        dataIndex: 'email',
        width: '30%',
        editable: true,
      },
      {
        title: 'first_name',
        dataIndex: 'first_name',
      },
      {
        title: 'last_name',
        dataIndex: 'last_name',
      },
      {
        title: 'operation',
        dataIndex: 'operation',
        render: (record) =>
          this.props.listUser.data.length >= 1 ? (
            <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record)}>
              <a href="/#">Delete</a>
            </Popconfirm>
          ) : null,
      },
    ];

    this.state = {
      count: 2,
    };
  }

  componentDidMount() {
    const { userRequest } = this.props;
    userRequest(1);
  }

  handleDelete = (key) => {
    console.log('key', key);
  };

  handleAdd = () => {
    const { count, dataSource } = this.state;
    const newData = {
      key: count,
      name: `Edward King ${count}`,
      age: 32,
      address: `London, Park Lane no. ${count}`,
    };
    this.setState({
      dataSource: [...dataSource, newData],
      count: count + 1,
    });
  };

  handleSave = (row) => {
    const newData = [...this.state.dataSource];
    const index = newData.findIndex((item) => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, { ...item, ...row });
    this.setState({
      dataSource: newData,
    });
  };

  render() {
    const components = {
      body: {
        row: EditableRow,
        cell: EditableCell,
      },
    };
    const columns = this.columns.map((col) => {
      if (!col.editable) {
        return col;
      }

      return {
        ...col,
        onCell: (record) => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          title: col.title,
          handleSave: this.handleSave,
        }),
      };
    });
    const { listUser } = this.props;

    return (
      <ContainerWrap>
        <Button
          onClick={this.handleAdd}
          type="primary"
          style={{
            marginBottom: 16,
          }}>
          Add a row
        </Button>
        <Table
          components={components}
          rowClassName={() => 'editable-row'}
          bordered
          dataSource={listUser.data}
          rowKey="id"
          columns={columns}
        />
      </ContainerWrap>
    );
  }
}

const mapStateToProps = (state) => {
  return { listUser: state.dashboard.listUser };
};

const mapDispatchToProps = {
  userRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(PageTable);
