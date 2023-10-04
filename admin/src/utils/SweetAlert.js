import swal from "sweetalert";
export const sweetDelete = (data) => {
  swal({
    title: "Sure",
    text: "Are you sure you want to delete",
    icon: "error",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      
        data;
      
    } else {
      swal("Your imaginary file is safe!");
    }
  });
};
