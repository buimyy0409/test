import React from "react";
import { Form, Input, Modal } from "antd";

const ToggleCategory = ({ isVisible, onClose, category, onSaveData }) => { 
  const [form] = Form.useForm();

  const handleToggleCategory = () => {
    const title = form.getFieldValue("title");
    onSaveData({ text: title });
    handleCloseModal();
  };

  const handleCloseModal = () => {
    form.resetFields();
    onClose();
  };

  console.log(isVisible);

  return (
    <Modal
      title="Category"
      open={isVisible}
      onCancel={onClose}
      onOk={() => form.submit()}
    >
      <Form layout="vertical" form={form} onFinish={handleToggleCategory}>
        <Form.Item name={"title"} label="Details">
          <Input placeholder="add details" />
    
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ToggleCategory;