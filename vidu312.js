var arr = new Array(1, 2, 4, 5, 9, 6);
  document.write(arr.join() + '<br>');
  //thêm 2 phần tử vào vị trí thứ 1 và 0 xóa phần tử nào
  arr.splice(1, 0, 3, 8);
  document.write(arr.join() + '<br>');