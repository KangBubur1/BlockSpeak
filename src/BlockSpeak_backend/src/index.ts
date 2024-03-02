import {
  query,
  update,
  text,
  Record,
  StableBTreeMap,
  Variant,
  Vec,
  None,
  Some,
  Ok,
  Err,
  ic,
  Principal,
  Opt,
  nat64,
  Duration,
  Result,
  bool,
  Canister,
} from "azle";
import {
  Ledger,
  binaryAddressFromAddress,
  binaryAddressFromPrincipal,
  hexAddressFromPrincipal,
} from "azle/canisters/ledger";
import { v4 as uuidv4 } from "uuid";
// import { hashCode } from "hashcode";
// var encode = require( 'hashcode' ).hashCode;
//  var hash = encode().value( "my string value" );

/**
 * `ORDER_RESERVATION_PERIOD` is a constant that defines the reservation period for orders in seconds.
 * This period allows users to reserve products for a specific duration before completing the purchase.
 */
// const ORDER_RESERVATION_PERIOD = 120n;

/**
 * Initialization of the Ledger canister, which handles financial transactions and ledger operations.
 * The principal text value is hardcoded here, as it is set in the `dfx.json` configuration.
 */

const Transcript = Record({
  id: text,
  transcript: text,
  createdAt: text,
});

const Audio = Record({
  
});

const icpCanister = Ledger(Principal.fromText("ryjl3-tyaaa-aaaaa-aaaba-cai")); //TODO: chage canister ID

export default Canister({
  greet: query([text], text, (name) => {
    return `Hello, ${name}!`;
  }),
  getPrincipal: query([], Principal, () => {
    return Principal.fromText("rrkah-fqaaa-aaaaa-aaaaq-cai");
  }),
  printPrincipal: query([Principal], Principal, (principal) => {
    console.log(typeof principal);
    return principal;
  }),
  whoami: query([Principal], Principal, async (caller: Principal) => {
    return caller;
  }),
});
