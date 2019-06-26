import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
 
const swal = withReactContent(Swal);

export const toast = (iconType: "success" | "error" | "warning" | "info" | "question" , title: string) => {
  const Toast = swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000
  });
    
  Toast.fire({
  type: iconType,
  title: title
  });
}

export default swal;