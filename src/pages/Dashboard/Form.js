import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Select, Cascader, DatePicker, InputNumber, TreeSelect, Switch } from 'antd';

import ContainerWrap from '@/assets/styledContainer';

const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 14 },
};
const buttonItemLayout = {
  wrapperCol: {
    span: 14,
    offset: 4,
  },
};

function PageForm() {
  const [Count, setCount] = useState(0);
  useEffect(() => {
    document.title = `Page ${Count}`;
  });
  return (
    <ContainerWrap>
      <h4
        onClick={() => {
          setCount(Count + 1);
        }}>
        Button
      </h4>
      <p>So dem la {Count}</p>
      <Form
        {...formItemLayout}
        layout="horizontal"
        initialValues={{
          size: 'Middle',
        }}
        size="Middle">
        <Form.Item label="Input">
          <Input />
        </Form.Item>
        <Form.Item label="Select">
          <Select>
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="TreeSelect">
          <TreeSelect
            treeData={[
              {
                title: 'Light',
                value: 'light',
                children: [
                  {
                    title: 'Bamboo',
                    value: 'bamboo',
                  },
                ],
              },
            ]}
          />
        </Form.Item>
        <Form.Item label="Cascader">
          <Cascader
            options={[
              {
                value: 'zhejiang',
                label: 'Zhejiang',
                children: [
                  {
                    value: 'hangzhou',
                    label: 'Hangzhou',
                  },
                ],
              },
            ]}
          />
        </Form.Item>
        <Form.Item label="DatePicker">
          <DatePicker />
        </Form.Item>
        <Form.Item label="InputNumber">
          <InputNumber />
        </Form.Item>
        <Form.Item label="Switch">
          <Switch />
        </Form.Item>
        <Form.Item {...buttonItemLayout}>
          <Button type="dashed">Submit</Button>
        </Form.Item>
      </Form>
    </ContainerWrap>
  );
}

export default PageForm;
