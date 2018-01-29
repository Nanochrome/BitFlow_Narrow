function getGasPrice() {
    return provider.toWei(2, "gWei");
}

function submitter(error, result) {
    if (!error) {
        alert("Transaction submitted");
        console.log(result);
    } else {
        console.log(error);
    }
}

function setSupervisor(_newSupervisor) {
    if (provider.isAddress(_newSupervisor)) {
        department.setSupervisor.sendTransaction(_newSupervisor, {
            from: address,
            gas: 100000,
            gasPrice: getGasPrice()
        }, submitter);
    } else {
        console.log("Addressen er ikke gyldig");
    }
}

function setSupervisorChild(_childDepartment, _newSupervisor) {
    if (provider.isAddress(_newSupervisor) && provider.isAddress(_newSupervisor)) {
        department.setSupervisorChild.sendTransaction(_childDepartment, _newSupervisor, {
            from: address,
            gas: 150000,
            gasPrice: getGasPrice()
        }, submitter);
    } else {
        console.log("Addressen er ikke gyldig");
    }
}

function setTreasuryAddress(_treasuryAddress) {
    if (!provider.isAddress(_treasuryAddress)) {
        console.log("Ugyldig addresse");
        return;
    }
    department.setTreasuryAddress.sendTransaction(_treasuryAddress, {
        from: address,
        gas: 100000,
        gasPrice: getGasPrice()
    }, submitter);
}


function createChildDepartment(_childDepartmentCreator, _name) {
    if (!provider.isAddress(_childDepartmentCreator)) {
        console.log("Ugyldig addresse");
        return;
    }
    department.createChildDepartment.sendTransaction(_childDepartmentCreator, _name, {
        from: address,
        gas: 4000000,
        gasPrice: getGasPrice()
    }, submitter);
}

function addChildDepartment(_childDepartment) {
    if (!provider.isAddress(_childDepartment)) {
        console.log("Ugyldig addresse");
        return;
    }
    department.addChildDepartment.sendTransaction(_childDepartment, {
        from: address,
        gas: 200000,
        gasPrice: getGasPrice()
    }, submitter);
}

function removeChildDepartment(_childDepartment) {
    if (!provider.isAddress(_childDepartment)) {
        console.log("Ugyldig addresse");
        return;
    }
    department.removeChildDepartment.sendTransaction(_childDepartment, {
        from: address,
        gas: 200000,
        gasPrice: getGasPrice()
    }, submitter);
}

function transferChildDepartmentOwnership(_childDepartment, _newOwner) {
    if (!(provider.isAddress(_childDepartment) && provider.isAddress(_newOwner))) {
        console.log("Ugyldig addresse");
        return;
    }
    department.transferChildDepartmentOwnership.sendTransaction(_childDepartment, _newOwner, {
        from: address,
        gas: 200000,
        gasPrice: getGasPrice()
    }, submitter);
}

function addEmployee(_employee) {
    if (!provider.isAddress(_employee)) {
        console.log("Ugyldig addresse");
        return;
    }
    department.addEmployee.sendTransaction(_employee, {
        from: address,
        gas: 100000,
        gasPrice: getGasPrice()
    }, submitter);
}

function removeEmployee(_employee) {
    if (!provider.isAddress(_employee)) {
        console.log("Ugyldig addresse");
        return;
    }
    department.removeEmployee.sendTransaction(_employee, {
        from: address,
        gas: 100000,
        gasPrice: getGasPrice()
    }, submitter);
}

function changeBudget(_to, _amount) {
    if (!provider.isAddress(_to)) {
        console.log("Ugyldig addresse");
        return;
    }
    var amountInBKK = Math.floor(_amount * 100);
    department.changeBudget.sendTransaction(_to, amountInBKK, {
        from: address,
        gas: 100000,
        gasPrice: getGasPrice()
    }, submitter);
}

function transferBKK(_to, _amount) {
    console.log("TransferBKK");
    var amountInBKK = Math.floor(_amount * 100);

    if (provider.isAddress(_to)) {
        department.transferFundsIntern.sendTransaction(_to, amountInBKK, {
            from: address,
            gas: 200000,
            gasPrice: provider.toWei(2, "gWei")
        }, submitter);
    } else {
        console.log("Addressen er ikke gyldig");
    }
}

function transferCDKK(_to, _amount) {
    var amountInCDKK = Math.floor(_amount * 100);

    if (provider.isAddress(_to)) {
        department.transferFundsOutside.sendTransaction(_to, amountInCDKK, {
            from: address,
            gas: 200000,
            gasPrice: getGasPrice()
        }, submitter);
    } else {
        console.log("Addressen er ikke gyldig");
    }
}