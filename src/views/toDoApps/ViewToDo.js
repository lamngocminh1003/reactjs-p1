import React from "react";
import "./ViewToDo.scss";
import { toast } from "react-toastify";

class ViewToDo extends React.Component {
  handleDeleteBtn = (name) => {
    console.log("check delete name: ", name);
    this.props.deleteAWork(name);
  };
  handleEditBtn = (name) => {
    let editToDo = this.props.data.editToDo;
    let listToDo = this.props.data.arrWorks;
    let isEmptyObj = Object.keys(editToDo).length === 0;
    //save
    if (isEmptyObj === false && editToDo.id === name.id) {
      let listToDoCopy = [...listToDo];
      //Find index of specific object using findIndex method.
      let objIndex = listToDoCopy.findIndex((item) => item.id === name.id);

      //Update object's name property.
      listToDoCopy[objIndex].name = editToDo.name;
      console.log(
        "check listToDoCopy[objIndex].name",
        listToDoCopy[objIndex].name
      );
      this.props.editAWork(listToDoCopy);
      toast.success("Update to do successfully!");
      return;
    }
    //edit
    this.props.editAWork(name);
  };
  handleOnChangeEditToDo = (event) => {
    let editToDoCopy = { ...this.props.data.editToDo };
    editToDoCopy.name = event.target.value;
    this.props.editAWork(editToDoCopy);
  };

  render() {
    let listToDo = this.props.data.arrWorks;
    let editToDo = this.props.data.editToDo;
    let isEmptyObj = Object.keys(editToDo).length === 0;
    console.log("check isEmptyObj", isEmptyObj);
    return (
      <>
        {listToDo &&
          listToDo.length > 0 &&
          listToDo.map((item, index) => {
            return (
              <div className="view-to-do" key={item.id}>
                {isEmptyObj === true ? (
                  <span className="name-work">
                    {index + 1} - {item.name}
                  </span>
                ) : (
                  <>
                    {editToDo.id === item.id ? (
                      <span>
                        {index + 1} -{" "}
                        <input
                          className="edit-work"
                          value={editToDo.name}
                          onChange={(event) =>
                            this.handleOnChangeEditToDo(event)
                          }
                        />
                      </span>
                    ) : (
                      <span className="name-work">
                        {index + 1} - {item.name}
                      </span>
                    )}
                  </>
                )}
                <span>
                  <button
                    className="btn btn-edit "
                    onClick={() => this.handleEditBtn(item)}
                  >
                    {isEmptyObj === false && editToDo.id === item.id
                      ? "Save"
                      : "Edit"}
                  </button>
                </span>
                <span>
                  <input
                    type="button"
                    value="Delete"
                    className="btn btn-delete"
                    onClick={() => this.handleDeleteBtn(item)}
                  />
                </span>
              </div>
            );
          })}
      </>
    );
  }
}
export default ViewToDo;
