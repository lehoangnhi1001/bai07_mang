var arr = new Array();
    var test = 1;
    var i = 0;
    while (test == 1) {
        arr[i] = parseFloat(prompt("Nhập vào số thứ " +(i+1)+ " của mảng: "));
        test = prompt("Nhập vào 1 để tiếp tục, 0 để dừng việc nhập! ");
        i++;
    }
    var number =parseInt(prompt("Nhập số cần kiểm tra"));
    var mod = (number % 2);
    if (mod == 0){document.write(number + " là số chẵn");
    }else if (mod == 1){
        document.write(number + " là sốlẽ");
    }else{
        document.write("Ký tự bạn nhập không phải số");}