import { Button, Space, Table } from "antd";
import React from "react";
import ToggleCategory from "../modals/ToggleCategory";
import { useState } from "react";
import { useEffect } from "react";
import { Trash } from "iconsax-react";

const FolderScreen = () => {
  const [isVisibleModalCategory, setIsVisibleModalCategory] = useState(false);
  const [category, setCategory] = useState();
  const [categories, setCategories] = useState([]);
  const [inputTextMap, setInputTextMap] = useState({});

  useEffect(() => {
    getAllCategories();
  }, []);

  const getAllCategories = async () => {
    const res = await localStorage.getItem("categories");
    res && setCategories(JSON.parse(res));
  };

  const handleAddNewCategory = async (values) => {
    if (values) {
      const items = [...categories];
      items.push(values);

      const categoryInputText = values.text;
      const newInputTextMap = { ...inputTextMap };
      newInputTextMap[values.key] = categoryInputText;
      setInputTextMap(newInputTextMap);

      await localStorage.setItem("categories", JSON.stringify(items));
      getAllCategories();
    }
  };

  const handleRemoveTask = (index) => {
    const items = [...categories];
    const removedCategory = items.splice(index, 1)[0];

    const newInputTextMap = { ...inputTextMap };
    delete newInputTextMap[removedCategory.key];
    setInputTextMap(newInputTextMap);

    setCategories(items);
  };

  const handleCheckboxChange = (e, item) => {
    const { checked } = e.target;
    const newInputTextMap = { ...inputTextMap };
    if (checked) {
      newInputTextMap[item.key] = newInputTextMap[item.key] || "";
    } else {
      delete newInputTextMap[item.key];
    }
    setInputTextMap(newInputTextMap);
  };

  const columns = [
    {
      key: "fa",
      dataIndex: "title",
      title: "Title",
    },
    {
      key: "inputText",
      dataIndex: "",
      title: "Input Text",
      render: (item) => (
        <>
          <input
            type="checkbox"
            checked={!!inputTextMap[item.key]}
            onChange={(e) => handleCheckboxChange(e, item)}
          />
          <span
            className={`input-text ${
              inputTextMap[item.key] ? "checked" : ""
            }`}
          >
            {inputTextMap[item.key]}
          </span>
        </>
      ),
    },
    {
      key: "btn",
      dataIndex: "",
      title: "",
      align: "right",
      render: (item) => (
        <Space>
          <Button
            type="link"
            icon={<Trash size={10} color="#212121" />}
            onClick={() => handleRemoveTask(item.key)}
          ></Button>
        </Space>
      ),
    },
  ];

  // Check if there are input values in local storage on initial render
  useEffect(() => {
    const storedInputTextMap = localStorage.getItem("inputTextMap");
    if (storedInputTextMap) {
      setInputTextMap(JSON.parse(storedInputTextMap));
    }
  }, []);

  // Update local storage when inputTextMap changes
  useEffect(() => {
    localStorage.setItem("inputTextMap", JSON.stringify(inputTextMap));
  }, [inputTextMap]);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="mt-4">
            <Table dataSource={categories} columns={columns} />
          </div>
        </div>
        <Button
          type="primary"
          onClick={() => setIsVisibleModalCategory(true)}
        >
          Add new
        </Button>
      </div>
      <ToggleCategory
        isVisible={isVisibleModalCategory}
        onClose={() => setIsVisibleModalCategory(false)}
        category={category}
        onSaveData={(vals) => handleAddNewCategory(vals)}
      />
    </div>
  );
};

export default FolderScreen;