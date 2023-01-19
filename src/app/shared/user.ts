export class User {
    static message(message: any) {
      throw new Error('Method not implemented.');
    }
    _id!: String;
    name!: String;
    email!: String;
    password!: String;
    role!: String;
    pin!: String;
    mobile!: String;
    org_name!: String;
    org_type!: String;
    trade_license_no!:String;
    license_auth!:String;
    gstin_no!:String;
    fssai_no!:String;

  }