// data.ts
export function petData(id: number, name: string, status: string) {
    return {
      id,
      name,
      status,
    };
  }

  export function userData(id: number, username: string, firstName: string, lastName: string, email: string, password : string, phone: string, userStatus: number) {
    return {
      id,
      username,
      firstName,
      lastName,
      email,
      password,
      phone,
      userStatus,
    };
  }
  export function orderData(id: number, petId: number, quantity: number, shipDate: string, status: string, complete : boolean) {
    return {
      id,
      petId,
      quantity,
      shipDate,
      status,
      complete,
    };
  }