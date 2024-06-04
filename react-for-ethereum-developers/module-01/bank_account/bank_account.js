//Requirements:

//-----------Account Creation--------------
//Users should be able to create a new bank account by providing a unique account number 
//and an initial deposit amount.
//The application should prevent the creation of accounts with duplicate account numbers.

//Paso 1. Creo el literal de account
let accounts=[];

//Paso 2. Creo la funcion que me permite generar una cuenta introduciendo un número y una cantidad inicial
//Todas las funciones que cree, deben tener el mismo nombre que las que invoco en el HTML asociadas a los botones
function createAccount(){
    const accountNumber = document.getElementById("accountNumber").value;
    const initialDeposit = parseFloat(document.getElementById("initialDeposit").value);

    //Compruebo si el numero de cuenta existe
    let exists = false;
    for(let i=0; i<accounts.length; i++){
        if(accounts[i].number == accountNumber){
            exists = true;
           break;
        }
    }
    if(exists){ window.confirm('Account already exists'); return;}
    
    //Compruebo si la cuantía inicial es valida
    if(isNaN(initialDeposit) || initialDeposit <= 0){window.confirm('Invalid initial deposit amount'); return;}

    accounts.push({number: accountNumber, moneyAmount: initialDeposit});
    window.confirm(`Account ${accountNumber} created with initial deposit of ${initialDeposit}`);
    console.log("Account created. Number of accounts: ", accounts.length);
}

//---------- Deposit Money-----------------
//Users should be able to deposit money into their account by providing their account number and the deposit amount.
//The application should update the account balance accordingly.

function depositMoney(){
    const accountNumber = document.getElementById("accountNumberToDeposit").value;
    const depositAmount = parseFloat(document.getElementById("depositAmount").value);

    //Compruebo si el numero de cuenta existe
    let exists = false;
    for(let i=0; i<accounts.length; i++){
        if(accounts[i].number == accountNumber){
            exists = true;
           break;
        }
    }
    if(!exists){ window.confirm('Account dones not exist'); return;}

    //Compruebo si la cuantía inicial es valida
    if(isNaN(depositAmount) || depositAmount <= 0){window.confirm('Invalid deposit amount'); return;}

    //Ingreso la cuantía en la cuenta. Busco la cuenta en el 
    accounts.forEach((account)=>{
        if(account.number == accountNumber){
            account.moneyAmount = account.moneyAmount + depositAmount;
            window.confirm(`Deposited $${depositAmount} to account ${accountNumber}. Now it has ${account.moneyAmount} $.`);
        }
    });
}

//-----------Withdraw Money----------------

//Users should be able to withdraw money from their account by providing their 
//account number and the withdrawal amount.
//The application should ensure that the account has sufficient funds before allowing the withdrawal.

function withdrawMoney(){
    const accountNumber = document.getElementById("accountNumberToWithdraw").value;
    const withdrawAmount = parseFloat(document.getElementById("withdrawAmount").value);

    //Compruebo si el numero de cuenta existe
    let exists = false;
    for(let i=0; i<accounts.length; i++){
        if(accounts[i].number == accountNumber){
            exists = true;
        break;
        }
    }
    if(!exists){ window.confirm('Account does not exist'); return;}

    //Check if withdraw amount is valid
    if(isNaN(withdrawAmount) || withdrawAmount <= 0){window.confirm('Invalid withdraw amount'); return;}

    //Search the bank account number and withdraw the money 
    accounts.forEach((account)=>{
        if(account.number == accountNumber){
           if(account.moneyAmount < withdrawAmount){
            window.confirm('Insufficient funds');
            return;
           }else{
            account.moneyAmount = account.moneyAmount - withdrawAmount;
            window.confirm(`Withdrew $${withdrawAmount} from account ${accountNumber}.`);
           }
        }
    });
}


//-----------Check Balance-----------------
//Users should be able to check their account balance by providing their account number.
//The application should display the current balance of the specified account.

function checkBalance(){
    const accountNumber = document.getElementById("accountNumberToCheck").value;  

    //Check if account number exists
    let exists = false;

    for(let i=0; i<accounts.length; i++){
        if(accounts[i].number == accountNumber){
            window.confirm(`The balance of the account ${accountNumber} is: ${accounts[i].moneyAmount} $`); ;
            exists = true;
            return;
        }
    }
    if(!exists){ window.confirm('Account does not exist'); return;}
    
}

