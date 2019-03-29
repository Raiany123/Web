
function validarSenha(){
        Senha = document.FormSenha.Senha.value;
        if (Senha.length <= 5 ){ 
            alert('digite uma senha maior que 6 digitos');
             return false;
        }

        return true;
 }

function validarSenhaCad(){


        Senha = document.FormSenha.Senha.value;
        Senha2 = document.FormSenha.Senha2.value;

	       

	        if (Senha.length !== Senha2.length) {

	        	alert('Senhas de tamanhos diferentes')
	        	return false;
	        }

	        if(Senha.length < 5 && Senha2.length < 5){ 
	        	 alert('digite uma senha maior que 6 digitos');
	             return false;
	        }

	        if(Senha === Senha2){
	        	alert('cadastro concluído ')
	        	return true;
	        }
	        if(Senha !== Senha2){
	        	alert('senhas diferentes')
	        	return false

	        }
	
       
 }


