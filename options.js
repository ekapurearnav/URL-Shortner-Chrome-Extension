let saveBtn=document.querySelector("#save");
let api=document.querySelector("#myapi");
let toastError=document.querySelector('.toast-error');
let toastSuccess=document.querySelector('.toast-success');


saveBtn.addEventListener('click',() => {
        if(api.value)
        {
            toastSuccess.classList.remove('d-hide')
            
            chrome.storage.local.set({"API": api.value}, function(){
            console.log('Value is set to' + api.value);    
            });
        }
        else
        {
           toastError.Error.classList.remove('d-hide')
            setTimeout(()=>{
                toastError.classList.add('d-hide')        
            }, 1500)
        }
    }
)

// o1EjRzqMuRof8uJfYYLH83K8T7NIGAzI6NN3hLiuj9JTOkfAD6kP9Ql3XXa7