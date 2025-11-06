
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model Limits
 * 
 */
export type Limits = $Result.DefaultSelection<Prisma.$LimitsPayload>
/**
 * Model Servers
 * 
 */
export type Servers = $Result.DefaultSelection<Prisma.$ServersPayload>
/**
 * Model PremiumSubscriptions
 * 
 */
export type PremiumSubscriptions = $Result.DefaultSelection<Prisma.$PremiumSubscriptionsPayload>
/**
 * Model ServerSubscriptions
 * 
 */
export type ServerSubscriptions = $Result.DefaultSelection<Prisma.$ServerSubscriptionsPayload>
/**
 * Model ErrorLog
 * 
 */
export type ErrorLog = $Result.DefaultSelection<Prisma.$ErrorLogPayload>
/**
 * Model Incidents
 * 
 */
export type Incidents = $Result.DefaultSelection<Prisma.$IncidentsPayload>
/**
 * Model Products
 * 
 */
export type Products = $Result.DefaultSelection<Prisma.$ProductsPayload>
/**
 * Model Prices
 * 
 */
export type Prices = $Result.DefaultSelection<Prisma.$PricesPayload>
/**
 * Model AutomodConfig
 * 
 */
export type AutomodConfig = $Result.DefaultSelection<Prisma.$AutomodConfigPayload>
/**
 * Model Testimonials
 * 
 */
export type Testimonials = $Result.DefaultSelection<Prisma.$TestimonialsPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Verification
 * 
 */
export type Verification = $Result.DefaultSelection<Prisma.$VerificationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Plans: {
  FREE: 'FREE',
  PREMIUM: 'PREMIUM',
  PREMIUMPLUS: 'PREMIUMPLUS',
  PRO: 'PRO'
};

export type Plans = (typeof Plans)[keyof typeof Plans]


export const LogLevel: {
  NONE: 'NONE',
  MINIMAL: 'MINIMAL',
  MEDIUM: 'MEDIUM',
  MAXIMUM: 'MAXIMUM'
};

export type LogLevel = (typeof LogLevel)[keyof typeof LogLevel]


export const Sources: {
  DISCORD: 'DISCORD',
  DASHBOARD: 'DASHBOARD'
};

export type Sources = (typeof Sources)[keyof typeof Sources]


export const IncidentsType: {
  WARN: 'WARN',
  KICK: 'KICK',
  BAN: 'BAN'
};

export type IncidentsType = (typeof IncidentsType)[keyof typeof IncidentsType]


export const IncidentsStatus: {
  OPEN: 'OPEN',
  APPEALED: 'APPEALED',
  CLOSED: 'CLOSED',
  REVOKED: 'REVOKED'
};

export type IncidentsStatus = (typeof IncidentsStatus)[keyof typeof IncidentsStatus]


export const Role: {
  staff: 'staff',
  user: 'user'
};

export type Role = (typeof Role)[keyof typeof Role]


export const ProductType: {
  onetime: 'onetime',
  subscription: 'subscription'
};

export type ProductType = (typeof ProductType)[keyof typeof ProductType]

}

export type Plans = $Enums.Plans

export const Plans: typeof $Enums.Plans

export type LogLevel = $Enums.LogLevel

export const LogLevel: typeof $Enums.LogLevel

export type Sources = $Enums.Sources

export const Sources: typeof $Enums.Sources

export type IncidentsType = $Enums.IncidentsType

export const IncidentsType: typeof $Enums.IncidentsType

export type IncidentsStatus = $Enums.IncidentsStatus

export const IncidentsStatus: typeof $Enums.IncidentsStatus

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type ProductType = $Enums.ProductType

export const ProductType: typeof $Enums.ProductType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.limits`: Exposes CRUD operations for the **Limits** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Limits
    * const limits = await prisma.limits.findMany()
    * ```
    */
  get limits(): Prisma.LimitsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.servers`: Exposes CRUD operations for the **Servers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Servers
    * const servers = await prisma.servers.findMany()
    * ```
    */
  get servers(): Prisma.ServersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.premiumSubscriptions`: Exposes CRUD operations for the **PremiumSubscriptions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PremiumSubscriptions
    * const premiumSubscriptions = await prisma.premiumSubscriptions.findMany()
    * ```
    */
  get premiumSubscriptions(): Prisma.PremiumSubscriptionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.serverSubscriptions`: Exposes CRUD operations for the **ServerSubscriptions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ServerSubscriptions
    * const serverSubscriptions = await prisma.serverSubscriptions.findMany()
    * ```
    */
  get serverSubscriptions(): Prisma.ServerSubscriptionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.errorLog`: Exposes CRUD operations for the **ErrorLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ErrorLogs
    * const errorLogs = await prisma.errorLog.findMany()
    * ```
    */
  get errorLog(): Prisma.ErrorLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.incidents`: Exposes CRUD operations for the **Incidents** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Incidents
    * const incidents = await prisma.incidents.findMany()
    * ```
    */
  get incidents(): Prisma.IncidentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.products`: Exposes CRUD operations for the **Products** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.products.findMany()
    * ```
    */
  get products(): Prisma.ProductsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.prices`: Exposes CRUD operations for the **Prices** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Prices
    * const prices = await prisma.prices.findMany()
    * ```
    */
  get prices(): Prisma.PricesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.automodConfig`: Exposes CRUD operations for the **AutomodConfig** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AutomodConfigs
    * const automodConfigs = await prisma.automodConfig.findMany()
    * ```
    */
  get automodConfig(): Prisma.AutomodConfigDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.testimonials`: Exposes CRUD operations for the **Testimonials** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Testimonials
    * const testimonials = await prisma.testimonials.findMany()
    * ```
    */
  get testimonials(): Prisma.TestimonialsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verification`: Exposes CRUD operations for the **Verification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Verifications
    * const verifications = await prisma.verification.findMany()
    * ```
    */
  get verification(): Prisma.VerificationDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Users: 'Users',
    Limits: 'Limits',
    Servers: 'Servers',
    PremiumSubscriptions: 'PremiumSubscriptions',
    ServerSubscriptions: 'ServerSubscriptions',
    ErrorLog: 'ErrorLog',
    Incidents: 'Incidents',
    Products: 'Products',
    Prices: 'Prices',
    AutomodConfig: 'AutomodConfig',
    Testimonials: 'Testimonials',
    User: 'User',
    Session: 'Session',
    Account: 'Account',
    Verification: 'Verification'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "users" | "limits" | "servers" | "premiumSubscriptions" | "serverSubscriptions" | "errorLog" | "incidents" | "products" | "prices" | "automodConfig" | "testimonials" | "user" | "session" | "account" | "verification"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      Limits: {
        payload: Prisma.$LimitsPayload<ExtArgs>
        fields: Prisma.LimitsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LimitsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LimitsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LimitsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LimitsPayload>
          }
          findFirst: {
            args: Prisma.LimitsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LimitsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LimitsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LimitsPayload>
          }
          findMany: {
            args: Prisma.LimitsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LimitsPayload>[]
          }
          create: {
            args: Prisma.LimitsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LimitsPayload>
          }
          createMany: {
            args: Prisma.LimitsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LimitsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LimitsPayload>[]
          }
          delete: {
            args: Prisma.LimitsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LimitsPayload>
          }
          update: {
            args: Prisma.LimitsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LimitsPayload>
          }
          deleteMany: {
            args: Prisma.LimitsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LimitsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LimitsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LimitsPayload>[]
          }
          upsert: {
            args: Prisma.LimitsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LimitsPayload>
          }
          aggregate: {
            args: Prisma.LimitsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLimits>
          }
          groupBy: {
            args: Prisma.LimitsGroupByArgs<ExtArgs>
            result: $Utils.Optional<LimitsGroupByOutputType>[]
          }
          count: {
            args: Prisma.LimitsCountArgs<ExtArgs>
            result: $Utils.Optional<LimitsCountAggregateOutputType> | number
          }
        }
      }
      Servers: {
        payload: Prisma.$ServersPayload<ExtArgs>
        fields: Prisma.ServersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServersPayload>
          }
          findFirst: {
            args: Prisma.ServersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServersPayload>
          }
          findMany: {
            args: Prisma.ServersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServersPayload>[]
          }
          create: {
            args: Prisma.ServersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServersPayload>
          }
          createMany: {
            args: Prisma.ServersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServersPayload>[]
          }
          delete: {
            args: Prisma.ServersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServersPayload>
          }
          update: {
            args: Prisma.ServersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServersPayload>
          }
          deleteMany: {
            args: Prisma.ServersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ServersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServersPayload>[]
          }
          upsert: {
            args: Prisma.ServersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServersPayload>
          }
          aggregate: {
            args: Prisma.ServersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServers>
          }
          groupBy: {
            args: Prisma.ServersGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServersGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServersCountArgs<ExtArgs>
            result: $Utils.Optional<ServersCountAggregateOutputType> | number
          }
        }
      }
      PremiumSubscriptions: {
        payload: Prisma.$PremiumSubscriptionsPayload<ExtArgs>
        fields: Prisma.PremiumSubscriptionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PremiumSubscriptionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PremiumSubscriptionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PremiumSubscriptionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PremiumSubscriptionsPayload>
          }
          findFirst: {
            args: Prisma.PremiumSubscriptionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PremiumSubscriptionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PremiumSubscriptionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PremiumSubscriptionsPayload>
          }
          findMany: {
            args: Prisma.PremiumSubscriptionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PremiumSubscriptionsPayload>[]
          }
          create: {
            args: Prisma.PremiumSubscriptionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PremiumSubscriptionsPayload>
          }
          createMany: {
            args: Prisma.PremiumSubscriptionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PremiumSubscriptionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PremiumSubscriptionsPayload>[]
          }
          delete: {
            args: Prisma.PremiumSubscriptionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PremiumSubscriptionsPayload>
          }
          update: {
            args: Prisma.PremiumSubscriptionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PremiumSubscriptionsPayload>
          }
          deleteMany: {
            args: Prisma.PremiumSubscriptionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PremiumSubscriptionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PremiumSubscriptionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PremiumSubscriptionsPayload>[]
          }
          upsert: {
            args: Prisma.PremiumSubscriptionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PremiumSubscriptionsPayload>
          }
          aggregate: {
            args: Prisma.PremiumSubscriptionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePremiumSubscriptions>
          }
          groupBy: {
            args: Prisma.PremiumSubscriptionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PremiumSubscriptionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PremiumSubscriptionsCountArgs<ExtArgs>
            result: $Utils.Optional<PremiumSubscriptionsCountAggregateOutputType> | number
          }
        }
      }
      ServerSubscriptions: {
        payload: Prisma.$ServerSubscriptionsPayload<ExtArgs>
        fields: Prisma.ServerSubscriptionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServerSubscriptionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServerSubscriptionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServerSubscriptionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServerSubscriptionsPayload>
          }
          findFirst: {
            args: Prisma.ServerSubscriptionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServerSubscriptionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServerSubscriptionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServerSubscriptionsPayload>
          }
          findMany: {
            args: Prisma.ServerSubscriptionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServerSubscriptionsPayload>[]
          }
          create: {
            args: Prisma.ServerSubscriptionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServerSubscriptionsPayload>
          }
          createMany: {
            args: Prisma.ServerSubscriptionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServerSubscriptionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServerSubscriptionsPayload>[]
          }
          delete: {
            args: Prisma.ServerSubscriptionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServerSubscriptionsPayload>
          }
          update: {
            args: Prisma.ServerSubscriptionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServerSubscriptionsPayload>
          }
          deleteMany: {
            args: Prisma.ServerSubscriptionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServerSubscriptionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ServerSubscriptionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServerSubscriptionsPayload>[]
          }
          upsert: {
            args: Prisma.ServerSubscriptionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServerSubscriptionsPayload>
          }
          aggregate: {
            args: Prisma.ServerSubscriptionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServerSubscriptions>
          }
          groupBy: {
            args: Prisma.ServerSubscriptionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServerSubscriptionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServerSubscriptionsCountArgs<ExtArgs>
            result: $Utils.Optional<ServerSubscriptionsCountAggregateOutputType> | number
          }
        }
      }
      ErrorLog: {
        payload: Prisma.$ErrorLogPayload<ExtArgs>
        fields: Prisma.ErrorLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ErrorLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ErrorLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ErrorLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ErrorLogPayload>
          }
          findFirst: {
            args: Prisma.ErrorLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ErrorLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ErrorLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ErrorLogPayload>
          }
          findMany: {
            args: Prisma.ErrorLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ErrorLogPayload>[]
          }
          create: {
            args: Prisma.ErrorLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ErrorLogPayload>
          }
          createMany: {
            args: Prisma.ErrorLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ErrorLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ErrorLogPayload>[]
          }
          delete: {
            args: Prisma.ErrorLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ErrorLogPayload>
          }
          update: {
            args: Prisma.ErrorLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ErrorLogPayload>
          }
          deleteMany: {
            args: Prisma.ErrorLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ErrorLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ErrorLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ErrorLogPayload>[]
          }
          upsert: {
            args: Prisma.ErrorLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ErrorLogPayload>
          }
          aggregate: {
            args: Prisma.ErrorLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateErrorLog>
          }
          groupBy: {
            args: Prisma.ErrorLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<ErrorLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.ErrorLogCountArgs<ExtArgs>
            result: $Utils.Optional<ErrorLogCountAggregateOutputType> | number
          }
        }
      }
      Incidents: {
        payload: Prisma.$IncidentsPayload<ExtArgs>
        fields: Prisma.IncidentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IncidentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IncidentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentsPayload>
          }
          findFirst: {
            args: Prisma.IncidentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IncidentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentsPayload>
          }
          findMany: {
            args: Prisma.IncidentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentsPayload>[]
          }
          create: {
            args: Prisma.IncidentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentsPayload>
          }
          createMany: {
            args: Prisma.IncidentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IncidentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentsPayload>[]
          }
          delete: {
            args: Prisma.IncidentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentsPayload>
          }
          update: {
            args: Prisma.IncidentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentsPayload>
          }
          deleteMany: {
            args: Prisma.IncidentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IncidentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IncidentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentsPayload>[]
          }
          upsert: {
            args: Prisma.IncidentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentsPayload>
          }
          aggregate: {
            args: Prisma.IncidentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIncidents>
          }
          groupBy: {
            args: Prisma.IncidentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<IncidentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.IncidentsCountArgs<ExtArgs>
            result: $Utils.Optional<IncidentsCountAggregateOutputType> | number
          }
        }
      }
      Products: {
        payload: Prisma.$ProductsPayload<ExtArgs>
        fields: Prisma.ProductsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          findFirst: {
            args: Prisma.ProductsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          findMany: {
            args: Prisma.ProductsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>[]
          }
          create: {
            args: Prisma.ProductsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          createMany: {
            args: Prisma.ProductsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>[]
          }
          delete: {
            args: Prisma.ProductsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          update: {
            args: Prisma.ProductsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          deleteMany: {
            args: Prisma.ProductsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>[]
          }
          upsert: {
            args: Prisma.ProductsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          aggregate: {
            args: Prisma.ProductsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProducts>
          }
          groupBy: {
            args: Prisma.ProductsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductsCountArgs<ExtArgs>
            result: $Utils.Optional<ProductsCountAggregateOutputType> | number
          }
        }
      }
      Prices: {
        payload: Prisma.$PricesPayload<ExtArgs>
        fields: Prisma.PricesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PricesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PricesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricesPayload>
          }
          findFirst: {
            args: Prisma.PricesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PricesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricesPayload>
          }
          findMany: {
            args: Prisma.PricesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricesPayload>[]
          }
          create: {
            args: Prisma.PricesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricesPayload>
          }
          createMany: {
            args: Prisma.PricesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PricesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricesPayload>[]
          }
          delete: {
            args: Prisma.PricesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricesPayload>
          }
          update: {
            args: Prisma.PricesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricesPayload>
          }
          deleteMany: {
            args: Prisma.PricesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PricesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PricesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricesPayload>[]
          }
          upsert: {
            args: Prisma.PricesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricesPayload>
          }
          aggregate: {
            args: Prisma.PricesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrices>
          }
          groupBy: {
            args: Prisma.PricesGroupByArgs<ExtArgs>
            result: $Utils.Optional<PricesGroupByOutputType>[]
          }
          count: {
            args: Prisma.PricesCountArgs<ExtArgs>
            result: $Utils.Optional<PricesCountAggregateOutputType> | number
          }
        }
      }
      AutomodConfig: {
        payload: Prisma.$AutomodConfigPayload<ExtArgs>
        fields: Prisma.AutomodConfigFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AutomodConfigFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomodConfigPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AutomodConfigFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomodConfigPayload>
          }
          findFirst: {
            args: Prisma.AutomodConfigFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomodConfigPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AutomodConfigFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomodConfigPayload>
          }
          findMany: {
            args: Prisma.AutomodConfigFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomodConfigPayload>[]
          }
          create: {
            args: Prisma.AutomodConfigCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomodConfigPayload>
          }
          createMany: {
            args: Prisma.AutomodConfigCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AutomodConfigCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomodConfigPayload>[]
          }
          delete: {
            args: Prisma.AutomodConfigDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomodConfigPayload>
          }
          update: {
            args: Prisma.AutomodConfigUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomodConfigPayload>
          }
          deleteMany: {
            args: Prisma.AutomodConfigDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AutomodConfigUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AutomodConfigUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomodConfigPayload>[]
          }
          upsert: {
            args: Prisma.AutomodConfigUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomodConfigPayload>
          }
          aggregate: {
            args: Prisma.AutomodConfigAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAutomodConfig>
          }
          groupBy: {
            args: Prisma.AutomodConfigGroupByArgs<ExtArgs>
            result: $Utils.Optional<AutomodConfigGroupByOutputType>[]
          }
          count: {
            args: Prisma.AutomodConfigCountArgs<ExtArgs>
            result: $Utils.Optional<AutomodConfigCountAggregateOutputType> | number
          }
        }
      }
      Testimonials: {
        payload: Prisma.$TestimonialsPayload<ExtArgs>
        fields: Prisma.TestimonialsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TestimonialsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TestimonialsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialsPayload>
          }
          findFirst: {
            args: Prisma.TestimonialsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TestimonialsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialsPayload>
          }
          findMany: {
            args: Prisma.TestimonialsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialsPayload>[]
          }
          create: {
            args: Prisma.TestimonialsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialsPayload>
          }
          createMany: {
            args: Prisma.TestimonialsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TestimonialsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialsPayload>[]
          }
          delete: {
            args: Prisma.TestimonialsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialsPayload>
          }
          update: {
            args: Prisma.TestimonialsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialsPayload>
          }
          deleteMany: {
            args: Prisma.TestimonialsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TestimonialsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TestimonialsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialsPayload>[]
          }
          upsert: {
            args: Prisma.TestimonialsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialsPayload>
          }
          aggregate: {
            args: Prisma.TestimonialsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTestimonials>
          }
          groupBy: {
            args: Prisma.TestimonialsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TestimonialsGroupByOutputType>[]
          }
          count: {
            args: Prisma.TestimonialsCountArgs<ExtArgs>
            result: $Utils.Optional<TestimonialsCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Verification: {
        payload: Prisma.$VerificationPayload<ExtArgs>
        fields: Prisma.VerificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          findFirst: {
            args: Prisma.VerificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          findMany: {
            args: Prisma.VerificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          create: {
            args: Prisma.VerificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          createMany: {
            args: Prisma.VerificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          delete: {
            args: Prisma.VerificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          update: {
            args: Prisma.VerificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          deleteMany: {
            args: Prisma.VerificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          upsert: {
            args: Prisma.VerificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          aggregate: {
            args: Prisma.VerificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerification>
          }
          groupBy: {
            args: Prisma.VerificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    users?: UsersOmit
    limits?: LimitsOmit
    servers?: ServersOmit
    premiumSubscriptions?: PremiumSubscriptionsOmit
    serverSubscriptions?: ServerSubscriptionsOmit
    errorLog?: ErrorLogOmit
    incidents?: IncidentsOmit
    products?: ProductsOmit
    prices?: PricesOmit
    automodConfig?: AutomodConfigOmit
    testimonials?: TestimonialsOmit
    user?: UserOmit
    session?: SessionOmit
    account?: AccountOmit
    verification?: VerificationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    premiumServers: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    premiumServers?: boolean | UsersCountOutputTypeCountPremiumServersArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountPremiumServersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServersWhereInput
  }


  /**
   * Count Type ServersCountOutputType
   */

  export type ServersCountOutputType = {
    AutomodConfig: number
    ServerSubscriptions: number
  }

  export type ServersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    AutomodConfig?: boolean | ServersCountOutputTypeCountAutomodConfigArgs
    ServerSubscriptions?: boolean | ServersCountOutputTypeCountServerSubscriptionsArgs
  }

  // Custom InputTypes
  /**
   * ServersCountOutputType without action
   */
  export type ServersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServersCountOutputType
     */
    select?: ServersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ServersCountOutputType without action
   */
  export type ServersCountOutputTypeCountAutomodConfigArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AutomodConfigWhereInput
  }

  /**
   * ServersCountOutputType without action
   */
  export type ServersCountOutputTypeCountServerSubscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServerSubscriptionsWhereInput
  }


  /**
   * Count Type ProductsCountOutputType
   */

  export type ProductsCountOutputType = {
    prices: number
  }

  export type ProductsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prices?: boolean | ProductsCountOutputTypeCountPricesArgs
  }

  // Custom InputTypes
  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsCountOutputType
     */
    select?: ProductsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountPricesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PricesWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    sessions: number
    accounts: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    extId: string | null
    discordId: string | null
    discordUsername: string | null
    kickId: string | null
    kickUsername: string | null
    role: $Enums.Role | null
    customerId: string | null
    timezone: string | null
    plan: $Enums.Plans | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    extId: string | null
    discordId: string | null
    discordUsername: string | null
    kickId: string | null
    kickUsername: string | null
    role: $Enums.Role | null
    customerId: string | null
    timezone: string | null
    plan: $Enums.Plans | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    username: number
    email: number
    extId: number
    discordId: number
    discordUsername: number
    kickId: number
    kickUsername: number
    role: number
    customerId: number
    timezone: number
    plan: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    extId?: true
    discordId?: true
    discordUsername?: true
    kickId?: true
    kickUsername?: true
    role?: true
    customerId?: true
    timezone?: true
    plan?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    extId?: true
    discordId?: true
    discordUsername?: true
    kickId?: true
    kickUsername?: true
    role?: true
    customerId?: true
    timezone?: true
    plan?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    extId?: true
    discordId?: true
    discordUsername?: true
    kickId?: true
    kickUsername?: true
    role?: true
    customerId?: true
    timezone?: true
    plan?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    username: string
    email: string | null
    extId: string | null
    discordId: string | null
    discordUsername: string | null
    kickId: string | null
    kickUsername: string | null
    role: $Enums.Role
    customerId: string | null
    timezone: string | null
    plan: $Enums.Plans
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    extId?: boolean
    discordId?: boolean
    discordUsername?: boolean
    kickId?: boolean
    kickUsername?: boolean
    role?: boolean
    customerId?: boolean
    timezone?: boolean
    plan?: boolean
    premiumSubscriptions?: boolean | Users$premiumSubscriptionsArgs<ExtArgs>
    limits?: boolean | Users$limitsArgs<ExtArgs>
    premiumServers?: boolean | Users$premiumServersArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    extId?: boolean
    discordId?: boolean
    discordUsername?: boolean
    kickId?: boolean
    kickUsername?: boolean
    role?: boolean
    customerId?: boolean
    timezone?: boolean
    plan?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    extId?: boolean
    discordId?: boolean
    discordUsername?: boolean
    kickId?: boolean
    kickUsername?: boolean
    role?: boolean
    customerId?: boolean
    timezone?: boolean
    plan?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    extId?: boolean
    discordId?: boolean
    discordUsername?: boolean
    kickId?: boolean
    kickUsername?: boolean
    role?: boolean
    customerId?: boolean
    timezone?: boolean
    plan?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "extId" | "discordId" | "discordUsername" | "kickId" | "kickUsername" | "role" | "customerId" | "timezone" | "plan", ExtArgs["result"]["users"]>
  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    premiumSubscriptions?: boolean | Users$premiumSubscriptionsArgs<ExtArgs>
    limits?: boolean | Users$limitsArgs<ExtArgs>
    premiumServers?: boolean | Users$premiumServersArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      premiumSubscriptions: Prisma.$PremiumSubscriptionsPayload<ExtArgs> | null
      limits: Prisma.$LimitsPayload<ExtArgs> | null
      premiumServers: Prisma.$ServersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      email: string | null
      extId: string | null
      discordId: string | null
      discordUsername: string | null
      kickId: string | null
      kickUsername: string | null
      role: $Enums.Role
      customerId: string | null
      timezone: string | null
      plan: $Enums.Plans
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UsersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsersCreateManyAndReturnArgs>(args?: SelectSubset<T, UsersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UsersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsersUpdateManyAndReturnArgs>(args: SelectSubset<T, UsersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    premiumSubscriptions<T extends Users$premiumSubscriptionsArgs<ExtArgs> = {}>(args?: Subset<T, Users$premiumSubscriptionsArgs<ExtArgs>>): Prisma__PremiumSubscriptionsClient<$Result.GetResult<Prisma.$PremiumSubscriptionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    limits<T extends Users$limitsArgs<ExtArgs> = {}>(args?: Subset<T, Users$limitsArgs<ExtArgs>>): Prisma__LimitsClient<$Result.GetResult<Prisma.$LimitsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    premiumServers<T extends Users$premiumServersArgs<ExtArgs> = {}>(args?: Subset<T, Users$premiumServersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly id: FieldRef<"Users", 'String'>
    readonly username: FieldRef<"Users", 'String'>
    readonly email: FieldRef<"Users", 'String'>
    readonly extId: FieldRef<"Users", 'String'>
    readonly discordId: FieldRef<"Users", 'String'>
    readonly discordUsername: FieldRef<"Users", 'String'>
    readonly kickId: FieldRef<"Users", 'String'>
    readonly kickUsername: FieldRef<"Users", 'String'>
    readonly role: FieldRef<"Users", 'Role'>
    readonly customerId: FieldRef<"Users", 'String'>
    readonly timezone: FieldRef<"Users", 'String'>
    readonly plan: FieldRef<"Users", 'Plans'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users createManyAndReturn
   */
  export type UsersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users updateManyAndReturn
   */
  export type UsersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users.premiumSubscriptions
   */
  export type Users$premiumSubscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PremiumSubscriptions
     */
    select?: PremiumSubscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PremiumSubscriptions
     */
    omit?: PremiumSubscriptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremiumSubscriptionsInclude<ExtArgs> | null
    where?: PremiumSubscriptionsWhereInput
  }

  /**
   * Users.limits
   */
  export type Users$limitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Limits
     */
    select?: LimitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Limits
     */
    omit?: LimitsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LimitsInclude<ExtArgs> | null
    where?: LimitsWhereInput
  }

  /**
   * Users.premiumServers
   */
  export type Users$premiumServersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servers
     */
    select?: ServersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servers
     */
    omit?: ServersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServersInclude<ExtArgs> | null
    where?: ServersWhereInput
    orderBy?: ServersOrderByWithRelationInput | ServersOrderByWithRelationInput[]
    cursor?: ServersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServersScalarFieldEnum | ServersScalarFieldEnum[]
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Model Limits
   */

  export type AggregateLimits = {
    _count: LimitsCountAggregateOutputType | null
    _avg: LimitsAvgAggregateOutputType | null
    _sum: LimitsSumAggregateOutputType | null
    _min: LimitsMinAggregateOutputType | null
    _max: LimitsMaxAggregateOutputType | null
  }

  export type LimitsAvgAggregateOutputType = {
    aiUsed: number | null
    aiLimit: number | null
    additionalMessages: number | null
    premiumServers: number | null
    premiumServerLimmit: number | null
  }

  export type LimitsSumAggregateOutputType = {
    aiUsed: number | null
    aiLimit: number | null
    additionalMessages: number | null
    premiumServers: number | null
    premiumServerLimmit: number | null
  }

  export type LimitsMinAggregateOutputType = {
    id: string | null
    date: Date | null
    aiUsed: number | null
    aiLimit: number | null
    additionalMessages: number | null
    premiumServers: number | null
    premiumServerLimmit: number | null
  }

  export type LimitsMaxAggregateOutputType = {
    id: string | null
    date: Date | null
    aiUsed: number | null
    aiLimit: number | null
    additionalMessages: number | null
    premiumServers: number | null
    premiumServerLimmit: number | null
  }

  export type LimitsCountAggregateOutputType = {
    id: number
    date: number
    aiUsed: number
    aiLimit: number
    additionalMessages: number
    premiumServers: number
    premiumServerLimmit: number
    _all: number
  }


  export type LimitsAvgAggregateInputType = {
    aiUsed?: true
    aiLimit?: true
    additionalMessages?: true
    premiumServers?: true
    premiumServerLimmit?: true
  }

  export type LimitsSumAggregateInputType = {
    aiUsed?: true
    aiLimit?: true
    additionalMessages?: true
    premiumServers?: true
    premiumServerLimmit?: true
  }

  export type LimitsMinAggregateInputType = {
    id?: true
    date?: true
    aiUsed?: true
    aiLimit?: true
    additionalMessages?: true
    premiumServers?: true
    premiumServerLimmit?: true
  }

  export type LimitsMaxAggregateInputType = {
    id?: true
    date?: true
    aiUsed?: true
    aiLimit?: true
    additionalMessages?: true
    premiumServers?: true
    premiumServerLimmit?: true
  }

  export type LimitsCountAggregateInputType = {
    id?: true
    date?: true
    aiUsed?: true
    aiLimit?: true
    additionalMessages?: true
    premiumServers?: true
    premiumServerLimmit?: true
    _all?: true
  }

  export type LimitsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Limits to aggregate.
     */
    where?: LimitsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Limits to fetch.
     */
    orderBy?: LimitsOrderByWithRelationInput | LimitsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LimitsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Limits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Limits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Limits
    **/
    _count?: true | LimitsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LimitsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LimitsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LimitsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LimitsMaxAggregateInputType
  }

  export type GetLimitsAggregateType<T extends LimitsAggregateArgs> = {
        [P in keyof T & keyof AggregateLimits]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLimits[P]>
      : GetScalarType<T[P], AggregateLimits[P]>
  }




  export type LimitsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LimitsWhereInput
    orderBy?: LimitsOrderByWithAggregationInput | LimitsOrderByWithAggregationInput[]
    by: LimitsScalarFieldEnum[] | LimitsScalarFieldEnum
    having?: LimitsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LimitsCountAggregateInputType | true
    _avg?: LimitsAvgAggregateInputType
    _sum?: LimitsSumAggregateInputType
    _min?: LimitsMinAggregateInputType
    _max?: LimitsMaxAggregateInputType
  }

  export type LimitsGroupByOutputType = {
    id: string
    date: Date
    aiUsed: number
    aiLimit: number
    additionalMessages: number
    premiumServers: number
    premiumServerLimmit: number
    _count: LimitsCountAggregateOutputType | null
    _avg: LimitsAvgAggregateOutputType | null
    _sum: LimitsSumAggregateOutputType | null
    _min: LimitsMinAggregateOutputType | null
    _max: LimitsMaxAggregateOutputType | null
  }

  type GetLimitsGroupByPayload<T extends LimitsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LimitsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LimitsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LimitsGroupByOutputType[P]>
            : GetScalarType<T[P], LimitsGroupByOutputType[P]>
        }
      >
    >


  export type LimitsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    aiUsed?: boolean
    aiLimit?: boolean
    additionalMessages?: boolean
    premiumServers?: boolean
    premiumServerLimmit?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["limits"]>

  export type LimitsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    aiUsed?: boolean
    aiLimit?: boolean
    additionalMessages?: boolean
    premiumServers?: boolean
    premiumServerLimmit?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["limits"]>

  export type LimitsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    aiUsed?: boolean
    aiLimit?: boolean
    additionalMessages?: boolean
    premiumServers?: boolean
    premiumServerLimmit?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["limits"]>

  export type LimitsSelectScalar = {
    id?: boolean
    date?: boolean
    aiUsed?: boolean
    aiLimit?: boolean
    additionalMessages?: boolean
    premiumServers?: boolean
    premiumServerLimmit?: boolean
  }

  export type LimitsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date" | "aiUsed" | "aiLimit" | "additionalMessages" | "premiumServers" | "premiumServerLimmit", ExtArgs["result"]["limits"]>
  export type LimitsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type LimitsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type LimitsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $LimitsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Limits"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      date: Date
      aiUsed: number
      aiLimit: number
      additionalMessages: number
      premiumServers: number
      premiumServerLimmit: number
    }, ExtArgs["result"]["limits"]>
    composites: {}
  }

  type LimitsGetPayload<S extends boolean | null | undefined | LimitsDefaultArgs> = $Result.GetResult<Prisma.$LimitsPayload, S>

  type LimitsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LimitsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LimitsCountAggregateInputType | true
    }

  export interface LimitsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Limits'], meta: { name: 'Limits' } }
    /**
     * Find zero or one Limits that matches the filter.
     * @param {LimitsFindUniqueArgs} args - Arguments to find a Limits
     * @example
     * // Get one Limits
     * const limits = await prisma.limits.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LimitsFindUniqueArgs>(args: SelectSubset<T, LimitsFindUniqueArgs<ExtArgs>>): Prisma__LimitsClient<$Result.GetResult<Prisma.$LimitsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Limits that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LimitsFindUniqueOrThrowArgs} args - Arguments to find a Limits
     * @example
     * // Get one Limits
     * const limits = await prisma.limits.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LimitsFindUniqueOrThrowArgs>(args: SelectSubset<T, LimitsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LimitsClient<$Result.GetResult<Prisma.$LimitsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Limits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LimitsFindFirstArgs} args - Arguments to find a Limits
     * @example
     * // Get one Limits
     * const limits = await prisma.limits.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LimitsFindFirstArgs>(args?: SelectSubset<T, LimitsFindFirstArgs<ExtArgs>>): Prisma__LimitsClient<$Result.GetResult<Prisma.$LimitsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Limits that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LimitsFindFirstOrThrowArgs} args - Arguments to find a Limits
     * @example
     * // Get one Limits
     * const limits = await prisma.limits.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LimitsFindFirstOrThrowArgs>(args?: SelectSubset<T, LimitsFindFirstOrThrowArgs<ExtArgs>>): Prisma__LimitsClient<$Result.GetResult<Prisma.$LimitsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Limits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LimitsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Limits
     * const limits = await prisma.limits.findMany()
     * 
     * // Get first 10 Limits
     * const limits = await prisma.limits.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const limitsWithIdOnly = await prisma.limits.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LimitsFindManyArgs>(args?: SelectSubset<T, LimitsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LimitsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Limits.
     * @param {LimitsCreateArgs} args - Arguments to create a Limits.
     * @example
     * // Create one Limits
     * const Limits = await prisma.limits.create({
     *   data: {
     *     // ... data to create a Limits
     *   }
     * })
     * 
     */
    create<T extends LimitsCreateArgs>(args: SelectSubset<T, LimitsCreateArgs<ExtArgs>>): Prisma__LimitsClient<$Result.GetResult<Prisma.$LimitsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Limits.
     * @param {LimitsCreateManyArgs} args - Arguments to create many Limits.
     * @example
     * // Create many Limits
     * const limits = await prisma.limits.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LimitsCreateManyArgs>(args?: SelectSubset<T, LimitsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Limits and returns the data saved in the database.
     * @param {LimitsCreateManyAndReturnArgs} args - Arguments to create many Limits.
     * @example
     * // Create many Limits
     * const limits = await prisma.limits.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Limits and only return the `id`
     * const limitsWithIdOnly = await prisma.limits.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LimitsCreateManyAndReturnArgs>(args?: SelectSubset<T, LimitsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LimitsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Limits.
     * @param {LimitsDeleteArgs} args - Arguments to delete one Limits.
     * @example
     * // Delete one Limits
     * const Limits = await prisma.limits.delete({
     *   where: {
     *     // ... filter to delete one Limits
     *   }
     * })
     * 
     */
    delete<T extends LimitsDeleteArgs>(args: SelectSubset<T, LimitsDeleteArgs<ExtArgs>>): Prisma__LimitsClient<$Result.GetResult<Prisma.$LimitsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Limits.
     * @param {LimitsUpdateArgs} args - Arguments to update one Limits.
     * @example
     * // Update one Limits
     * const limits = await prisma.limits.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LimitsUpdateArgs>(args: SelectSubset<T, LimitsUpdateArgs<ExtArgs>>): Prisma__LimitsClient<$Result.GetResult<Prisma.$LimitsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Limits.
     * @param {LimitsDeleteManyArgs} args - Arguments to filter Limits to delete.
     * @example
     * // Delete a few Limits
     * const { count } = await prisma.limits.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LimitsDeleteManyArgs>(args?: SelectSubset<T, LimitsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Limits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LimitsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Limits
     * const limits = await prisma.limits.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LimitsUpdateManyArgs>(args: SelectSubset<T, LimitsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Limits and returns the data updated in the database.
     * @param {LimitsUpdateManyAndReturnArgs} args - Arguments to update many Limits.
     * @example
     * // Update many Limits
     * const limits = await prisma.limits.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Limits and only return the `id`
     * const limitsWithIdOnly = await prisma.limits.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LimitsUpdateManyAndReturnArgs>(args: SelectSubset<T, LimitsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LimitsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Limits.
     * @param {LimitsUpsertArgs} args - Arguments to update or create a Limits.
     * @example
     * // Update or create a Limits
     * const limits = await prisma.limits.upsert({
     *   create: {
     *     // ... data to create a Limits
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Limits we want to update
     *   }
     * })
     */
    upsert<T extends LimitsUpsertArgs>(args: SelectSubset<T, LimitsUpsertArgs<ExtArgs>>): Prisma__LimitsClient<$Result.GetResult<Prisma.$LimitsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Limits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LimitsCountArgs} args - Arguments to filter Limits to count.
     * @example
     * // Count the number of Limits
     * const count = await prisma.limits.count({
     *   where: {
     *     // ... the filter for the Limits we want to count
     *   }
     * })
    **/
    count<T extends LimitsCountArgs>(
      args?: Subset<T, LimitsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LimitsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Limits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LimitsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LimitsAggregateArgs>(args: Subset<T, LimitsAggregateArgs>): Prisma.PrismaPromise<GetLimitsAggregateType<T>>

    /**
     * Group by Limits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LimitsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LimitsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LimitsGroupByArgs['orderBy'] }
        : { orderBy?: LimitsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LimitsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLimitsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Limits model
   */
  readonly fields: LimitsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Limits.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LimitsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Limits model
   */
  interface LimitsFieldRefs {
    readonly id: FieldRef<"Limits", 'String'>
    readonly date: FieldRef<"Limits", 'DateTime'>
    readonly aiUsed: FieldRef<"Limits", 'Int'>
    readonly aiLimit: FieldRef<"Limits", 'Int'>
    readonly additionalMessages: FieldRef<"Limits", 'Int'>
    readonly premiumServers: FieldRef<"Limits", 'Int'>
    readonly premiumServerLimmit: FieldRef<"Limits", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Limits findUnique
   */
  export type LimitsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Limits
     */
    select?: LimitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Limits
     */
    omit?: LimitsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LimitsInclude<ExtArgs> | null
    /**
     * Filter, which Limits to fetch.
     */
    where: LimitsWhereUniqueInput
  }

  /**
   * Limits findUniqueOrThrow
   */
  export type LimitsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Limits
     */
    select?: LimitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Limits
     */
    omit?: LimitsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LimitsInclude<ExtArgs> | null
    /**
     * Filter, which Limits to fetch.
     */
    where: LimitsWhereUniqueInput
  }

  /**
   * Limits findFirst
   */
  export type LimitsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Limits
     */
    select?: LimitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Limits
     */
    omit?: LimitsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LimitsInclude<ExtArgs> | null
    /**
     * Filter, which Limits to fetch.
     */
    where?: LimitsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Limits to fetch.
     */
    orderBy?: LimitsOrderByWithRelationInput | LimitsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Limits.
     */
    cursor?: LimitsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Limits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Limits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Limits.
     */
    distinct?: LimitsScalarFieldEnum | LimitsScalarFieldEnum[]
  }

  /**
   * Limits findFirstOrThrow
   */
  export type LimitsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Limits
     */
    select?: LimitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Limits
     */
    omit?: LimitsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LimitsInclude<ExtArgs> | null
    /**
     * Filter, which Limits to fetch.
     */
    where?: LimitsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Limits to fetch.
     */
    orderBy?: LimitsOrderByWithRelationInput | LimitsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Limits.
     */
    cursor?: LimitsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Limits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Limits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Limits.
     */
    distinct?: LimitsScalarFieldEnum | LimitsScalarFieldEnum[]
  }

  /**
   * Limits findMany
   */
  export type LimitsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Limits
     */
    select?: LimitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Limits
     */
    omit?: LimitsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LimitsInclude<ExtArgs> | null
    /**
     * Filter, which Limits to fetch.
     */
    where?: LimitsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Limits to fetch.
     */
    orderBy?: LimitsOrderByWithRelationInput | LimitsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Limits.
     */
    cursor?: LimitsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Limits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Limits.
     */
    skip?: number
    distinct?: LimitsScalarFieldEnum | LimitsScalarFieldEnum[]
  }

  /**
   * Limits create
   */
  export type LimitsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Limits
     */
    select?: LimitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Limits
     */
    omit?: LimitsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LimitsInclude<ExtArgs> | null
    /**
     * The data needed to create a Limits.
     */
    data: XOR<LimitsCreateInput, LimitsUncheckedCreateInput>
  }

  /**
   * Limits createMany
   */
  export type LimitsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Limits.
     */
    data: LimitsCreateManyInput | LimitsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Limits createManyAndReturn
   */
  export type LimitsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Limits
     */
    select?: LimitsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Limits
     */
    omit?: LimitsOmit<ExtArgs> | null
    /**
     * The data used to create many Limits.
     */
    data: LimitsCreateManyInput | LimitsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LimitsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Limits update
   */
  export type LimitsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Limits
     */
    select?: LimitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Limits
     */
    omit?: LimitsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LimitsInclude<ExtArgs> | null
    /**
     * The data needed to update a Limits.
     */
    data: XOR<LimitsUpdateInput, LimitsUncheckedUpdateInput>
    /**
     * Choose, which Limits to update.
     */
    where: LimitsWhereUniqueInput
  }

  /**
   * Limits updateMany
   */
  export type LimitsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Limits.
     */
    data: XOR<LimitsUpdateManyMutationInput, LimitsUncheckedUpdateManyInput>
    /**
     * Filter which Limits to update
     */
    where?: LimitsWhereInput
    /**
     * Limit how many Limits to update.
     */
    limit?: number
  }

  /**
   * Limits updateManyAndReturn
   */
  export type LimitsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Limits
     */
    select?: LimitsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Limits
     */
    omit?: LimitsOmit<ExtArgs> | null
    /**
     * The data used to update Limits.
     */
    data: XOR<LimitsUpdateManyMutationInput, LimitsUncheckedUpdateManyInput>
    /**
     * Filter which Limits to update
     */
    where?: LimitsWhereInput
    /**
     * Limit how many Limits to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LimitsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Limits upsert
   */
  export type LimitsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Limits
     */
    select?: LimitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Limits
     */
    omit?: LimitsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LimitsInclude<ExtArgs> | null
    /**
     * The filter to search for the Limits to update in case it exists.
     */
    where: LimitsWhereUniqueInput
    /**
     * In case the Limits found by the `where` argument doesn't exist, create a new Limits with this data.
     */
    create: XOR<LimitsCreateInput, LimitsUncheckedCreateInput>
    /**
     * In case the Limits was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LimitsUpdateInput, LimitsUncheckedUpdateInput>
  }

  /**
   * Limits delete
   */
  export type LimitsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Limits
     */
    select?: LimitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Limits
     */
    omit?: LimitsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LimitsInclude<ExtArgs> | null
    /**
     * Filter which Limits to delete.
     */
    where: LimitsWhereUniqueInput
  }

  /**
   * Limits deleteMany
   */
  export type LimitsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Limits to delete
     */
    where?: LimitsWhereInput
    /**
     * Limit how many Limits to delete.
     */
    limit?: number
  }

  /**
   * Limits without action
   */
  export type LimitsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Limits
     */
    select?: LimitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Limits
     */
    omit?: LimitsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LimitsInclude<ExtArgs> | null
  }


  /**
   * Model Servers
   */

  export type AggregateServers = {
    _count: ServersCountAggregateOutputType | null
    _min: ServersMinAggregateOutputType | null
    _max: ServersMaxAggregateOutputType | null
  }

  export type ServersMinAggregateOutputType = {
    id: string | null
    name: string | null
    ownerId: string | null
    icon: string | null
    isPremium: boolean | null
    premiumAddedBy: string | null
    aiEnabled: boolean | null
    welcomeChannel: string | null
    announcementChannel: string | null
    updatesChannel: string | null
    logsChannel: string | null
    logLevel: $Enums.LogLevel | null
    inviteLink: string | null
    inviteCode: string | null
    lastOpened: Date | null
    cleoPersonalityName: string | null
    cleoPersonalityId: string | null
  }

  export type ServersMaxAggregateOutputType = {
    id: string | null
    name: string | null
    ownerId: string | null
    icon: string | null
    isPremium: boolean | null
    premiumAddedBy: string | null
    aiEnabled: boolean | null
    welcomeChannel: string | null
    announcementChannel: string | null
    updatesChannel: string | null
    logsChannel: string | null
    logLevel: $Enums.LogLevel | null
    inviteLink: string | null
    inviteCode: string | null
    lastOpened: Date | null
    cleoPersonalityName: string | null
    cleoPersonalityId: string | null
  }

  export type ServersCountAggregateOutputType = {
    id: number
    name: number
    ownerId: number
    icon: number
    isPremium: number
    premiumAddedBy: number
    aiEnabled: number
    welcomeChannel: number
    announcementChannel: number
    updatesChannel: number
    logsChannel: number
    logLevel: number
    inviteLink: number
    inviteCode: number
    lastOpened: number
    cleoPersonalityName: number
    cleoPersonalityId: number
    _all: number
  }


  export type ServersMinAggregateInputType = {
    id?: true
    name?: true
    ownerId?: true
    icon?: true
    isPremium?: true
    premiumAddedBy?: true
    aiEnabled?: true
    welcomeChannel?: true
    announcementChannel?: true
    updatesChannel?: true
    logsChannel?: true
    logLevel?: true
    inviteLink?: true
    inviteCode?: true
    lastOpened?: true
    cleoPersonalityName?: true
    cleoPersonalityId?: true
  }

  export type ServersMaxAggregateInputType = {
    id?: true
    name?: true
    ownerId?: true
    icon?: true
    isPremium?: true
    premiumAddedBy?: true
    aiEnabled?: true
    welcomeChannel?: true
    announcementChannel?: true
    updatesChannel?: true
    logsChannel?: true
    logLevel?: true
    inviteLink?: true
    inviteCode?: true
    lastOpened?: true
    cleoPersonalityName?: true
    cleoPersonalityId?: true
  }

  export type ServersCountAggregateInputType = {
    id?: true
    name?: true
    ownerId?: true
    icon?: true
    isPremium?: true
    premiumAddedBy?: true
    aiEnabled?: true
    welcomeChannel?: true
    announcementChannel?: true
    updatesChannel?: true
    logsChannel?: true
    logLevel?: true
    inviteLink?: true
    inviteCode?: true
    lastOpened?: true
    cleoPersonalityName?: true
    cleoPersonalityId?: true
    _all?: true
  }

  export type ServersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Servers to aggregate.
     */
    where?: ServersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servers to fetch.
     */
    orderBy?: ServersOrderByWithRelationInput | ServersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Servers
    **/
    _count?: true | ServersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServersMaxAggregateInputType
  }

  export type GetServersAggregateType<T extends ServersAggregateArgs> = {
        [P in keyof T & keyof AggregateServers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServers[P]>
      : GetScalarType<T[P], AggregateServers[P]>
  }




  export type ServersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServersWhereInput
    orderBy?: ServersOrderByWithAggregationInput | ServersOrderByWithAggregationInput[]
    by: ServersScalarFieldEnum[] | ServersScalarFieldEnum
    having?: ServersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServersCountAggregateInputType | true
    _min?: ServersMinAggregateInputType
    _max?: ServersMaxAggregateInputType
  }

  export type ServersGroupByOutputType = {
    id: string
    name: string
    ownerId: string
    icon: string | null
    isPremium: boolean
    premiumAddedBy: string | null
    aiEnabled: boolean
    welcomeChannel: string | null
    announcementChannel: string | null
    updatesChannel: string | null
    logsChannel: string | null
    logLevel: $Enums.LogLevel
    inviteLink: string | null
    inviteCode: string | null
    lastOpened: Date | null
    cleoPersonalityName: string | null
    cleoPersonalityId: string | null
    _count: ServersCountAggregateOutputType | null
    _min: ServersMinAggregateOutputType | null
    _max: ServersMaxAggregateOutputType | null
  }

  type GetServersGroupByPayload<T extends ServersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServersGroupByOutputType[P]>
            : GetScalarType<T[P], ServersGroupByOutputType[P]>
        }
      >
    >


  export type ServersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    ownerId?: boolean
    icon?: boolean
    isPremium?: boolean
    premiumAddedBy?: boolean
    aiEnabled?: boolean
    welcomeChannel?: boolean
    announcementChannel?: boolean
    updatesChannel?: boolean
    logsChannel?: boolean
    logLevel?: boolean
    inviteLink?: boolean
    inviteCode?: boolean
    lastOpened?: boolean
    cleoPersonalityName?: boolean
    cleoPersonalityId?: boolean
    premiumUser?: boolean | Servers$premiumUserArgs<ExtArgs>
    AutomodConfig?: boolean | Servers$AutomodConfigArgs<ExtArgs>
    ServerSubscriptions?: boolean | Servers$ServerSubscriptionsArgs<ExtArgs>
    _count?: boolean | ServersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["servers"]>

  export type ServersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    ownerId?: boolean
    icon?: boolean
    isPremium?: boolean
    premiumAddedBy?: boolean
    aiEnabled?: boolean
    welcomeChannel?: boolean
    announcementChannel?: boolean
    updatesChannel?: boolean
    logsChannel?: boolean
    logLevel?: boolean
    inviteLink?: boolean
    inviteCode?: boolean
    lastOpened?: boolean
    cleoPersonalityName?: boolean
    cleoPersonalityId?: boolean
    premiumUser?: boolean | Servers$premiumUserArgs<ExtArgs>
  }, ExtArgs["result"]["servers"]>

  export type ServersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    ownerId?: boolean
    icon?: boolean
    isPremium?: boolean
    premiumAddedBy?: boolean
    aiEnabled?: boolean
    welcomeChannel?: boolean
    announcementChannel?: boolean
    updatesChannel?: boolean
    logsChannel?: boolean
    logLevel?: boolean
    inviteLink?: boolean
    inviteCode?: boolean
    lastOpened?: boolean
    cleoPersonalityName?: boolean
    cleoPersonalityId?: boolean
    premiumUser?: boolean | Servers$premiumUserArgs<ExtArgs>
  }, ExtArgs["result"]["servers"]>

  export type ServersSelectScalar = {
    id?: boolean
    name?: boolean
    ownerId?: boolean
    icon?: boolean
    isPremium?: boolean
    premiumAddedBy?: boolean
    aiEnabled?: boolean
    welcomeChannel?: boolean
    announcementChannel?: boolean
    updatesChannel?: boolean
    logsChannel?: boolean
    logLevel?: boolean
    inviteLink?: boolean
    inviteCode?: boolean
    lastOpened?: boolean
    cleoPersonalityName?: boolean
    cleoPersonalityId?: boolean
  }

  export type ServersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "ownerId" | "icon" | "isPremium" | "premiumAddedBy" | "aiEnabled" | "welcomeChannel" | "announcementChannel" | "updatesChannel" | "logsChannel" | "logLevel" | "inviteLink" | "inviteCode" | "lastOpened" | "cleoPersonalityName" | "cleoPersonalityId", ExtArgs["result"]["servers"]>
  export type ServersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    premiumUser?: boolean | Servers$premiumUserArgs<ExtArgs>
    AutomodConfig?: boolean | Servers$AutomodConfigArgs<ExtArgs>
    ServerSubscriptions?: boolean | Servers$ServerSubscriptionsArgs<ExtArgs>
    _count?: boolean | ServersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ServersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    premiumUser?: boolean | Servers$premiumUserArgs<ExtArgs>
  }
  export type ServersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    premiumUser?: boolean | Servers$premiumUserArgs<ExtArgs>
  }

  export type $ServersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Servers"
    objects: {
      premiumUser: Prisma.$UsersPayload<ExtArgs> | null
      AutomodConfig: Prisma.$AutomodConfigPayload<ExtArgs>[]
      ServerSubscriptions: Prisma.$ServerSubscriptionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      ownerId: string
      icon: string | null
      isPremium: boolean
      premiumAddedBy: string | null
      aiEnabled: boolean
      welcomeChannel: string | null
      announcementChannel: string | null
      updatesChannel: string | null
      logsChannel: string | null
      logLevel: $Enums.LogLevel
      inviteLink: string | null
      inviteCode: string | null
      lastOpened: Date | null
      cleoPersonalityName: string | null
      cleoPersonalityId: string | null
    }, ExtArgs["result"]["servers"]>
    composites: {}
  }

  type ServersGetPayload<S extends boolean | null | undefined | ServersDefaultArgs> = $Result.GetResult<Prisma.$ServersPayload, S>

  type ServersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServersCountAggregateInputType | true
    }

  export interface ServersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Servers'], meta: { name: 'Servers' } }
    /**
     * Find zero or one Servers that matches the filter.
     * @param {ServersFindUniqueArgs} args - Arguments to find a Servers
     * @example
     * // Get one Servers
     * const servers = await prisma.servers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServersFindUniqueArgs>(args: SelectSubset<T, ServersFindUniqueArgs<ExtArgs>>): Prisma__ServersClient<$Result.GetResult<Prisma.$ServersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Servers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServersFindUniqueOrThrowArgs} args - Arguments to find a Servers
     * @example
     * // Get one Servers
     * const servers = await prisma.servers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServersFindUniqueOrThrowArgs>(args: SelectSubset<T, ServersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServersClient<$Result.GetResult<Prisma.$ServersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Servers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServersFindFirstArgs} args - Arguments to find a Servers
     * @example
     * // Get one Servers
     * const servers = await prisma.servers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServersFindFirstArgs>(args?: SelectSubset<T, ServersFindFirstArgs<ExtArgs>>): Prisma__ServersClient<$Result.GetResult<Prisma.$ServersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Servers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServersFindFirstOrThrowArgs} args - Arguments to find a Servers
     * @example
     * // Get one Servers
     * const servers = await prisma.servers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServersFindFirstOrThrowArgs>(args?: SelectSubset<T, ServersFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServersClient<$Result.GetResult<Prisma.$ServersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Servers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Servers
     * const servers = await prisma.servers.findMany()
     * 
     * // Get first 10 Servers
     * const servers = await prisma.servers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serversWithIdOnly = await prisma.servers.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServersFindManyArgs>(args?: SelectSubset<T, ServersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Servers.
     * @param {ServersCreateArgs} args - Arguments to create a Servers.
     * @example
     * // Create one Servers
     * const Servers = await prisma.servers.create({
     *   data: {
     *     // ... data to create a Servers
     *   }
     * })
     * 
     */
    create<T extends ServersCreateArgs>(args: SelectSubset<T, ServersCreateArgs<ExtArgs>>): Prisma__ServersClient<$Result.GetResult<Prisma.$ServersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Servers.
     * @param {ServersCreateManyArgs} args - Arguments to create many Servers.
     * @example
     * // Create many Servers
     * const servers = await prisma.servers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServersCreateManyArgs>(args?: SelectSubset<T, ServersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Servers and returns the data saved in the database.
     * @param {ServersCreateManyAndReturnArgs} args - Arguments to create many Servers.
     * @example
     * // Create many Servers
     * const servers = await prisma.servers.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Servers and only return the `id`
     * const serversWithIdOnly = await prisma.servers.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServersCreateManyAndReturnArgs>(args?: SelectSubset<T, ServersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Servers.
     * @param {ServersDeleteArgs} args - Arguments to delete one Servers.
     * @example
     * // Delete one Servers
     * const Servers = await prisma.servers.delete({
     *   where: {
     *     // ... filter to delete one Servers
     *   }
     * })
     * 
     */
    delete<T extends ServersDeleteArgs>(args: SelectSubset<T, ServersDeleteArgs<ExtArgs>>): Prisma__ServersClient<$Result.GetResult<Prisma.$ServersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Servers.
     * @param {ServersUpdateArgs} args - Arguments to update one Servers.
     * @example
     * // Update one Servers
     * const servers = await prisma.servers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServersUpdateArgs>(args: SelectSubset<T, ServersUpdateArgs<ExtArgs>>): Prisma__ServersClient<$Result.GetResult<Prisma.$ServersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Servers.
     * @param {ServersDeleteManyArgs} args - Arguments to filter Servers to delete.
     * @example
     * // Delete a few Servers
     * const { count } = await prisma.servers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServersDeleteManyArgs>(args?: SelectSubset<T, ServersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Servers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Servers
     * const servers = await prisma.servers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServersUpdateManyArgs>(args: SelectSubset<T, ServersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Servers and returns the data updated in the database.
     * @param {ServersUpdateManyAndReturnArgs} args - Arguments to update many Servers.
     * @example
     * // Update many Servers
     * const servers = await prisma.servers.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Servers and only return the `id`
     * const serversWithIdOnly = await prisma.servers.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ServersUpdateManyAndReturnArgs>(args: SelectSubset<T, ServersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Servers.
     * @param {ServersUpsertArgs} args - Arguments to update or create a Servers.
     * @example
     * // Update or create a Servers
     * const servers = await prisma.servers.upsert({
     *   create: {
     *     // ... data to create a Servers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Servers we want to update
     *   }
     * })
     */
    upsert<T extends ServersUpsertArgs>(args: SelectSubset<T, ServersUpsertArgs<ExtArgs>>): Prisma__ServersClient<$Result.GetResult<Prisma.$ServersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Servers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServersCountArgs} args - Arguments to filter Servers to count.
     * @example
     * // Count the number of Servers
     * const count = await prisma.servers.count({
     *   where: {
     *     // ... the filter for the Servers we want to count
     *   }
     * })
    **/
    count<T extends ServersCountArgs>(
      args?: Subset<T, ServersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Servers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServersAggregateArgs>(args: Subset<T, ServersAggregateArgs>): Prisma.PrismaPromise<GetServersAggregateType<T>>

    /**
     * Group by Servers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ServersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServersGroupByArgs['orderBy'] }
        : { orderBy?: ServersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ServersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Servers model
   */
  readonly fields: ServersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Servers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    premiumUser<T extends Servers$premiumUserArgs<ExtArgs> = {}>(args?: Subset<T, Servers$premiumUserArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    AutomodConfig<T extends Servers$AutomodConfigArgs<ExtArgs> = {}>(args?: Subset<T, Servers$AutomodConfigArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AutomodConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ServerSubscriptions<T extends Servers$ServerSubscriptionsArgs<ExtArgs> = {}>(args?: Subset<T, Servers$ServerSubscriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServerSubscriptionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Servers model
   */
  interface ServersFieldRefs {
    readonly id: FieldRef<"Servers", 'String'>
    readonly name: FieldRef<"Servers", 'String'>
    readonly ownerId: FieldRef<"Servers", 'String'>
    readonly icon: FieldRef<"Servers", 'String'>
    readonly isPremium: FieldRef<"Servers", 'Boolean'>
    readonly premiumAddedBy: FieldRef<"Servers", 'String'>
    readonly aiEnabled: FieldRef<"Servers", 'Boolean'>
    readonly welcomeChannel: FieldRef<"Servers", 'String'>
    readonly announcementChannel: FieldRef<"Servers", 'String'>
    readonly updatesChannel: FieldRef<"Servers", 'String'>
    readonly logsChannel: FieldRef<"Servers", 'String'>
    readonly logLevel: FieldRef<"Servers", 'LogLevel'>
    readonly inviteLink: FieldRef<"Servers", 'String'>
    readonly inviteCode: FieldRef<"Servers", 'String'>
    readonly lastOpened: FieldRef<"Servers", 'DateTime'>
    readonly cleoPersonalityName: FieldRef<"Servers", 'String'>
    readonly cleoPersonalityId: FieldRef<"Servers", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Servers findUnique
   */
  export type ServersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servers
     */
    select?: ServersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servers
     */
    omit?: ServersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServersInclude<ExtArgs> | null
    /**
     * Filter, which Servers to fetch.
     */
    where: ServersWhereUniqueInput
  }

  /**
   * Servers findUniqueOrThrow
   */
  export type ServersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servers
     */
    select?: ServersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servers
     */
    omit?: ServersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServersInclude<ExtArgs> | null
    /**
     * Filter, which Servers to fetch.
     */
    where: ServersWhereUniqueInput
  }

  /**
   * Servers findFirst
   */
  export type ServersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servers
     */
    select?: ServersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servers
     */
    omit?: ServersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServersInclude<ExtArgs> | null
    /**
     * Filter, which Servers to fetch.
     */
    where?: ServersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servers to fetch.
     */
    orderBy?: ServersOrderByWithRelationInput | ServersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Servers.
     */
    cursor?: ServersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Servers.
     */
    distinct?: ServersScalarFieldEnum | ServersScalarFieldEnum[]
  }

  /**
   * Servers findFirstOrThrow
   */
  export type ServersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servers
     */
    select?: ServersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servers
     */
    omit?: ServersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServersInclude<ExtArgs> | null
    /**
     * Filter, which Servers to fetch.
     */
    where?: ServersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servers to fetch.
     */
    orderBy?: ServersOrderByWithRelationInput | ServersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Servers.
     */
    cursor?: ServersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Servers.
     */
    distinct?: ServersScalarFieldEnum | ServersScalarFieldEnum[]
  }

  /**
   * Servers findMany
   */
  export type ServersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servers
     */
    select?: ServersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servers
     */
    omit?: ServersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServersInclude<ExtArgs> | null
    /**
     * Filter, which Servers to fetch.
     */
    where?: ServersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servers to fetch.
     */
    orderBy?: ServersOrderByWithRelationInput | ServersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Servers.
     */
    cursor?: ServersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servers.
     */
    skip?: number
    distinct?: ServersScalarFieldEnum | ServersScalarFieldEnum[]
  }

  /**
   * Servers create
   */
  export type ServersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servers
     */
    select?: ServersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servers
     */
    omit?: ServersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServersInclude<ExtArgs> | null
    /**
     * The data needed to create a Servers.
     */
    data: XOR<ServersCreateInput, ServersUncheckedCreateInput>
  }

  /**
   * Servers createMany
   */
  export type ServersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Servers.
     */
    data: ServersCreateManyInput | ServersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Servers createManyAndReturn
   */
  export type ServersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servers
     */
    select?: ServersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Servers
     */
    omit?: ServersOmit<ExtArgs> | null
    /**
     * The data used to create many Servers.
     */
    data: ServersCreateManyInput | ServersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Servers update
   */
  export type ServersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servers
     */
    select?: ServersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servers
     */
    omit?: ServersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServersInclude<ExtArgs> | null
    /**
     * The data needed to update a Servers.
     */
    data: XOR<ServersUpdateInput, ServersUncheckedUpdateInput>
    /**
     * Choose, which Servers to update.
     */
    where: ServersWhereUniqueInput
  }

  /**
   * Servers updateMany
   */
  export type ServersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Servers.
     */
    data: XOR<ServersUpdateManyMutationInput, ServersUncheckedUpdateManyInput>
    /**
     * Filter which Servers to update
     */
    where?: ServersWhereInput
    /**
     * Limit how many Servers to update.
     */
    limit?: number
  }

  /**
   * Servers updateManyAndReturn
   */
  export type ServersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servers
     */
    select?: ServersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Servers
     */
    omit?: ServersOmit<ExtArgs> | null
    /**
     * The data used to update Servers.
     */
    data: XOR<ServersUpdateManyMutationInput, ServersUncheckedUpdateManyInput>
    /**
     * Filter which Servers to update
     */
    where?: ServersWhereInput
    /**
     * Limit how many Servers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Servers upsert
   */
  export type ServersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servers
     */
    select?: ServersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servers
     */
    omit?: ServersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServersInclude<ExtArgs> | null
    /**
     * The filter to search for the Servers to update in case it exists.
     */
    where: ServersWhereUniqueInput
    /**
     * In case the Servers found by the `where` argument doesn't exist, create a new Servers with this data.
     */
    create: XOR<ServersCreateInput, ServersUncheckedCreateInput>
    /**
     * In case the Servers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServersUpdateInput, ServersUncheckedUpdateInput>
  }

  /**
   * Servers delete
   */
  export type ServersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servers
     */
    select?: ServersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servers
     */
    omit?: ServersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServersInclude<ExtArgs> | null
    /**
     * Filter which Servers to delete.
     */
    where: ServersWhereUniqueInput
  }

  /**
   * Servers deleteMany
   */
  export type ServersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Servers to delete
     */
    where?: ServersWhereInput
    /**
     * Limit how many Servers to delete.
     */
    limit?: number
  }

  /**
   * Servers.premiumUser
   */
  export type Servers$premiumUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    where?: UsersWhereInput
  }

  /**
   * Servers.AutomodConfig
   */
  export type Servers$AutomodConfigArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutomodConfig
     */
    select?: AutomodConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutomodConfig
     */
    omit?: AutomodConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomodConfigInclude<ExtArgs> | null
    where?: AutomodConfigWhereInput
    orderBy?: AutomodConfigOrderByWithRelationInput | AutomodConfigOrderByWithRelationInput[]
    cursor?: AutomodConfigWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AutomodConfigScalarFieldEnum | AutomodConfigScalarFieldEnum[]
  }

  /**
   * Servers.ServerSubscriptions
   */
  export type Servers$ServerSubscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServerSubscriptions
     */
    select?: ServerSubscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServerSubscriptions
     */
    omit?: ServerSubscriptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServerSubscriptionsInclude<ExtArgs> | null
    where?: ServerSubscriptionsWhereInput
    orderBy?: ServerSubscriptionsOrderByWithRelationInput | ServerSubscriptionsOrderByWithRelationInput[]
    cursor?: ServerSubscriptionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServerSubscriptionsScalarFieldEnum | ServerSubscriptionsScalarFieldEnum[]
  }

  /**
   * Servers without action
   */
  export type ServersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servers
     */
    select?: ServersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servers
     */
    omit?: ServersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServersInclude<ExtArgs> | null
  }


  /**
   * Model PremiumSubscriptions
   */

  export type AggregatePremiumSubscriptions = {
    _count: PremiumSubscriptionsCountAggregateOutputType | null
    _min: PremiumSubscriptionsMinAggregateOutputType | null
    _max: PremiumSubscriptionsMaxAggregateOutputType | null
  }

  export type PremiumSubscriptionsMinAggregateOutputType = {
    id: string | null
    tier: $Enums.Plans | null
    startDate: Date | null
    endDate: Date | null
    source: $Enums.Sources | null
  }

  export type PremiumSubscriptionsMaxAggregateOutputType = {
    id: string | null
    tier: $Enums.Plans | null
    startDate: Date | null
    endDate: Date | null
    source: $Enums.Sources | null
  }

  export type PremiumSubscriptionsCountAggregateOutputType = {
    id: number
    tier: number
    startDate: number
    endDate: number
    source: number
    _all: number
  }


  export type PremiumSubscriptionsMinAggregateInputType = {
    id?: true
    tier?: true
    startDate?: true
    endDate?: true
    source?: true
  }

  export type PremiumSubscriptionsMaxAggregateInputType = {
    id?: true
    tier?: true
    startDate?: true
    endDate?: true
    source?: true
  }

  export type PremiumSubscriptionsCountAggregateInputType = {
    id?: true
    tier?: true
    startDate?: true
    endDate?: true
    source?: true
    _all?: true
  }

  export type PremiumSubscriptionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PremiumSubscriptions to aggregate.
     */
    where?: PremiumSubscriptionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PremiumSubscriptions to fetch.
     */
    orderBy?: PremiumSubscriptionsOrderByWithRelationInput | PremiumSubscriptionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PremiumSubscriptionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PremiumSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PremiumSubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PremiumSubscriptions
    **/
    _count?: true | PremiumSubscriptionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PremiumSubscriptionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PremiumSubscriptionsMaxAggregateInputType
  }

  export type GetPremiumSubscriptionsAggregateType<T extends PremiumSubscriptionsAggregateArgs> = {
        [P in keyof T & keyof AggregatePremiumSubscriptions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePremiumSubscriptions[P]>
      : GetScalarType<T[P], AggregatePremiumSubscriptions[P]>
  }




  export type PremiumSubscriptionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PremiumSubscriptionsWhereInput
    orderBy?: PremiumSubscriptionsOrderByWithAggregationInput | PremiumSubscriptionsOrderByWithAggregationInput[]
    by: PremiumSubscriptionsScalarFieldEnum[] | PremiumSubscriptionsScalarFieldEnum
    having?: PremiumSubscriptionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PremiumSubscriptionsCountAggregateInputType | true
    _min?: PremiumSubscriptionsMinAggregateInputType
    _max?: PremiumSubscriptionsMaxAggregateInputType
  }

  export type PremiumSubscriptionsGroupByOutputType = {
    id: string
    tier: $Enums.Plans
    startDate: Date
    endDate: Date
    source: $Enums.Sources
    _count: PremiumSubscriptionsCountAggregateOutputType | null
    _min: PremiumSubscriptionsMinAggregateOutputType | null
    _max: PremiumSubscriptionsMaxAggregateOutputType | null
  }

  type GetPremiumSubscriptionsGroupByPayload<T extends PremiumSubscriptionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PremiumSubscriptionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PremiumSubscriptionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PremiumSubscriptionsGroupByOutputType[P]>
            : GetScalarType<T[P], PremiumSubscriptionsGroupByOutputType[P]>
        }
      >
    >


  export type PremiumSubscriptionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tier?: boolean
    startDate?: boolean
    endDate?: boolean
    source?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["premiumSubscriptions"]>

  export type PremiumSubscriptionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tier?: boolean
    startDate?: boolean
    endDate?: boolean
    source?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["premiumSubscriptions"]>

  export type PremiumSubscriptionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tier?: boolean
    startDate?: boolean
    endDate?: boolean
    source?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["premiumSubscriptions"]>

  export type PremiumSubscriptionsSelectScalar = {
    id?: boolean
    tier?: boolean
    startDate?: boolean
    endDate?: boolean
    source?: boolean
  }

  export type PremiumSubscriptionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tier" | "startDate" | "endDate" | "source", ExtArgs["result"]["premiumSubscriptions"]>
  export type PremiumSubscriptionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type PremiumSubscriptionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type PremiumSubscriptionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $PremiumSubscriptionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PremiumSubscriptions"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tier: $Enums.Plans
      startDate: Date
      endDate: Date
      source: $Enums.Sources
    }, ExtArgs["result"]["premiumSubscriptions"]>
    composites: {}
  }

  type PremiumSubscriptionsGetPayload<S extends boolean | null | undefined | PremiumSubscriptionsDefaultArgs> = $Result.GetResult<Prisma.$PremiumSubscriptionsPayload, S>

  type PremiumSubscriptionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PremiumSubscriptionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PremiumSubscriptionsCountAggregateInputType | true
    }

  export interface PremiumSubscriptionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PremiumSubscriptions'], meta: { name: 'PremiumSubscriptions' } }
    /**
     * Find zero or one PremiumSubscriptions that matches the filter.
     * @param {PremiumSubscriptionsFindUniqueArgs} args - Arguments to find a PremiumSubscriptions
     * @example
     * // Get one PremiumSubscriptions
     * const premiumSubscriptions = await prisma.premiumSubscriptions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PremiumSubscriptionsFindUniqueArgs>(args: SelectSubset<T, PremiumSubscriptionsFindUniqueArgs<ExtArgs>>): Prisma__PremiumSubscriptionsClient<$Result.GetResult<Prisma.$PremiumSubscriptionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PremiumSubscriptions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PremiumSubscriptionsFindUniqueOrThrowArgs} args - Arguments to find a PremiumSubscriptions
     * @example
     * // Get one PremiumSubscriptions
     * const premiumSubscriptions = await prisma.premiumSubscriptions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PremiumSubscriptionsFindUniqueOrThrowArgs>(args: SelectSubset<T, PremiumSubscriptionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PremiumSubscriptionsClient<$Result.GetResult<Prisma.$PremiumSubscriptionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PremiumSubscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PremiumSubscriptionsFindFirstArgs} args - Arguments to find a PremiumSubscriptions
     * @example
     * // Get one PremiumSubscriptions
     * const premiumSubscriptions = await prisma.premiumSubscriptions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PremiumSubscriptionsFindFirstArgs>(args?: SelectSubset<T, PremiumSubscriptionsFindFirstArgs<ExtArgs>>): Prisma__PremiumSubscriptionsClient<$Result.GetResult<Prisma.$PremiumSubscriptionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PremiumSubscriptions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PremiumSubscriptionsFindFirstOrThrowArgs} args - Arguments to find a PremiumSubscriptions
     * @example
     * // Get one PremiumSubscriptions
     * const premiumSubscriptions = await prisma.premiumSubscriptions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PremiumSubscriptionsFindFirstOrThrowArgs>(args?: SelectSubset<T, PremiumSubscriptionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__PremiumSubscriptionsClient<$Result.GetResult<Prisma.$PremiumSubscriptionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PremiumSubscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PremiumSubscriptionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PremiumSubscriptions
     * const premiumSubscriptions = await prisma.premiumSubscriptions.findMany()
     * 
     * // Get first 10 PremiumSubscriptions
     * const premiumSubscriptions = await prisma.premiumSubscriptions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const premiumSubscriptionsWithIdOnly = await prisma.premiumSubscriptions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PremiumSubscriptionsFindManyArgs>(args?: SelectSubset<T, PremiumSubscriptionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PremiumSubscriptionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PremiumSubscriptions.
     * @param {PremiumSubscriptionsCreateArgs} args - Arguments to create a PremiumSubscriptions.
     * @example
     * // Create one PremiumSubscriptions
     * const PremiumSubscriptions = await prisma.premiumSubscriptions.create({
     *   data: {
     *     // ... data to create a PremiumSubscriptions
     *   }
     * })
     * 
     */
    create<T extends PremiumSubscriptionsCreateArgs>(args: SelectSubset<T, PremiumSubscriptionsCreateArgs<ExtArgs>>): Prisma__PremiumSubscriptionsClient<$Result.GetResult<Prisma.$PremiumSubscriptionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PremiumSubscriptions.
     * @param {PremiumSubscriptionsCreateManyArgs} args - Arguments to create many PremiumSubscriptions.
     * @example
     * // Create many PremiumSubscriptions
     * const premiumSubscriptions = await prisma.premiumSubscriptions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PremiumSubscriptionsCreateManyArgs>(args?: SelectSubset<T, PremiumSubscriptionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PremiumSubscriptions and returns the data saved in the database.
     * @param {PremiumSubscriptionsCreateManyAndReturnArgs} args - Arguments to create many PremiumSubscriptions.
     * @example
     * // Create many PremiumSubscriptions
     * const premiumSubscriptions = await prisma.premiumSubscriptions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PremiumSubscriptions and only return the `id`
     * const premiumSubscriptionsWithIdOnly = await prisma.premiumSubscriptions.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PremiumSubscriptionsCreateManyAndReturnArgs>(args?: SelectSubset<T, PremiumSubscriptionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PremiumSubscriptionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PremiumSubscriptions.
     * @param {PremiumSubscriptionsDeleteArgs} args - Arguments to delete one PremiumSubscriptions.
     * @example
     * // Delete one PremiumSubscriptions
     * const PremiumSubscriptions = await prisma.premiumSubscriptions.delete({
     *   where: {
     *     // ... filter to delete one PremiumSubscriptions
     *   }
     * })
     * 
     */
    delete<T extends PremiumSubscriptionsDeleteArgs>(args: SelectSubset<T, PremiumSubscriptionsDeleteArgs<ExtArgs>>): Prisma__PremiumSubscriptionsClient<$Result.GetResult<Prisma.$PremiumSubscriptionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PremiumSubscriptions.
     * @param {PremiumSubscriptionsUpdateArgs} args - Arguments to update one PremiumSubscriptions.
     * @example
     * // Update one PremiumSubscriptions
     * const premiumSubscriptions = await prisma.premiumSubscriptions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PremiumSubscriptionsUpdateArgs>(args: SelectSubset<T, PremiumSubscriptionsUpdateArgs<ExtArgs>>): Prisma__PremiumSubscriptionsClient<$Result.GetResult<Prisma.$PremiumSubscriptionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PremiumSubscriptions.
     * @param {PremiumSubscriptionsDeleteManyArgs} args - Arguments to filter PremiumSubscriptions to delete.
     * @example
     * // Delete a few PremiumSubscriptions
     * const { count } = await prisma.premiumSubscriptions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PremiumSubscriptionsDeleteManyArgs>(args?: SelectSubset<T, PremiumSubscriptionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PremiumSubscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PremiumSubscriptionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PremiumSubscriptions
     * const premiumSubscriptions = await prisma.premiumSubscriptions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PremiumSubscriptionsUpdateManyArgs>(args: SelectSubset<T, PremiumSubscriptionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PremiumSubscriptions and returns the data updated in the database.
     * @param {PremiumSubscriptionsUpdateManyAndReturnArgs} args - Arguments to update many PremiumSubscriptions.
     * @example
     * // Update many PremiumSubscriptions
     * const premiumSubscriptions = await prisma.premiumSubscriptions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PremiumSubscriptions and only return the `id`
     * const premiumSubscriptionsWithIdOnly = await prisma.premiumSubscriptions.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PremiumSubscriptionsUpdateManyAndReturnArgs>(args: SelectSubset<T, PremiumSubscriptionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PremiumSubscriptionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PremiumSubscriptions.
     * @param {PremiumSubscriptionsUpsertArgs} args - Arguments to update or create a PremiumSubscriptions.
     * @example
     * // Update or create a PremiumSubscriptions
     * const premiumSubscriptions = await prisma.premiumSubscriptions.upsert({
     *   create: {
     *     // ... data to create a PremiumSubscriptions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PremiumSubscriptions we want to update
     *   }
     * })
     */
    upsert<T extends PremiumSubscriptionsUpsertArgs>(args: SelectSubset<T, PremiumSubscriptionsUpsertArgs<ExtArgs>>): Prisma__PremiumSubscriptionsClient<$Result.GetResult<Prisma.$PremiumSubscriptionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PremiumSubscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PremiumSubscriptionsCountArgs} args - Arguments to filter PremiumSubscriptions to count.
     * @example
     * // Count the number of PremiumSubscriptions
     * const count = await prisma.premiumSubscriptions.count({
     *   where: {
     *     // ... the filter for the PremiumSubscriptions we want to count
     *   }
     * })
    **/
    count<T extends PremiumSubscriptionsCountArgs>(
      args?: Subset<T, PremiumSubscriptionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PremiumSubscriptionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PremiumSubscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PremiumSubscriptionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PremiumSubscriptionsAggregateArgs>(args: Subset<T, PremiumSubscriptionsAggregateArgs>): Prisma.PrismaPromise<GetPremiumSubscriptionsAggregateType<T>>

    /**
     * Group by PremiumSubscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PremiumSubscriptionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PremiumSubscriptionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PremiumSubscriptionsGroupByArgs['orderBy'] }
        : { orderBy?: PremiumSubscriptionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PremiumSubscriptionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPremiumSubscriptionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PremiumSubscriptions model
   */
  readonly fields: PremiumSubscriptionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PremiumSubscriptions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PremiumSubscriptionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PremiumSubscriptions model
   */
  interface PremiumSubscriptionsFieldRefs {
    readonly id: FieldRef<"PremiumSubscriptions", 'String'>
    readonly tier: FieldRef<"PremiumSubscriptions", 'Plans'>
    readonly startDate: FieldRef<"PremiumSubscriptions", 'DateTime'>
    readonly endDate: FieldRef<"PremiumSubscriptions", 'DateTime'>
    readonly source: FieldRef<"PremiumSubscriptions", 'Sources'>
  }
    

  // Custom InputTypes
  /**
   * PremiumSubscriptions findUnique
   */
  export type PremiumSubscriptionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PremiumSubscriptions
     */
    select?: PremiumSubscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PremiumSubscriptions
     */
    omit?: PremiumSubscriptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremiumSubscriptionsInclude<ExtArgs> | null
    /**
     * Filter, which PremiumSubscriptions to fetch.
     */
    where: PremiumSubscriptionsWhereUniqueInput
  }

  /**
   * PremiumSubscriptions findUniqueOrThrow
   */
  export type PremiumSubscriptionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PremiumSubscriptions
     */
    select?: PremiumSubscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PremiumSubscriptions
     */
    omit?: PremiumSubscriptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremiumSubscriptionsInclude<ExtArgs> | null
    /**
     * Filter, which PremiumSubscriptions to fetch.
     */
    where: PremiumSubscriptionsWhereUniqueInput
  }

  /**
   * PremiumSubscriptions findFirst
   */
  export type PremiumSubscriptionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PremiumSubscriptions
     */
    select?: PremiumSubscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PremiumSubscriptions
     */
    omit?: PremiumSubscriptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremiumSubscriptionsInclude<ExtArgs> | null
    /**
     * Filter, which PremiumSubscriptions to fetch.
     */
    where?: PremiumSubscriptionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PremiumSubscriptions to fetch.
     */
    orderBy?: PremiumSubscriptionsOrderByWithRelationInput | PremiumSubscriptionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PremiumSubscriptions.
     */
    cursor?: PremiumSubscriptionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PremiumSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PremiumSubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PremiumSubscriptions.
     */
    distinct?: PremiumSubscriptionsScalarFieldEnum | PremiumSubscriptionsScalarFieldEnum[]
  }

  /**
   * PremiumSubscriptions findFirstOrThrow
   */
  export type PremiumSubscriptionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PremiumSubscriptions
     */
    select?: PremiumSubscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PremiumSubscriptions
     */
    omit?: PremiumSubscriptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremiumSubscriptionsInclude<ExtArgs> | null
    /**
     * Filter, which PremiumSubscriptions to fetch.
     */
    where?: PremiumSubscriptionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PremiumSubscriptions to fetch.
     */
    orderBy?: PremiumSubscriptionsOrderByWithRelationInput | PremiumSubscriptionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PremiumSubscriptions.
     */
    cursor?: PremiumSubscriptionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PremiumSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PremiumSubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PremiumSubscriptions.
     */
    distinct?: PremiumSubscriptionsScalarFieldEnum | PremiumSubscriptionsScalarFieldEnum[]
  }

  /**
   * PremiumSubscriptions findMany
   */
  export type PremiumSubscriptionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PremiumSubscriptions
     */
    select?: PremiumSubscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PremiumSubscriptions
     */
    omit?: PremiumSubscriptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremiumSubscriptionsInclude<ExtArgs> | null
    /**
     * Filter, which PremiumSubscriptions to fetch.
     */
    where?: PremiumSubscriptionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PremiumSubscriptions to fetch.
     */
    orderBy?: PremiumSubscriptionsOrderByWithRelationInput | PremiumSubscriptionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PremiumSubscriptions.
     */
    cursor?: PremiumSubscriptionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PremiumSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PremiumSubscriptions.
     */
    skip?: number
    distinct?: PremiumSubscriptionsScalarFieldEnum | PremiumSubscriptionsScalarFieldEnum[]
  }

  /**
   * PremiumSubscriptions create
   */
  export type PremiumSubscriptionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PremiumSubscriptions
     */
    select?: PremiumSubscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PremiumSubscriptions
     */
    omit?: PremiumSubscriptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremiumSubscriptionsInclude<ExtArgs> | null
    /**
     * The data needed to create a PremiumSubscriptions.
     */
    data: XOR<PremiumSubscriptionsCreateInput, PremiumSubscriptionsUncheckedCreateInput>
  }

  /**
   * PremiumSubscriptions createMany
   */
  export type PremiumSubscriptionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PremiumSubscriptions.
     */
    data: PremiumSubscriptionsCreateManyInput | PremiumSubscriptionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PremiumSubscriptions createManyAndReturn
   */
  export type PremiumSubscriptionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PremiumSubscriptions
     */
    select?: PremiumSubscriptionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PremiumSubscriptions
     */
    omit?: PremiumSubscriptionsOmit<ExtArgs> | null
    /**
     * The data used to create many PremiumSubscriptions.
     */
    data: PremiumSubscriptionsCreateManyInput | PremiumSubscriptionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremiumSubscriptionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PremiumSubscriptions update
   */
  export type PremiumSubscriptionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PremiumSubscriptions
     */
    select?: PremiumSubscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PremiumSubscriptions
     */
    omit?: PremiumSubscriptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremiumSubscriptionsInclude<ExtArgs> | null
    /**
     * The data needed to update a PremiumSubscriptions.
     */
    data: XOR<PremiumSubscriptionsUpdateInput, PremiumSubscriptionsUncheckedUpdateInput>
    /**
     * Choose, which PremiumSubscriptions to update.
     */
    where: PremiumSubscriptionsWhereUniqueInput
  }

  /**
   * PremiumSubscriptions updateMany
   */
  export type PremiumSubscriptionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PremiumSubscriptions.
     */
    data: XOR<PremiumSubscriptionsUpdateManyMutationInput, PremiumSubscriptionsUncheckedUpdateManyInput>
    /**
     * Filter which PremiumSubscriptions to update
     */
    where?: PremiumSubscriptionsWhereInput
    /**
     * Limit how many PremiumSubscriptions to update.
     */
    limit?: number
  }

  /**
   * PremiumSubscriptions updateManyAndReturn
   */
  export type PremiumSubscriptionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PremiumSubscriptions
     */
    select?: PremiumSubscriptionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PremiumSubscriptions
     */
    omit?: PremiumSubscriptionsOmit<ExtArgs> | null
    /**
     * The data used to update PremiumSubscriptions.
     */
    data: XOR<PremiumSubscriptionsUpdateManyMutationInput, PremiumSubscriptionsUncheckedUpdateManyInput>
    /**
     * Filter which PremiumSubscriptions to update
     */
    where?: PremiumSubscriptionsWhereInput
    /**
     * Limit how many PremiumSubscriptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremiumSubscriptionsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PremiumSubscriptions upsert
   */
  export type PremiumSubscriptionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PremiumSubscriptions
     */
    select?: PremiumSubscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PremiumSubscriptions
     */
    omit?: PremiumSubscriptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremiumSubscriptionsInclude<ExtArgs> | null
    /**
     * The filter to search for the PremiumSubscriptions to update in case it exists.
     */
    where: PremiumSubscriptionsWhereUniqueInput
    /**
     * In case the PremiumSubscriptions found by the `where` argument doesn't exist, create a new PremiumSubscriptions with this data.
     */
    create: XOR<PremiumSubscriptionsCreateInput, PremiumSubscriptionsUncheckedCreateInput>
    /**
     * In case the PremiumSubscriptions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PremiumSubscriptionsUpdateInput, PremiumSubscriptionsUncheckedUpdateInput>
  }

  /**
   * PremiumSubscriptions delete
   */
  export type PremiumSubscriptionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PremiumSubscriptions
     */
    select?: PremiumSubscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PremiumSubscriptions
     */
    omit?: PremiumSubscriptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremiumSubscriptionsInclude<ExtArgs> | null
    /**
     * Filter which PremiumSubscriptions to delete.
     */
    where: PremiumSubscriptionsWhereUniqueInput
  }

  /**
   * PremiumSubscriptions deleteMany
   */
  export type PremiumSubscriptionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PremiumSubscriptions to delete
     */
    where?: PremiumSubscriptionsWhereInput
    /**
     * Limit how many PremiumSubscriptions to delete.
     */
    limit?: number
  }

  /**
   * PremiumSubscriptions without action
   */
  export type PremiumSubscriptionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PremiumSubscriptions
     */
    select?: PremiumSubscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PremiumSubscriptions
     */
    omit?: PremiumSubscriptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremiumSubscriptionsInclude<ExtArgs> | null
  }


  /**
   * Model ServerSubscriptions
   */

  export type AggregateServerSubscriptions = {
    _count: ServerSubscriptionsCountAggregateOutputType | null
    _min: ServerSubscriptionsMinAggregateOutputType | null
    _max: ServerSubscriptionsMaxAggregateOutputType | null
  }

  export type ServerSubscriptionsMinAggregateOutputType = {
    id: string | null
    startDate: Date | null
    endDate: Date | null
    source: $Enums.Sources | null
    subscriptionId: string | null
  }

  export type ServerSubscriptionsMaxAggregateOutputType = {
    id: string | null
    startDate: Date | null
    endDate: Date | null
    source: $Enums.Sources | null
    subscriptionId: string | null
  }

  export type ServerSubscriptionsCountAggregateOutputType = {
    id: number
    startDate: number
    endDate: number
    source: number
    subscriptionId: number
    _all: number
  }


  export type ServerSubscriptionsMinAggregateInputType = {
    id?: true
    startDate?: true
    endDate?: true
    source?: true
    subscriptionId?: true
  }

  export type ServerSubscriptionsMaxAggregateInputType = {
    id?: true
    startDate?: true
    endDate?: true
    source?: true
    subscriptionId?: true
  }

  export type ServerSubscriptionsCountAggregateInputType = {
    id?: true
    startDate?: true
    endDate?: true
    source?: true
    subscriptionId?: true
    _all?: true
  }

  export type ServerSubscriptionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServerSubscriptions to aggregate.
     */
    where?: ServerSubscriptionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServerSubscriptions to fetch.
     */
    orderBy?: ServerSubscriptionsOrderByWithRelationInput | ServerSubscriptionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServerSubscriptionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServerSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServerSubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ServerSubscriptions
    **/
    _count?: true | ServerSubscriptionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServerSubscriptionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServerSubscriptionsMaxAggregateInputType
  }

  export type GetServerSubscriptionsAggregateType<T extends ServerSubscriptionsAggregateArgs> = {
        [P in keyof T & keyof AggregateServerSubscriptions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServerSubscriptions[P]>
      : GetScalarType<T[P], AggregateServerSubscriptions[P]>
  }




  export type ServerSubscriptionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServerSubscriptionsWhereInput
    orderBy?: ServerSubscriptionsOrderByWithAggregationInput | ServerSubscriptionsOrderByWithAggregationInput[]
    by: ServerSubscriptionsScalarFieldEnum[] | ServerSubscriptionsScalarFieldEnum
    having?: ServerSubscriptionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServerSubscriptionsCountAggregateInputType | true
    _min?: ServerSubscriptionsMinAggregateInputType
    _max?: ServerSubscriptionsMaxAggregateInputType
  }

  export type ServerSubscriptionsGroupByOutputType = {
    id: string
    startDate: Date
    endDate: Date
    source: $Enums.Sources
    subscriptionId: string
    _count: ServerSubscriptionsCountAggregateOutputType | null
    _min: ServerSubscriptionsMinAggregateOutputType | null
    _max: ServerSubscriptionsMaxAggregateOutputType | null
  }

  type GetServerSubscriptionsGroupByPayload<T extends ServerSubscriptionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServerSubscriptionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServerSubscriptionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServerSubscriptionsGroupByOutputType[P]>
            : GetScalarType<T[P], ServerSubscriptionsGroupByOutputType[P]>
        }
      >
    >


  export type ServerSubscriptionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startDate?: boolean
    endDate?: boolean
    source?: boolean
    subscriptionId?: boolean
    server?: boolean | ServersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["serverSubscriptions"]>

  export type ServerSubscriptionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startDate?: boolean
    endDate?: boolean
    source?: boolean
    subscriptionId?: boolean
    server?: boolean | ServersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["serverSubscriptions"]>

  export type ServerSubscriptionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startDate?: boolean
    endDate?: boolean
    source?: boolean
    subscriptionId?: boolean
    server?: boolean | ServersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["serverSubscriptions"]>

  export type ServerSubscriptionsSelectScalar = {
    id?: boolean
    startDate?: boolean
    endDate?: boolean
    source?: boolean
    subscriptionId?: boolean
  }

  export type ServerSubscriptionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "startDate" | "endDate" | "source" | "subscriptionId", ExtArgs["result"]["serverSubscriptions"]>
  export type ServerSubscriptionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    server?: boolean | ServersDefaultArgs<ExtArgs>
  }
  export type ServerSubscriptionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    server?: boolean | ServersDefaultArgs<ExtArgs>
  }
  export type ServerSubscriptionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    server?: boolean | ServersDefaultArgs<ExtArgs>
  }

  export type $ServerSubscriptionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ServerSubscriptions"
    objects: {
      server: Prisma.$ServersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      startDate: Date
      endDate: Date
      source: $Enums.Sources
      subscriptionId: string
    }, ExtArgs["result"]["serverSubscriptions"]>
    composites: {}
  }

  type ServerSubscriptionsGetPayload<S extends boolean | null | undefined | ServerSubscriptionsDefaultArgs> = $Result.GetResult<Prisma.$ServerSubscriptionsPayload, S>

  type ServerSubscriptionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServerSubscriptionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServerSubscriptionsCountAggregateInputType | true
    }

  export interface ServerSubscriptionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ServerSubscriptions'], meta: { name: 'ServerSubscriptions' } }
    /**
     * Find zero or one ServerSubscriptions that matches the filter.
     * @param {ServerSubscriptionsFindUniqueArgs} args - Arguments to find a ServerSubscriptions
     * @example
     * // Get one ServerSubscriptions
     * const serverSubscriptions = await prisma.serverSubscriptions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServerSubscriptionsFindUniqueArgs>(args: SelectSubset<T, ServerSubscriptionsFindUniqueArgs<ExtArgs>>): Prisma__ServerSubscriptionsClient<$Result.GetResult<Prisma.$ServerSubscriptionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ServerSubscriptions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServerSubscriptionsFindUniqueOrThrowArgs} args - Arguments to find a ServerSubscriptions
     * @example
     * // Get one ServerSubscriptions
     * const serverSubscriptions = await prisma.serverSubscriptions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServerSubscriptionsFindUniqueOrThrowArgs>(args: SelectSubset<T, ServerSubscriptionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServerSubscriptionsClient<$Result.GetResult<Prisma.$ServerSubscriptionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServerSubscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServerSubscriptionsFindFirstArgs} args - Arguments to find a ServerSubscriptions
     * @example
     * // Get one ServerSubscriptions
     * const serverSubscriptions = await prisma.serverSubscriptions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServerSubscriptionsFindFirstArgs>(args?: SelectSubset<T, ServerSubscriptionsFindFirstArgs<ExtArgs>>): Prisma__ServerSubscriptionsClient<$Result.GetResult<Prisma.$ServerSubscriptionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServerSubscriptions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServerSubscriptionsFindFirstOrThrowArgs} args - Arguments to find a ServerSubscriptions
     * @example
     * // Get one ServerSubscriptions
     * const serverSubscriptions = await prisma.serverSubscriptions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServerSubscriptionsFindFirstOrThrowArgs>(args?: SelectSubset<T, ServerSubscriptionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServerSubscriptionsClient<$Result.GetResult<Prisma.$ServerSubscriptionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ServerSubscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServerSubscriptionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ServerSubscriptions
     * const serverSubscriptions = await prisma.serverSubscriptions.findMany()
     * 
     * // Get first 10 ServerSubscriptions
     * const serverSubscriptions = await prisma.serverSubscriptions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serverSubscriptionsWithIdOnly = await prisma.serverSubscriptions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServerSubscriptionsFindManyArgs>(args?: SelectSubset<T, ServerSubscriptionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServerSubscriptionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ServerSubscriptions.
     * @param {ServerSubscriptionsCreateArgs} args - Arguments to create a ServerSubscriptions.
     * @example
     * // Create one ServerSubscriptions
     * const ServerSubscriptions = await prisma.serverSubscriptions.create({
     *   data: {
     *     // ... data to create a ServerSubscriptions
     *   }
     * })
     * 
     */
    create<T extends ServerSubscriptionsCreateArgs>(args: SelectSubset<T, ServerSubscriptionsCreateArgs<ExtArgs>>): Prisma__ServerSubscriptionsClient<$Result.GetResult<Prisma.$ServerSubscriptionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ServerSubscriptions.
     * @param {ServerSubscriptionsCreateManyArgs} args - Arguments to create many ServerSubscriptions.
     * @example
     * // Create many ServerSubscriptions
     * const serverSubscriptions = await prisma.serverSubscriptions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServerSubscriptionsCreateManyArgs>(args?: SelectSubset<T, ServerSubscriptionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ServerSubscriptions and returns the data saved in the database.
     * @param {ServerSubscriptionsCreateManyAndReturnArgs} args - Arguments to create many ServerSubscriptions.
     * @example
     * // Create many ServerSubscriptions
     * const serverSubscriptions = await prisma.serverSubscriptions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ServerSubscriptions and only return the `id`
     * const serverSubscriptionsWithIdOnly = await prisma.serverSubscriptions.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServerSubscriptionsCreateManyAndReturnArgs>(args?: SelectSubset<T, ServerSubscriptionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServerSubscriptionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ServerSubscriptions.
     * @param {ServerSubscriptionsDeleteArgs} args - Arguments to delete one ServerSubscriptions.
     * @example
     * // Delete one ServerSubscriptions
     * const ServerSubscriptions = await prisma.serverSubscriptions.delete({
     *   where: {
     *     // ... filter to delete one ServerSubscriptions
     *   }
     * })
     * 
     */
    delete<T extends ServerSubscriptionsDeleteArgs>(args: SelectSubset<T, ServerSubscriptionsDeleteArgs<ExtArgs>>): Prisma__ServerSubscriptionsClient<$Result.GetResult<Prisma.$ServerSubscriptionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ServerSubscriptions.
     * @param {ServerSubscriptionsUpdateArgs} args - Arguments to update one ServerSubscriptions.
     * @example
     * // Update one ServerSubscriptions
     * const serverSubscriptions = await prisma.serverSubscriptions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServerSubscriptionsUpdateArgs>(args: SelectSubset<T, ServerSubscriptionsUpdateArgs<ExtArgs>>): Prisma__ServerSubscriptionsClient<$Result.GetResult<Prisma.$ServerSubscriptionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ServerSubscriptions.
     * @param {ServerSubscriptionsDeleteManyArgs} args - Arguments to filter ServerSubscriptions to delete.
     * @example
     * // Delete a few ServerSubscriptions
     * const { count } = await prisma.serverSubscriptions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServerSubscriptionsDeleteManyArgs>(args?: SelectSubset<T, ServerSubscriptionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServerSubscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServerSubscriptionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ServerSubscriptions
     * const serverSubscriptions = await prisma.serverSubscriptions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServerSubscriptionsUpdateManyArgs>(args: SelectSubset<T, ServerSubscriptionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServerSubscriptions and returns the data updated in the database.
     * @param {ServerSubscriptionsUpdateManyAndReturnArgs} args - Arguments to update many ServerSubscriptions.
     * @example
     * // Update many ServerSubscriptions
     * const serverSubscriptions = await prisma.serverSubscriptions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ServerSubscriptions and only return the `id`
     * const serverSubscriptionsWithIdOnly = await prisma.serverSubscriptions.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ServerSubscriptionsUpdateManyAndReturnArgs>(args: SelectSubset<T, ServerSubscriptionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServerSubscriptionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ServerSubscriptions.
     * @param {ServerSubscriptionsUpsertArgs} args - Arguments to update or create a ServerSubscriptions.
     * @example
     * // Update or create a ServerSubscriptions
     * const serverSubscriptions = await prisma.serverSubscriptions.upsert({
     *   create: {
     *     // ... data to create a ServerSubscriptions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ServerSubscriptions we want to update
     *   }
     * })
     */
    upsert<T extends ServerSubscriptionsUpsertArgs>(args: SelectSubset<T, ServerSubscriptionsUpsertArgs<ExtArgs>>): Prisma__ServerSubscriptionsClient<$Result.GetResult<Prisma.$ServerSubscriptionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ServerSubscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServerSubscriptionsCountArgs} args - Arguments to filter ServerSubscriptions to count.
     * @example
     * // Count the number of ServerSubscriptions
     * const count = await prisma.serverSubscriptions.count({
     *   where: {
     *     // ... the filter for the ServerSubscriptions we want to count
     *   }
     * })
    **/
    count<T extends ServerSubscriptionsCountArgs>(
      args?: Subset<T, ServerSubscriptionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServerSubscriptionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ServerSubscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServerSubscriptionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServerSubscriptionsAggregateArgs>(args: Subset<T, ServerSubscriptionsAggregateArgs>): Prisma.PrismaPromise<GetServerSubscriptionsAggregateType<T>>

    /**
     * Group by ServerSubscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServerSubscriptionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ServerSubscriptionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServerSubscriptionsGroupByArgs['orderBy'] }
        : { orderBy?: ServerSubscriptionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ServerSubscriptionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServerSubscriptionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ServerSubscriptions model
   */
  readonly fields: ServerSubscriptionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ServerSubscriptions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServerSubscriptionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    server<T extends ServersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServersDefaultArgs<ExtArgs>>): Prisma__ServersClient<$Result.GetResult<Prisma.$ServersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ServerSubscriptions model
   */
  interface ServerSubscriptionsFieldRefs {
    readonly id: FieldRef<"ServerSubscriptions", 'String'>
    readonly startDate: FieldRef<"ServerSubscriptions", 'DateTime'>
    readonly endDate: FieldRef<"ServerSubscriptions", 'DateTime'>
    readonly source: FieldRef<"ServerSubscriptions", 'Sources'>
    readonly subscriptionId: FieldRef<"ServerSubscriptions", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ServerSubscriptions findUnique
   */
  export type ServerSubscriptionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServerSubscriptions
     */
    select?: ServerSubscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServerSubscriptions
     */
    omit?: ServerSubscriptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServerSubscriptionsInclude<ExtArgs> | null
    /**
     * Filter, which ServerSubscriptions to fetch.
     */
    where: ServerSubscriptionsWhereUniqueInput
  }

  /**
   * ServerSubscriptions findUniqueOrThrow
   */
  export type ServerSubscriptionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServerSubscriptions
     */
    select?: ServerSubscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServerSubscriptions
     */
    omit?: ServerSubscriptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServerSubscriptionsInclude<ExtArgs> | null
    /**
     * Filter, which ServerSubscriptions to fetch.
     */
    where: ServerSubscriptionsWhereUniqueInput
  }

  /**
   * ServerSubscriptions findFirst
   */
  export type ServerSubscriptionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServerSubscriptions
     */
    select?: ServerSubscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServerSubscriptions
     */
    omit?: ServerSubscriptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServerSubscriptionsInclude<ExtArgs> | null
    /**
     * Filter, which ServerSubscriptions to fetch.
     */
    where?: ServerSubscriptionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServerSubscriptions to fetch.
     */
    orderBy?: ServerSubscriptionsOrderByWithRelationInput | ServerSubscriptionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServerSubscriptions.
     */
    cursor?: ServerSubscriptionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServerSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServerSubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServerSubscriptions.
     */
    distinct?: ServerSubscriptionsScalarFieldEnum | ServerSubscriptionsScalarFieldEnum[]
  }

  /**
   * ServerSubscriptions findFirstOrThrow
   */
  export type ServerSubscriptionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServerSubscriptions
     */
    select?: ServerSubscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServerSubscriptions
     */
    omit?: ServerSubscriptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServerSubscriptionsInclude<ExtArgs> | null
    /**
     * Filter, which ServerSubscriptions to fetch.
     */
    where?: ServerSubscriptionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServerSubscriptions to fetch.
     */
    orderBy?: ServerSubscriptionsOrderByWithRelationInput | ServerSubscriptionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServerSubscriptions.
     */
    cursor?: ServerSubscriptionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServerSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServerSubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServerSubscriptions.
     */
    distinct?: ServerSubscriptionsScalarFieldEnum | ServerSubscriptionsScalarFieldEnum[]
  }

  /**
   * ServerSubscriptions findMany
   */
  export type ServerSubscriptionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServerSubscriptions
     */
    select?: ServerSubscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServerSubscriptions
     */
    omit?: ServerSubscriptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServerSubscriptionsInclude<ExtArgs> | null
    /**
     * Filter, which ServerSubscriptions to fetch.
     */
    where?: ServerSubscriptionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServerSubscriptions to fetch.
     */
    orderBy?: ServerSubscriptionsOrderByWithRelationInput | ServerSubscriptionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ServerSubscriptions.
     */
    cursor?: ServerSubscriptionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServerSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServerSubscriptions.
     */
    skip?: number
    distinct?: ServerSubscriptionsScalarFieldEnum | ServerSubscriptionsScalarFieldEnum[]
  }

  /**
   * ServerSubscriptions create
   */
  export type ServerSubscriptionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServerSubscriptions
     */
    select?: ServerSubscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServerSubscriptions
     */
    omit?: ServerSubscriptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServerSubscriptionsInclude<ExtArgs> | null
    /**
     * The data needed to create a ServerSubscriptions.
     */
    data: XOR<ServerSubscriptionsCreateInput, ServerSubscriptionsUncheckedCreateInput>
  }

  /**
   * ServerSubscriptions createMany
   */
  export type ServerSubscriptionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ServerSubscriptions.
     */
    data: ServerSubscriptionsCreateManyInput | ServerSubscriptionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ServerSubscriptions createManyAndReturn
   */
  export type ServerSubscriptionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServerSubscriptions
     */
    select?: ServerSubscriptionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ServerSubscriptions
     */
    omit?: ServerSubscriptionsOmit<ExtArgs> | null
    /**
     * The data used to create many ServerSubscriptions.
     */
    data: ServerSubscriptionsCreateManyInput | ServerSubscriptionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServerSubscriptionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ServerSubscriptions update
   */
  export type ServerSubscriptionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServerSubscriptions
     */
    select?: ServerSubscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServerSubscriptions
     */
    omit?: ServerSubscriptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServerSubscriptionsInclude<ExtArgs> | null
    /**
     * The data needed to update a ServerSubscriptions.
     */
    data: XOR<ServerSubscriptionsUpdateInput, ServerSubscriptionsUncheckedUpdateInput>
    /**
     * Choose, which ServerSubscriptions to update.
     */
    where: ServerSubscriptionsWhereUniqueInput
  }

  /**
   * ServerSubscriptions updateMany
   */
  export type ServerSubscriptionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ServerSubscriptions.
     */
    data: XOR<ServerSubscriptionsUpdateManyMutationInput, ServerSubscriptionsUncheckedUpdateManyInput>
    /**
     * Filter which ServerSubscriptions to update
     */
    where?: ServerSubscriptionsWhereInput
    /**
     * Limit how many ServerSubscriptions to update.
     */
    limit?: number
  }

  /**
   * ServerSubscriptions updateManyAndReturn
   */
  export type ServerSubscriptionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServerSubscriptions
     */
    select?: ServerSubscriptionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ServerSubscriptions
     */
    omit?: ServerSubscriptionsOmit<ExtArgs> | null
    /**
     * The data used to update ServerSubscriptions.
     */
    data: XOR<ServerSubscriptionsUpdateManyMutationInput, ServerSubscriptionsUncheckedUpdateManyInput>
    /**
     * Filter which ServerSubscriptions to update
     */
    where?: ServerSubscriptionsWhereInput
    /**
     * Limit how many ServerSubscriptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServerSubscriptionsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ServerSubscriptions upsert
   */
  export type ServerSubscriptionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServerSubscriptions
     */
    select?: ServerSubscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServerSubscriptions
     */
    omit?: ServerSubscriptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServerSubscriptionsInclude<ExtArgs> | null
    /**
     * The filter to search for the ServerSubscriptions to update in case it exists.
     */
    where: ServerSubscriptionsWhereUniqueInput
    /**
     * In case the ServerSubscriptions found by the `where` argument doesn't exist, create a new ServerSubscriptions with this data.
     */
    create: XOR<ServerSubscriptionsCreateInput, ServerSubscriptionsUncheckedCreateInput>
    /**
     * In case the ServerSubscriptions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServerSubscriptionsUpdateInput, ServerSubscriptionsUncheckedUpdateInput>
  }

  /**
   * ServerSubscriptions delete
   */
  export type ServerSubscriptionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServerSubscriptions
     */
    select?: ServerSubscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServerSubscriptions
     */
    omit?: ServerSubscriptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServerSubscriptionsInclude<ExtArgs> | null
    /**
     * Filter which ServerSubscriptions to delete.
     */
    where: ServerSubscriptionsWhereUniqueInput
  }

  /**
   * ServerSubscriptions deleteMany
   */
  export type ServerSubscriptionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServerSubscriptions to delete
     */
    where?: ServerSubscriptionsWhereInput
    /**
     * Limit how many ServerSubscriptions to delete.
     */
    limit?: number
  }

  /**
   * ServerSubscriptions without action
   */
  export type ServerSubscriptionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServerSubscriptions
     */
    select?: ServerSubscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServerSubscriptions
     */
    omit?: ServerSubscriptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServerSubscriptionsInclude<ExtArgs> | null
  }


  /**
   * Model ErrorLog
   */

  export type AggregateErrorLog = {
    _count: ErrorLogCountAggregateOutputType | null
    _min: ErrorLogMinAggregateOutputType | null
    _max: ErrorLogMaxAggregateOutputType | null
  }

  export type ErrorLogMinAggregateOutputType = {
    id: string | null
    process: string | null
    message: string | null
    stackTrace: string | null
    timestamp: Date | null
  }

  export type ErrorLogMaxAggregateOutputType = {
    id: string | null
    process: string | null
    message: string | null
    stackTrace: string | null
    timestamp: Date | null
  }

  export type ErrorLogCountAggregateOutputType = {
    id: number
    process: number
    message: number
    stackTrace: number
    timestamp: number
    _all: number
  }


  export type ErrorLogMinAggregateInputType = {
    id?: true
    process?: true
    message?: true
    stackTrace?: true
    timestamp?: true
  }

  export type ErrorLogMaxAggregateInputType = {
    id?: true
    process?: true
    message?: true
    stackTrace?: true
    timestamp?: true
  }

  export type ErrorLogCountAggregateInputType = {
    id?: true
    process?: true
    message?: true
    stackTrace?: true
    timestamp?: true
    _all?: true
  }

  export type ErrorLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ErrorLog to aggregate.
     */
    where?: ErrorLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ErrorLogs to fetch.
     */
    orderBy?: ErrorLogOrderByWithRelationInput | ErrorLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ErrorLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ErrorLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ErrorLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ErrorLogs
    **/
    _count?: true | ErrorLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ErrorLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ErrorLogMaxAggregateInputType
  }

  export type GetErrorLogAggregateType<T extends ErrorLogAggregateArgs> = {
        [P in keyof T & keyof AggregateErrorLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateErrorLog[P]>
      : GetScalarType<T[P], AggregateErrorLog[P]>
  }




  export type ErrorLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ErrorLogWhereInput
    orderBy?: ErrorLogOrderByWithAggregationInput | ErrorLogOrderByWithAggregationInput[]
    by: ErrorLogScalarFieldEnum[] | ErrorLogScalarFieldEnum
    having?: ErrorLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ErrorLogCountAggregateInputType | true
    _min?: ErrorLogMinAggregateInputType
    _max?: ErrorLogMaxAggregateInputType
  }

  export type ErrorLogGroupByOutputType = {
    id: string
    process: string
    message: string
    stackTrace: string
    timestamp: Date
    _count: ErrorLogCountAggregateOutputType | null
    _min: ErrorLogMinAggregateOutputType | null
    _max: ErrorLogMaxAggregateOutputType | null
  }

  type GetErrorLogGroupByPayload<T extends ErrorLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ErrorLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ErrorLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ErrorLogGroupByOutputType[P]>
            : GetScalarType<T[P], ErrorLogGroupByOutputType[P]>
        }
      >
    >


  export type ErrorLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    process?: boolean
    message?: boolean
    stackTrace?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["errorLog"]>

  export type ErrorLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    process?: boolean
    message?: boolean
    stackTrace?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["errorLog"]>

  export type ErrorLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    process?: boolean
    message?: boolean
    stackTrace?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["errorLog"]>

  export type ErrorLogSelectScalar = {
    id?: boolean
    process?: boolean
    message?: boolean
    stackTrace?: boolean
    timestamp?: boolean
  }

  export type ErrorLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "process" | "message" | "stackTrace" | "timestamp", ExtArgs["result"]["errorLog"]>

  export type $ErrorLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ErrorLog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      process: string
      message: string
      stackTrace: string
      timestamp: Date
    }, ExtArgs["result"]["errorLog"]>
    composites: {}
  }

  type ErrorLogGetPayload<S extends boolean | null | undefined | ErrorLogDefaultArgs> = $Result.GetResult<Prisma.$ErrorLogPayload, S>

  type ErrorLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ErrorLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ErrorLogCountAggregateInputType | true
    }

  export interface ErrorLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ErrorLog'], meta: { name: 'ErrorLog' } }
    /**
     * Find zero or one ErrorLog that matches the filter.
     * @param {ErrorLogFindUniqueArgs} args - Arguments to find a ErrorLog
     * @example
     * // Get one ErrorLog
     * const errorLog = await prisma.errorLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ErrorLogFindUniqueArgs>(args: SelectSubset<T, ErrorLogFindUniqueArgs<ExtArgs>>): Prisma__ErrorLogClient<$Result.GetResult<Prisma.$ErrorLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ErrorLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ErrorLogFindUniqueOrThrowArgs} args - Arguments to find a ErrorLog
     * @example
     * // Get one ErrorLog
     * const errorLog = await prisma.errorLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ErrorLogFindUniqueOrThrowArgs>(args: SelectSubset<T, ErrorLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ErrorLogClient<$Result.GetResult<Prisma.$ErrorLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ErrorLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ErrorLogFindFirstArgs} args - Arguments to find a ErrorLog
     * @example
     * // Get one ErrorLog
     * const errorLog = await prisma.errorLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ErrorLogFindFirstArgs>(args?: SelectSubset<T, ErrorLogFindFirstArgs<ExtArgs>>): Prisma__ErrorLogClient<$Result.GetResult<Prisma.$ErrorLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ErrorLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ErrorLogFindFirstOrThrowArgs} args - Arguments to find a ErrorLog
     * @example
     * // Get one ErrorLog
     * const errorLog = await prisma.errorLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ErrorLogFindFirstOrThrowArgs>(args?: SelectSubset<T, ErrorLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__ErrorLogClient<$Result.GetResult<Prisma.$ErrorLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ErrorLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ErrorLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ErrorLogs
     * const errorLogs = await prisma.errorLog.findMany()
     * 
     * // Get first 10 ErrorLogs
     * const errorLogs = await prisma.errorLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const errorLogWithIdOnly = await prisma.errorLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ErrorLogFindManyArgs>(args?: SelectSubset<T, ErrorLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ErrorLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ErrorLog.
     * @param {ErrorLogCreateArgs} args - Arguments to create a ErrorLog.
     * @example
     * // Create one ErrorLog
     * const ErrorLog = await prisma.errorLog.create({
     *   data: {
     *     // ... data to create a ErrorLog
     *   }
     * })
     * 
     */
    create<T extends ErrorLogCreateArgs>(args: SelectSubset<T, ErrorLogCreateArgs<ExtArgs>>): Prisma__ErrorLogClient<$Result.GetResult<Prisma.$ErrorLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ErrorLogs.
     * @param {ErrorLogCreateManyArgs} args - Arguments to create many ErrorLogs.
     * @example
     * // Create many ErrorLogs
     * const errorLog = await prisma.errorLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ErrorLogCreateManyArgs>(args?: SelectSubset<T, ErrorLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ErrorLogs and returns the data saved in the database.
     * @param {ErrorLogCreateManyAndReturnArgs} args - Arguments to create many ErrorLogs.
     * @example
     * // Create many ErrorLogs
     * const errorLog = await prisma.errorLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ErrorLogs and only return the `id`
     * const errorLogWithIdOnly = await prisma.errorLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ErrorLogCreateManyAndReturnArgs>(args?: SelectSubset<T, ErrorLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ErrorLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ErrorLog.
     * @param {ErrorLogDeleteArgs} args - Arguments to delete one ErrorLog.
     * @example
     * // Delete one ErrorLog
     * const ErrorLog = await prisma.errorLog.delete({
     *   where: {
     *     // ... filter to delete one ErrorLog
     *   }
     * })
     * 
     */
    delete<T extends ErrorLogDeleteArgs>(args: SelectSubset<T, ErrorLogDeleteArgs<ExtArgs>>): Prisma__ErrorLogClient<$Result.GetResult<Prisma.$ErrorLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ErrorLog.
     * @param {ErrorLogUpdateArgs} args - Arguments to update one ErrorLog.
     * @example
     * // Update one ErrorLog
     * const errorLog = await prisma.errorLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ErrorLogUpdateArgs>(args: SelectSubset<T, ErrorLogUpdateArgs<ExtArgs>>): Prisma__ErrorLogClient<$Result.GetResult<Prisma.$ErrorLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ErrorLogs.
     * @param {ErrorLogDeleteManyArgs} args - Arguments to filter ErrorLogs to delete.
     * @example
     * // Delete a few ErrorLogs
     * const { count } = await prisma.errorLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ErrorLogDeleteManyArgs>(args?: SelectSubset<T, ErrorLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ErrorLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ErrorLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ErrorLogs
     * const errorLog = await prisma.errorLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ErrorLogUpdateManyArgs>(args: SelectSubset<T, ErrorLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ErrorLogs and returns the data updated in the database.
     * @param {ErrorLogUpdateManyAndReturnArgs} args - Arguments to update many ErrorLogs.
     * @example
     * // Update many ErrorLogs
     * const errorLog = await prisma.errorLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ErrorLogs and only return the `id`
     * const errorLogWithIdOnly = await prisma.errorLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ErrorLogUpdateManyAndReturnArgs>(args: SelectSubset<T, ErrorLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ErrorLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ErrorLog.
     * @param {ErrorLogUpsertArgs} args - Arguments to update or create a ErrorLog.
     * @example
     * // Update or create a ErrorLog
     * const errorLog = await prisma.errorLog.upsert({
     *   create: {
     *     // ... data to create a ErrorLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ErrorLog we want to update
     *   }
     * })
     */
    upsert<T extends ErrorLogUpsertArgs>(args: SelectSubset<T, ErrorLogUpsertArgs<ExtArgs>>): Prisma__ErrorLogClient<$Result.GetResult<Prisma.$ErrorLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ErrorLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ErrorLogCountArgs} args - Arguments to filter ErrorLogs to count.
     * @example
     * // Count the number of ErrorLogs
     * const count = await prisma.errorLog.count({
     *   where: {
     *     // ... the filter for the ErrorLogs we want to count
     *   }
     * })
    **/
    count<T extends ErrorLogCountArgs>(
      args?: Subset<T, ErrorLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ErrorLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ErrorLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ErrorLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ErrorLogAggregateArgs>(args: Subset<T, ErrorLogAggregateArgs>): Prisma.PrismaPromise<GetErrorLogAggregateType<T>>

    /**
     * Group by ErrorLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ErrorLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ErrorLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ErrorLogGroupByArgs['orderBy'] }
        : { orderBy?: ErrorLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ErrorLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetErrorLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ErrorLog model
   */
  readonly fields: ErrorLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ErrorLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ErrorLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ErrorLog model
   */
  interface ErrorLogFieldRefs {
    readonly id: FieldRef<"ErrorLog", 'String'>
    readonly process: FieldRef<"ErrorLog", 'String'>
    readonly message: FieldRef<"ErrorLog", 'String'>
    readonly stackTrace: FieldRef<"ErrorLog", 'String'>
    readonly timestamp: FieldRef<"ErrorLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ErrorLog findUnique
   */
  export type ErrorLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ErrorLog
     */
    select?: ErrorLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ErrorLog
     */
    omit?: ErrorLogOmit<ExtArgs> | null
    /**
     * Filter, which ErrorLog to fetch.
     */
    where: ErrorLogWhereUniqueInput
  }

  /**
   * ErrorLog findUniqueOrThrow
   */
  export type ErrorLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ErrorLog
     */
    select?: ErrorLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ErrorLog
     */
    omit?: ErrorLogOmit<ExtArgs> | null
    /**
     * Filter, which ErrorLog to fetch.
     */
    where: ErrorLogWhereUniqueInput
  }

  /**
   * ErrorLog findFirst
   */
  export type ErrorLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ErrorLog
     */
    select?: ErrorLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ErrorLog
     */
    omit?: ErrorLogOmit<ExtArgs> | null
    /**
     * Filter, which ErrorLog to fetch.
     */
    where?: ErrorLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ErrorLogs to fetch.
     */
    orderBy?: ErrorLogOrderByWithRelationInput | ErrorLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ErrorLogs.
     */
    cursor?: ErrorLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ErrorLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ErrorLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ErrorLogs.
     */
    distinct?: ErrorLogScalarFieldEnum | ErrorLogScalarFieldEnum[]
  }

  /**
   * ErrorLog findFirstOrThrow
   */
  export type ErrorLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ErrorLog
     */
    select?: ErrorLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ErrorLog
     */
    omit?: ErrorLogOmit<ExtArgs> | null
    /**
     * Filter, which ErrorLog to fetch.
     */
    where?: ErrorLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ErrorLogs to fetch.
     */
    orderBy?: ErrorLogOrderByWithRelationInput | ErrorLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ErrorLogs.
     */
    cursor?: ErrorLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ErrorLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ErrorLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ErrorLogs.
     */
    distinct?: ErrorLogScalarFieldEnum | ErrorLogScalarFieldEnum[]
  }

  /**
   * ErrorLog findMany
   */
  export type ErrorLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ErrorLog
     */
    select?: ErrorLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ErrorLog
     */
    omit?: ErrorLogOmit<ExtArgs> | null
    /**
     * Filter, which ErrorLogs to fetch.
     */
    where?: ErrorLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ErrorLogs to fetch.
     */
    orderBy?: ErrorLogOrderByWithRelationInput | ErrorLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ErrorLogs.
     */
    cursor?: ErrorLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ErrorLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ErrorLogs.
     */
    skip?: number
    distinct?: ErrorLogScalarFieldEnum | ErrorLogScalarFieldEnum[]
  }

  /**
   * ErrorLog create
   */
  export type ErrorLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ErrorLog
     */
    select?: ErrorLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ErrorLog
     */
    omit?: ErrorLogOmit<ExtArgs> | null
    /**
     * The data needed to create a ErrorLog.
     */
    data: XOR<ErrorLogCreateInput, ErrorLogUncheckedCreateInput>
  }

  /**
   * ErrorLog createMany
   */
  export type ErrorLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ErrorLogs.
     */
    data: ErrorLogCreateManyInput | ErrorLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ErrorLog createManyAndReturn
   */
  export type ErrorLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ErrorLog
     */
    select?: ErrorLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ErrorLog
     */
    omit?: ErrorLogOmit<ExtArgs> | null
    /**
     * The data used to create many ErrorLogs.
     */
    data: ErrorLogCreateManyInput | ErrorLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ErrorLog update
   */
  export type ErrorLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ErrorLog
     */
    select?: ErrorLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ErrorLog
     */
    omit?: ErrorLogOmit<ExtArgs> | null
    /**
     * The data needed to update a ErrorLog.
     */
    data: XOR<ErrorLogUpdateInput, ErrorLogUncheckedUpdateInput>
    /**
     * Choose, which ErrorLog to update.
     */
    where: ErrorLogWhereUniqueInput
  }

  /**
   * ErrorLog updateMany
   */
  export type ErrorLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ErrorLogs.
     */
    data: XOR<ErrorLogUpdateManyMutationInput, ErrorLogUncheckedUpdateManyInput>
    /**
     * Filter which ErrorLogs to update
     */
    where?: ErrorLogWhereInput
    /**
     * Limit how many ErrorLogs to update.
     */
    limit?: number
  }

  /**
   * ErrorLog updateManyAndReturn
   */
  export type ErrorLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ErrorLog
     */
    select?: ErrorLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ErrorLog
     */
    omit?: ErrorLogOmit<ExtArgs> | null
    /**
     * The data used to update ErrorLogs.
     */
    data: XOR<ErrorLogUpdateManyMutationInput, ErrorLogUncheckedUpdateManyInput>
    /**
     * Filter which ErrorLogs to update
     */
    where?: ErrorLogWhereInput
    /**
     * Limit how many ErrorLogs to update.
     */
    limit?: number
  }

  /**
   * ErrorLog upsert
   */
  export type ErrorLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ErrorLog
     */
    select?: ErrorLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ErrorLog
     */
    omit?: ErrorLogOmit<ExtArgs> | null
    /**
     * The filter to search for the ErrorLog to update in case it exists.
     */
    where: ErrorLogWhereUniqueInput
    /**
     * In case the ErrorLog found by the `where` argument doesn't exist, create a new ErrorLog with this data.
     */
    create: XOR<ErrorLogCreateInput, ErrorLogUncheckedCreateInput>
    /**
     * In case the ErrorLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ErrorLogUpdateInput, ErrorLogUncheckedUpdateInput>
  }

  /**
   * ErrorLog delete
   */
  export type ErrorLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ErrorLog
     */
    select?: ErrorLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ErrorLog
     */
    omit?: ErrorLogOmit<ExtArgs> | null
    /**
     * Filter which ErrorLog to delete.
     */
    where: ErrorLogWhereUniqueInput
  }

  /**
   * ErrorLog deleteMany
   */
  export type ErrorLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ErrorLogs to delete
     */
    where?: ErrorLogWhereInput
    /**
     * Limit how many ErrorLogs to delete.
     */
    limit?: number
  }

  /**
   * ErrorLog without action
   */
  export type ErrorLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ErrorLog
     */
    select?: ErrorLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ErrorLog
     */
    omit?: ErrorLogOmit<ExtArgs> | null
  }


  /**
   * Model Incidents
   */

  export type AggregateIncidents = {
    _count: IncidentsCountAggregateOutputType | null
    _min: IncidentsMinAggregateOutputType | null
    _max: IncidentsMaxAggregateOutputType | null
  }

  export type IncidentsMinAggregateOutputType = {
    id: string | null
    serverId: string | null
    userId: string | null
    moderatorId: string | null
    type: $Enums.IncidentsType | null
    reason: string | null
    timestamp: Date | null
    status: $Enums.IncidentsStatus | null
  }

  export type IncidentsMaxAggregateOutputType = {
    id: string | null
    serverId: string | null
    userId: string | null
    moderatorId: string | null
    type: $Enums.IncidentsType | null
    reason: string | null
    timestamp: Date | null
    status: $Enums.IncidentsStatus | null
  }

  export type IncidentsCountAggregateOutputType = {
    id: number
    serverId: number
    userId: number
    moderatorId: number
    type: number
    reason: number
    timestamp: number
    status: number
    _all: number
  }


  export type IncidentsMinAggregateInputType = {
    id?: true
    serverId?: true
    userId?: true
    moderatorId?: true
    type?: true
    reason?: true
    timestamp?: true
    status?: true
  }

  export type IncidentsMaxAggregateInputType = {
    id?: true
    serverId?: true
    userId?: true
    moderatorId?: true
    type?: true
    reason?: true
    timestamp?: true
    status?: true
  }

  export type IncidentsCountAggregateInputType = {
    id?: true
    serverId?: true
    userId?: true
    moderatorId?: true
    type?: true
    reason?: true
    timestamp?: true
    status?: true
    _all?: true
  }

  export type IncidentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Incidents to aggregate.
     */
    where?: IncidentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Incidents to fetch.
     */
    orderBy?: IncidentsOrderByWithRelationInput | IncidentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IncidentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Incidents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Incidents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Incidents
    **/
    _count?: true | IncidentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IncidentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IncidentsMaxAggregateInputType
  }

  export type GetIncidentsAggregateType<T extends IncidentsAggregateArgs> = {
        [P in keyof T & keyof AggregateIncidents]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIncidents[P]>
      : GetScalarType<T[P], AggregateIncidents[P]>
  }




  export type IncidentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IncidentsWhereInput
    orderBy?: IncidentsOrderByWithAggregationInput | IncidentsOrderByWithAggregationInput[]
    by: IncidentsScalarFieldEnum[] | IncidentsScalarFieldEnum
    having?: IncidentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IncidentsCountAggregateInputType | true
    _min?: IncidentsMinAggregateInputType
    _max?: IncidentsMaxAggregateInputType
  }

  export type IncidentsGroupByOutputType = {
    id: string
    serverId: string
    userId: string
    moderatorId: string
    type: $Enums.IncidentsType
    reason: string
    timestamp: Date
    status: $Enums.IncidentsStatus
    _count: IncidentsCountAggregateOutputType | null
    _min: IncidentsMinAggregateOutputType | null
    _max: IncidentsMaxAggregateOutputType | null
  }

  type GetIncidentsGroupByPayload<T extends IncidentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IncidentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IncidentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IncidentsGroupByOutputType[P]>
            : GetScalarType<T[P], IncidentsGroupByOutputType[P]>
        }
      >
    >


  export type IncidentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    serverId?: boolean
    userId?: boolean
    moderatorId?: boolean
    type?: boolean
    reason?: boolean
    timestamp?: boolean
    status?: boolean
  }, ExtArgs["result"]["incidents"]>

  export type IncidentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    serverId?: boolean
    userId?: boolean
    moderatorId?: boolean
    type?: boolean
    reason?: boolean
    timestamp?: boolean
    status?: boolean
  }, ExtArgs["result"]["incidents"]>

  export type IncidentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    serverId?: boolean
    userId?: boolean
    moderatorId?: boolean
    type?: boolean
    reason?: boolean
    timestamp?: boolean
    status?: boolean
  }, ExtArgs["result"]["incidents"]>

  export type IncidentsSelectScalar = {
    id?: boolean
    serverId?: boolean
    userId?: boolean
    moderatorId?: boolean
    type?: boolean
    reason?: boolean
    timestamp?: boolean
    status?: boolean
  }

  export type IncidentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "serverId" | "userId" | "moderatorId" | "type" | "reason" | "timestamp" | "status", ExtArgs["result"]["incidents"]>

  export type $IncidentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Incidents"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      serverId: string
      userId: string
      moderatorId: string
      type: $Enums.IncidentsType
      reason: string
      timestamp: Date
      status: $Enums.IncidentsStatus
    }, ExtArgs["result"]["incidents"]>
    composites: {}
  }

  type IncidentsGetPayload<S extends boolean | null | undefined | IncidentsDefaultArgs> = $Result.GetResult<Prisma.$IncidentsPayload, S>

  type IncidentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IncidentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IncidentsCountAggregateInputType | true
    }

  export interface IncidentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Incidents'], meta: { name: 'Incidents' } }
    /**
     * Find zero or one Incidents that matches the filter.
     * @param {IncidentsFindUniqueArgs} args - Arguments to find a Incidents
     * @example
     * // Get one Incidents
     * const incidents = await prisma.incidents.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IncidentsFindUniqueArgs>(args: SelectSubset<T, IncidentsFindUniqueArgs<ExtArgs>>): Prisma__IncidentsClient<$Result.GetResult<Prisma.$IncidentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Incidents that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IncidentsFindUniqueOrThrowArgs} args - Arguments to find a Incidents
     * @example
     * // Get one Incidents
     * const incidents = await prisma.incidents.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IncidentsFindUniqueOrThrowArgs>(args: SelectSubset<T, IncidentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IncidentsClient<$Result.GetResult<Prisma.$IncidentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Incidents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentsFindFirstArgs} args - Arguments to find a Incidents
     * @example
     * // Get one Incidents
     * const incidents = await prisma.incidents.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IncidentsFindFirstArgs>(args?: SelectSubset<T, IncidentsFindFirstArgs<ExtArgs>>): Prisma__IncidentsClient<$Result.GetResult<Prisma.$IncidentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Incidents that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentsFindFirstOrThrowArgs} args - Arguments to find a Incidents
     * @example
     * // Get one Incidents
     * const incidents = await prisma.incidents.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IncidentsFindFirstOrThrowArgs>(args?: SelectSubset<T, IncidentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__IncidentsClient<$Result.GetResult<Prisma.$IncidentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Incidents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Incidents
     * const incidents = await prisma.incidents.findMany()
     * 
     * // Get first 10 Incidents
     * const incidents = await prisma.incidents.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const incidentsWithIdOnly = await prisma.incidents.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IncidentsFindManyArgs>(args?: SelectSubset<T, IncidentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Incidents.
     * @param {IncidentsCreateArgs} args - Arguments to create a Incidents.
     * @example
     * // Create one Incidents
     * const Incidents = await prisma.incidents.create({
     *   data: {
     *     // ... data to create a Incidents
     *   }
     * })
     * 
     */
    create<T extends IncidentsCreateArgs>(args: SelectSubset<T, IncidentsCreateArgs<ExtArgs>>): Prisma__IncidentsClient<$Result.GetResult<Prisma.$IncidentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Incidents.
     * @param {IncidentsCreateManyArgs} args - Arguments to create many Incidents.
     * @example
     * // Create many Incidents
     * const incidents = await prisma.incidents.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IncidentsCreateManyArgs>(args?: SelectSubset<T, IncidentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Incidents and returns the data saved in the database.
     * @param {IncidentsCreateManyAndReturnArgs} args - Arguments to create many Incidents.
     * @example
     * // Create many Incidents
     * const incidents = await prisma.incidents.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Incidents and only return the `id`
     * const incidentsWithIdOnly = await prisma.incidents.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IncidentsCreateManyAndReturnArgs>(args?: SelectSubset<T, IncidentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Incidents.
     * @param {IncidentsDeleteArgs} args - Arguments to delete one Incidents.
     * @example
     * // Delete one Incidents
     * const Incidents = await prisma.incidents.delete({
     *   where: {
     *     // ... filter to delete one Incidents
     *   }
     * })
     * 
     */
    delete<T extends IncidentsDeleteArgs>(args: SelectSubset<T, IncidentsDeleteArgs<ExtArgs>>): Prisma__IncidentsClient<$Result.GetResult<Prisma.$IncidentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Incidents.
     * @param {IncidentsUpdateArgs} args - Arguments to update one Incidents.
     * @example
     * // Update one Incidents
     * const incidents = await prisma.incidents.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IncidentsUpdateArgs>(args: SelectSubset<T, IncidentsUpdateArgs<ExtArgs>>): Prisma__IncidentsClient<$Result.GetResult<Prisma.$IncidentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Incidents.
     * @param {IncidentsDeleteManyArgs} args - Arguments to filter Incidents to delete.
     * @example
     * // Delete a few Incidents
     * const { count } = await prisma.incidents.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IncidentsDeleteManyArgs>(args?: SelectSubset<T, IncidentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Incidents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Incidents
     * const incidents = await prisma.incidents.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IncidentsUpdateManyArgs>(args: SelectSubset<T, IncidentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Incidents and returns the data updated in the database.
     * @param {IncidentsUpdateManyAndReturnArgs} args - Arguments to update many Incidents.
     * @example
     * // Update many Incidents
     * const incidents = await prisma.incidents.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Incidents and only return the `id`
     * const incidentsWithIdOnly = await prisma.incidents.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends IncidentsUpdateManyAndReturnArgs>(args: SelectSubset<T, IncidentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Incidents.
     * @param {IncidentsUpsertArgs} args - Arguments to update or create a Incidents.
     * @example
     * // Update or create a Incidents
     * const incidents = await prisma.incidents.upsert({
     *   create: {
     *     // ... data to create a Incidents
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Incidents we want to update
     *   }
     * })
     */
    upsert<T extends IncidentsUpsertArgs>(args: SelectSubset<T, IncidentsUpsertArgs<ExtArgs>>): Prisma__IncidentsClient<$Result.GetResult<Prisma.$IncidentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Incidents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentsCountArgs} args - Arguments to filter Incidents to count.
     * @example
     * // Count the number of Incidents
     * const count = await prisma.incidents.count({
     *   where: {
     *     // ... the filter for the Incidents we want to count
     *   }
     * })
    **/
    count<T extends IncidentsCountArgs>(
      args?: Subset<T, IncidentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IncidentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Incidents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IncidentsAggregateArgs>(args: Subset<T, IncidentsAggregateArgs>): Prisma.PrismaPromise<GetIncidentsAggregateType<T>>

    /**
     * Group by Incidents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IncidentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IncidentsGroupByArgs['orderBy'] }
        : { orderBy?: IncidentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IncidentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIncidentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Incidents model
   */
  readonly fields: IncidentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Incidents.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IncidentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Incidents model
   */
  interface IncidentsFieldRefs {
    readonly id: FieldRef<"Incidents", 'String'>
    readonly serverId: FieldRef<"Incidents", 'String'>
    readonly userId: FieldRef<"Incidents", 'String'>
    readonly moderatorId: FieldRef<"Incidents", 'String'>
    readonly type: FieldRef<"Incidents", 'IncidentsType'>
    readonly reason: FieldRef<"Incidents", 'String'>
    readonly timestamp: FieldRef<"Incidents", 'DateTime'>
    readonly status: FieldRef<"Incidents", 'IncidentsStatus'>
  }
    

  // Custom InputTypes
  /**
   * Incidents findUnique
   */
  export type IncidentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incidents
     */
    select?: IncidentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incidents
     */
    omit?: IncidentsOmit<ExtArgs> | null
    /**
     * Filter, which Incidents to fetch.
     */
    where: IncidentsWhereUniqueInput
  }

  /**
   * Incidents findUniqueOrThrow
   */
  export type IncidentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incidents
     */
    select?: IncidentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incidents
     */
    omit?: IncidentsOmit<ExtArgs> | null
    /**
     * Filter, which Incidents to fetch.
     */
    where: IncidentsWhereUniqueInput
  }

  /**
   * Incidents findFirst
   */
  export type IncidentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incidents
     */
    select?: IncidentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incidents
     */
    omit?: IncidentsOmit<ExtArgs> | null
    /**
     * Filter, which Incidents to fetch.
     */
    where?: IncidentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Incidents to fetch.
     */
    orderBy?: IncidentsOrderByWithRelationInput | IncidentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Incidents.
     */
    cursor?: IncidentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Incidents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Incidents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Incidents.
     */
    distinct?: IncidentsScalarFieldEnum | IncidentsScalarFieldEnum[]
  }

  /**
   * Incidents findFirstOrThrow
   */
  export type IncidentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incidents
     */
    select?: IncidentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incidents
     */
    omit?: IncidentsOmit<ExtArgs> | null
    /**
     * Filter, which Incidents to fetch.
     */
    where?: IncidentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Incidents to fetch.
     */
    orderBy?: IncidentsOrderByWithRelationInput | IncidentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Incidents.
     */
    cursor?: IncidentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Incidents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Incidents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Incidents.
     */
    distinct?: IncidentsScalarFieldEnum | IncidentsScalarFieldEnum[]
  }

  /**
   * Incidents findMany
   */
  export type IncidentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incidents
     */
    select?: IncidentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incidents
     */
    omit?: IncidentsOmit<ExtArgs> | null
    /**
     * Filter, which Incidents to fetch.
     */
    where?: IncidentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Incidents to fetch.
     */
    orderBy?: IncidentsOrderByWithRelationInput | IncidentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Incidents.
     */
    cursor?: IncidentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Incidents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Incidents.
     */
    skip?: number
    distinct?: IncidentsScalarFieldEnum | IncidentsScalarFieldEnum[]
  }

  /**
   * Incidents create
   */
  export type IncidentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incidents
     */
    select?: IncidentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incidents
     */
    omit?: IncidentsOmit<ExtArgs> | null
    /**
     * The data needed to create a Incidents.
     */
    data: XOR<IncidentsCreateInput, IncidentsUncheckedCreateInput>
  }

  /**
   * Incidents createMany
   */
  export type IncidentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Incidents.
     */
    data: IncidentsCreateManyInput | IncidentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Incidents createManyAndReturn
   */
  export type IncidentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incidents
     */
    select?: IncidentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Incidents
     */
    omit?: IncidentsOmit<ExtArgs> | null
    /**
     * The data used to create many Incidents.
     */
    data: IncidentsCreateManyInput | IncidentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Incidents update
   */
  export type IncidentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incidents
     */
    select?: IncidentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incidents
     */
    omit?: IncidentsOmit<ExtArgs> | null
    /**
     * The data needed to update a Incidents.
     */
    data: XOR<IncidentsUpdateInput, IncidentsUncheckedUpdateInput>
    /**
     * Choose, which Incidents to update.
     */
    where: IncidentsWhereUniqueInput
  }

  /**
   * Incidents updateMany
   */
  export type IncidentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Incidents.
     */
    data: XOR<IncidentsUpdateManyMutationInput, IncidentsUncheckedUpdateManyInput>
    /**
     * Filter which Incidents to update
     */
    where?: IncidentsWhereInput
    /**
     * Limit how many Incidents to update.
     */
    limit?: number
  }

  /**
   * Incidents updateManyAndReturn
   */
  export type IncidentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incidents
     */
    select?: IncidentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Incidents
     */
    omit?: IncidentsOmit<ExtArgs> | null
    /**
     * The data used to update Incidents.
     */
    data: XOR<IncidentsUpdateManyMutationInput, IncidentsUncheckedUpdateManyInput>
    /**
     * Filter which Incidents to update
     */
    where?: IncidentsWhereInput
    /**
     * Limit how many Incidents to update.
     */
    limit?: number
  }

  /**
   * Incidents upsert
   */
  export type IncidentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incidents
     */
    select?: IncidentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incidents
     */
    omit?: IncidentsOmit<ExtArgs> | null
    /**
     * The filter to search for the Incidents to update in case it exists.
     */
    where: IncidentsWhereUniqueInput
    /**
     * In case the Incidents found by the `where` argument doesn't exist, create a new Incidents with this data.
     */
    create: XOR<IncidentsCreateInput, IncidentsUncheckedCreateInput>
    /**
     * In case the Incidents was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IncidentsUpdateInput, IncidentsUncheckedUpdateInput>
  }

  /**
   * Incidents delete
   */
  export type IncidentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incidents
     */
    select?: IncidentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incidents
     */
    omit?: IncidentsOmit<ExtArgs> | null
    /**
     * Filter which Incidents to delete.
     */
    where: IncidentsWhereUniqueInput
  }

  /**
   * Incidents deleteMany
   */
  export type IncidentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Incidents to delete
     */
    where?: IncidentsWhereInput
    /**
     * Limit how many Incidents to delete.
     */
    limit?: number
  }

  /**
   * Incidents without action
   */
  export type IncidentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incidents
     */
    select?: IncidentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incidents
     */
    omit?: IncidentsOmit<ExtArgs> | null
  }


  /**
   * Model Products
   */

  export type AggregateProducts = {
    _count: ProductsCountAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  export type ProductsMinAggregateOutputType = {
    id: string | null
    name: string | null
    type: $Enums.ProductType | null
  }

  export type ProductsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    type: $Enums.ProductType | null
  }

  export type ProductsCountAggregateOutputType = {
    id: number
    name: number
    type: number
    _all: number
  }


  export type ProductsMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
  }

  export type ProductsMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
  }

  export type ProductsCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    _all?: true
  }

  export type ProductsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to aggregate.
     */
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductsMaxAggregateInputType
  }

  export type GetProductsAggregateType<T extends ProductsAggregateArgs> = {
        [P in keyof T & keyof AggregateProducts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProducts[P]>
      : GetScalarType<T[P], AggregateProducts[P]>
  }




  export type ProductsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductsWhereInput
    orderBy?: ProductsOrderByWithAggregationInput | ProductsOrderByWithAggregationInput[]
    by: ProductsScalarFieldEnum[] | ProductsScalarFieldEnum
    having?: ProductsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductsCountAggregateInputType | true
    _min?: ProductsMinAggregateInputType
    _max?: ProductsMaxAggregateInputType
  }

  export type ProductsGroupByOutputType = {
    id: string
    name: string
    type: $Enums.ProductType
    _count: ProductsCountAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  type GetProductsGroupByPayload<T extends ProductsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductsGroupByOutputType[P]>
            : GetScalarType<T[P], ProductsGroupByOutputType[P]>
        }
      >
    >


  export type ProductsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    prices?: boolean | Products$pricesArgs<ExtArgs>
    _count?: boolean | ProductsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["products"]>

  export type ProductsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
  }, ExtArgs["result"]["products"]>

  export type ProductsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
  }, ExtArgs["result"]["products"]>

  export type ProductsSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
  }

  export type ProductsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "type", ExtArgs["result"]["products"]>
  export type ProductsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prices?: boolean | Products$pricesArgs<ExtArgs>
    _count?: boolean | ProductsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProductsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProductsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Products"
    objects: {
      prices: Prisma.$PricesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      type: $Enums.ProductType
    }, ExtArgs["result"]["products"]>
    composites: {}
  }

  type ProductsGetPayload<S extends boolean | null | undefined | ProductsDefaultArgs> = $Result.GetResult<Prisma.$ProductsPayload, S>

  type ProductsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductsCountAggregateInputType | true
    }

  export interface ProductsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Products'], meta: { name: 'Products' } }
    /**
     * Find zero or one Products that matches the filter.
     * @param {ProductsFindUniqueArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductsFindUniqueArgs>(args: SelectSubset<T, ProductsFindUniqueArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Products that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductsFindUniqueOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductsFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsFindFirstArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductsFindFirstArgs>(args?: SelectSubset<T, ProductsFindFirstArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsFindFirstOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductsFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.products.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.products.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productsWithIdOnly = await prisma.products.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductsFindManyArgs>(args?: SelectSubset<T, ProductsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Products.
     * @param {ProductsCreateArgs} args - Arguments to create a Products.
     * @example
     * // Create one Products
     * const Products = await prisma.products.create({
     *   data: {
     *     // ... data to create a Products
     *   }
     * })
     * 
     */
    create<T extends ProductsCreateArgs>(args: SelectSubset<T, ProductsCreateArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductsCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const products = await prisma.products.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductsCreateManyArgs>(args?: SelectSubset<T, ProductsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductsCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const products = await prisma.products.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productsWithIdOnly = await prisma.products.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductsCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Products.
     * @param {ProductsDeleteArgs} args - Arguments to delete one Products.
     * @example
     * // Delete one Products
     * const Products = await prisma.products.delete({
     *   where: {
     *     // ... filter to delete one Products
     *   }
     * })
     * 
     */
    delete<T extends ProductsDeleteArgs>(args: SelectSubset<T, ProductsDeleteArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Products.
     * @param {ProductsUpdateArgs} args - Arguments to update one Products.
     * @example
     * // Update one Products
     * const products = await prisma.products.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductsUpdateArgs>(args: SelectSubset<T, ProductsUpdateArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductsDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.products.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductsDeleteManyArgs>(args?: SelectSubset<T, ProductsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductsUpdateManyArgs>(args: SelectSubset<T, ProductsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductsUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productsWithIdOnly = await prisma.products.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductsUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Products.
     * @param {ProductsUpsertArgs} args - Arguments to update or create a Products.
     * @example
     * // Update or create a Products
     * const products = await prisma.products.upsert({
     *   create: {
     *     // ... data to create a Products
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Products we want to update
     *   }
     * })
     */
    upsert<T extends ProductsUpsertArgs>(args: SelectSubset<T, ProductsUpsertArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.products.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductsCountArgs>(
      args?: Subset<T, ProductsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductsAggregateArgs>(args: Subset<T, ProductsAggregateArgs>): Prisma.PrismaPromise<GetProductsAggregateType<T>>

    /**
     * Group by Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductsGroupByArgs['orderBy'] }
        : { orderBy?: ProductsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Products model
   */
  readonly fields: ProductsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Products.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    prices<T extends Products$pricesArgs<ExtArgs> = {}>(args?: Subset<T, Products$pricesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PricesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Products model
   */
  interface ProductsFieldRefs {
    readonly id: FieldRef<"Products", 'String'>
    readonly name: FieldRef<"Products", 'String'>
    readonly type: FieldRef<"Products", 'ProductType'>
  }
    

  // Custom InputTypes
  /**
   * Products findUnique
   */
  export type ProductsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where: ProductsWhereUniqueInput
  }

  /**
   * Products findUniqueOrThrow
   */
  export type ProductsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where: ProductsWhereUniqueInput
  }

  /**
   * Products findFirst
   */
  export type ProductsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * Products findFirstOrThrow
   */
  export type ProductsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * Products findMany
   */
  export type ProductsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * Products create
   */
  export type ProductsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * The data needed to create a Products.
     */
    data: XOR<ProductsCreateInput, ProductsUncheckedCreateInput>
  }

  /**
   * Products createMany
   */
  export type ProductsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductsCreateManyInput | ProductsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Products createManyAndReturn
   */
  export type ProductsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductsCreateManyInput | ProductsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Products update
   */
  export type ProductsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * The data needed to update a Products.
     */
    data: XOR<ProductsUpdateInput, ProductsUncheckedUpdateInput>
    /**
     * Choose, which Products to update.
     */
    where: ProductsWhereUniqueInput
  }

  /**
   * Products updateMany
   */
  export type ProductsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductsUpdateManyMutationInput, ProductsUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductsWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Products updateManyAndReturn
   */
  export type ProductsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductsUpdateManyMutationInput, ProductsUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductsWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Products upsert
   */
  export type ProductsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * The filter to search for the Products to update in case it exists.
     */
    where: ProductsWhereUniqueInput
    /**
     * In case the Products found by the `where` argument doesn't exist, create a new Products with this data.
     */
    create: XOR<ProductsCreateInput, ProductsUncheckedCreateInput>
    /**
     * In case the Products was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductsUpdateInput, ProductsUncheckedUpdateInput>
  }

  /**
   * Products delete
   */
  export type ProductsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter which Products to delete.
     */
    where: ProductsWhereUniqueInput
  }

  /**
   * Products deleteMany
   */
  export type ProductsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductsWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Products.prices
   */
  export type Products$pricesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prices
     */
    select?: PricesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prices
     */
    omit?: PricesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricesInclude<ExtArgs> | null
    where?: PricesWhereInput
    orderBy?: PricesOrderByWithRelationInput | PricesOrderByWithRelationInput[]
    cursor?: PricesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PricesScalarFieldEnum | PricesScalarFieldEnum[]
  }

  /**
   * Products without action
   */
  export type ProductsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
  }


  /**
   * Model Prices
   */

  export type AggregatePrices = {
    _count: PricesCountAggregateOutputType | null
    _avg: PricesAvgAggregateOutputType | null
    _sum: PricesSumAggregateOutputType | null
    _min: PricesMinAggregateOutputType | null
    _max: PricesMaxAggregateOutputType | null
  }

  export type PricesAvgAggregateOutputType = {
    amount: number | null
  }

  export type PricesSumAggregateOutputType = {
    amount: number | null
  }

  export type PricesMinAggregateOutputType = {
    id: string | null
    amount: number | null
    default: boolean | null
    productId: string | null
  }

  export type PricesMaxAggregateOutputType = {
    id: string | null
    amount: number | null
    default: boolean | null
    productId: string | null
  }

  export type PricesCountAggregateOutputType = {
    id: number
    amount: number
    default: number
    productId: number
    _all: number
  }


  export type PricesAvgAggregateInputType = {
    amount?: true
  }

  export type PricesSumAggregateInputType = {
    amount?: true
  }

  export type PricesMinAggregateInputType = {
    id?: true
    amount?: true
    default?: true
    productId?: true
  }

  export type PricesMaxAggregateInputType = {
    id?: true
    amount?: true
    default?: true
    productId?: true
  }

  export type PricesCountAggregateInputType = {
    id?: true
    amount?: true
    default?: true
    productId?: true
    _all?: true
  }

  export type PricesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prices to aggregate.
     */
    where?: PricesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prices to fetch.
     */
    orderBy?: PricesOrderByWithRelationInput | PricesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PricesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Prices
    **/
    _count?: true | PricesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PricesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PricesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PricesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PricesMaxAggregateInputType
  }

  export type GetPricesAggregateType<T extends PricesAggregateArgs> = {
        [P in keyof T & keyof AggregatePrices]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrices[P]>
      : GetScalarType<T[P], AggregatePrices[P]>
  }




  export type PricesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PricesWhereInput
    orderBy?: PricesOrderByWithAggregationInput | PricesOrderByWithAggregationInput[]
    by: PricesScalarFieldEnum[] | PricesScalarFieldEnum
    having?: PricesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PricesCountAggregateInputType | true
    _avg?: PricesAvgAggregateInputType
    _sum?: PricesSumAggregateInputType
    _min?: PricesMinAggregateInputType
    _max?: PricesMaxAggregateInputType
  }

  export type PricesGroupByOutputType = {
    id: string
    amount: number
    default: boolean
    productId: string
    _count: PricesCountAggregateOutputType | null
    _avg: PricesAvgAggregateOutputType | null
    _sum: PricesSumAggregateOutputType | null
    _min: PricesMinAggregateOutputType | null
    _max: PricesMaxAggregateOutputType | null
  }

  type GetPricesGroupByPayload<T extends PricesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PricesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PricesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PricesGroupByOutputType[P]>
            : GetScalarType<T[P], PricesGroupByOutputType[P]>
        }
      >
    >


  export type PricesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    default?: boolean
    productId?: boolean
    product?: boolean | ProductsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prices"]>

  export type PricesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    default?: boolean
    productId?: boolean
    product?: boolean | ProductsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prices"]>

  export type PricesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    default?: boolean
    productId?: boolean
    product?: boolean | ProductsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prices"]>

  export type PricesSelectScalar = {
    id?: boolean
    amount?: boolean
    default?: boolean
    productId?: boolean
  }

  export type PricesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "amount" | "default" | "productId", ExtArgs["result"]["prices"]>
  export type PricesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductsDefaultArgs<ExtArgs>
  }
  export type PricesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductsDefaultArgs<ExtArgs>
  }
  export type PricesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductsDefaultArgs<ExtArgs>
  }

  export type $PricesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Prices"
    objects: {
      product: Prisma.$ProductsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      amount: number
      default: boolean
      productId: string
    }, ExtArgs["result"]["prices"]>
    composites: {}
  }

  type PricesGetPayload<S extends boolean | null | undefined | PricesDefaultArgs> = $Result.GetResult<Prisma.$PricesPayload, S>

  type PricesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PricesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PricesCountAggregateInputType | true
    }

  export interface PricesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Prices'], meta: { name: 'Prices' } }
    /**
     * Find zero or one Prices that matches the filter.
     * @param {PricesFindUniqueArgs} args - Arguments to find a Prices
     * @example
     * // Get one Prices
     * const prices = await prisma.prices.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PricesFindUniqueArgs>(args: SelectSubset<T, PricesFindUniqueArgs<ExtArgs>>): Prisma__PricesClient<$Result.GetResult<Prisma.$PricesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Prices that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PricesFindUniqueOrThrowArgs} args - Arguments to find a Prices
     * @example
     * // Get one Prices
     * const prices = await prisma.prices.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PricesFindUniqueOrThrowArgs>(args: SelectSubset<T, PricesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PricesClient<$Result.GetResult<Prisma.$PricesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricesFindFirstArgs} args - Arguments to find a Prices
     * @example
     * // Get one Prices
     * const prices = await prisma.prices.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PricesFindFirstArgs>(args?: SelectSubset<T, PricesFindFirstArgs<ExtArgs>>): Prisma__PricesClient<$Result.GetResult<Prisma.$PricesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prices that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricesFindFirstOrThrowArgs} args - Arguments to find a Prices
     * @example
     * // Get one Prices
     * const prices = await prisma.prices.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PricesFindFirstOrThrowArgs>(args?: SelectSubset<T, PricesFindFirstOrThrowArgs<ExtArgs>>): Prisma__PricesClient<$Result.GetResult<Prisma.$PricesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Prices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Prices
     * const prices = await prisma.prices.findMany()
     * 
     * // Get first 10 Prices
     * const prices = await prisma.prices.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pricesWithIdOnly = await prisma.prices.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PricesFindManyArgs>(args?: SelectSubset<T, PricesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PricesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Prices.
     * @param {PricesCreateArgs} args - Arguments to create a Prices.
     * @example
     * // Create one Prices
     * const Prices = await prisma.prices.create({
     *   data: {
     *     // ... data to create a Prices
     *   }
     * })
     * 
     */
    create<T extends PricesCreateArgs>(args: SelectSubset<T, PricesCreateArgs<ExtArgs>>): Prisma__PricesClient<$Result.GetResult<Prisma.$PricesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Prices.
     * @param {PricesCreateManyArgs} args - Arguments to create many Prices.
     * @example
     * // Create many Prices
     * const prices = await prisma.prices.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PricesCreateManyArgs>(args?: SelectSubset<T, PricesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Prices and returns the data saved in the database.
     * @param {PricesCreateManyAndReturnArgs} args - Arguments to create many Prices.
     * @example
     * // Create many Prices
     * const prices = await prisma.prices.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Prices and only return the `id`
     * const pricesWithIdOnly = await prisma.prices.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PricesCreateManyAndReturnArgs>(args?: SelectSubset<T, PricesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PricesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Prices.
     * @param {PricesDeleteArgs} args - Arguments to delete one Prices.
     * @example
     * // Delete one Prices
     * const Prices = await prisma.prices.delete({
     *   where: {
     *     // ... filter to delete one Prices
     *   }
     * })
     * 
     */
    delete<T extends PricesDeleteArgs>(args: SelectSubset<T, PricesDeleteArgs<ExtArgs>>): Prisma__PricesClient<$Result.GetResult<Prisma.$PricesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Prices.
     * @param {PricesUpdateArgs} args - Arguments to update one Prices.
     * @example
     * // Update one Prices
     * const prices = await prisma.prices.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PricesUpdateArgs>(args: SelectSubset<T, PricesUpdateArgs<ExtArgs>>): Prisma__PricesClient<$Result.GetResult<Prisma.$PricesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Prices.
     * @param {PricesDeleteManyArgs} args - Arguments to filter Prices to delete.
     * @example
     * // Delete a few Prices
     * const { count } = await prisma.prices.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PricesDeleteManyArgs>(args?: SelectSubset<T, PricesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Prices
     * const prices = await prisma.prices.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PricesUpdateManyArgs>(args: SelectSubset<T, PricesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prices and returns the data updated in the database.
     * @param {PricesUpdateManyAndReturnArgs} args - Arguments to update many Prices.
     * @example
     * // Update many Prices
     * const prices = await prisma.prices.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Prices and only return the `id`
     * const pricesWithIdOnly = await prisma.prices.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PricesUpdateManyAndReturnArgs>(args: SelectSubset<T, PricesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PricesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Prices.
     * @param {PricesUpsertArgs} args - Arguments to update or create a Prices.
     * @example
     * // Update or create a Prices
     * const prices = await prisma.prices.upsert({
     *   create: {
     *     // ... data to create a Prices
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Prices we want to update
     *   }
     * })
     */
    upsert<T extends PricesUpsertArgs>(args: SelectSubset<T, PricesUpsertArgs<ExtArgs>>): Prisma__PricesClient<$Result.GetResult<Prisma.$PricesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Prices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricesCountArgs} args - Arguments to filter Prices to count.
     * @example
     * // Count the number of Prices
     * const count = await prisma.prices.count({
     *   where: {
     *     // ... the filter for the Prices we want to count
     *   }
     * })
    **/
    count<T extends PricesCountArgs>(
      args?: Subset<T, PricesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PricesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Prices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PricesAggregateArgs>(args: Subset<T, PricesAggregateArgs>): Prisma.PrismaPromise<GetPricesAggregateType<T>>

    /**
     * Group by Prices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PricesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PricesGroupByArgs['orderBy'] }
        : { orderBy?: PricesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PricesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPricesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Prices model
   */
  readonly fields: PricesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Prices.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PricesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductsDefaultArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Prices model
   */
  interface PricesFieldRefs {
    readonly id: FieldRef<"Prices", 'String'>
    readonly amount: FieldRef<"Prices", 'Int'>
    readonly default: FieldRef<"Prices", 'Boolean'>
    readonly productId: FieldRef<"Prices", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Prices findUnique
   */
  export type PricesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prices
     */
    select?: PricesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prices
     */
    omit?: PricesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricesInclude<ExtArgs> | null
    /**
     * Filter, which Prices to fetch.
     */
    where: PricesWhereUniqueInput
  }

  /**
   * Prices findUniqueOrThrow
   */
  export type PricesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prices
     */
    select?: PricesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prices
     */
    omit?: PricesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricesInclude<ExtArgs> | null
    /**
     * Filter, which Prices to fetch.
     */
    where: PricesWhereUniqueInput
  }

  /**
   * Prices findFirst
   */
  export type PricesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prices
     */
    select?: PricesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prices
     */
    omit?: PricesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricesInclude<ExtArgs> | null
    /**
     * Filter, which Prices to fetch.
     */
    where?: PricesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prices to fetch.
     */
    orderBy?: PricesOrderByWithRelationInput | PricesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prices.
     */
    cursor?: PricesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prices.
     */
    distinct?: PricesScalarFieldEnum | PricesScalarFieldEnum[]
  }

  /**
   * Prices findFirstOrThrow
   */
  export type PricesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prices
     */
    select?: PricesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prices
     */
    omit?: PricesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricesInclude<ExtArgs> | null
    /**
     * Filter, which Prices to fetch.
     */
    where?: PricesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prices to fetch.
     */
    orderBy?: PricesOrderByWithRelationInput | PricesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prices.
     */
    cursor?: PricesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prices.
     */
    distinct?: PricesScalarFieldEnum | PricesScalarFieldEnum[]
  }

  /**
   * Prices findMany
   */
  export type PricesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prices
     */
    select?: PricesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prices
     */
    omit?: PricesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricesInclude<ExtArgs> | null
    /**
     * Filter, which Prices to fetch.
     */
    where?: PricesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prices to fetch.
     */
    orderBy?: PricesOrderByWithRelationInput | PricesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Prices.
     */
    cursor?: PricesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prices.
     */
    skip?: number
    distinct?: PricesScalarFieldEnum | PricesScalarFieldEnum[]
  }

  /**
   * Prices create
   */
  export type PricesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prices
     */
    select?: PricesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prices
     */
    omit?: PricesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricesInclude<ExtArgs> | null
    /**
     * The data needed to create a Prices.
     */
    data: XOR<PricesCreateInput, PricesUncheckedCreateInput>
  }

  /**
   * Prices createMany
   */
  export type PricesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Prices.
     */
    data: PricesCreateManyInput | PricesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Prices createManyAndReturn
   */
  export type PricesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prices
     */
    select?: PricesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Prices
     */
    omit?: PricesOmit<ExtArgs> | null
    /**
     * The data used to create many Prices.
     */
    data: PricesCreateManyInput | PricesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Prices update
   */
  export type PricesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prices
     */
    select?: PricesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prices
     */
    omit?: PricesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricesInclude<ExtArgs> | null
    /**
     * The data needed to update a Prices.
     */
    data: XOR<PricesUpdateInput, PricesUncheckedUpdateInput>
    /**
     * Choose, which Prices to update.
     */
    where: PricesWhereUniqueInput
  }

  /**
   * Prices updateMany
   */
  export type PricesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Prices.
     */
    data: XOR<PricesUpdateManyMutationInput, PricesUncheckedUpdateManyInput>
    /**
     * Filter which Prices to update
     */
    where?: PricesWhereInput
    /**
     * Limit how many Prices to update.
     */
    limit?: number
  }

  /**
   * Prices updateManyAndReturn
   */
  export type PricesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prices
     */
    select?: PricesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Prices
     */
    omit?: PricesOmit<ExtArgs> | null
    /**
     * The data used to update Prices.
     */
    data: XOR<PricesUpdateManyMutationInput, PricesUncheckedUpdateManyInput>
    /**
     * Filter which Prices to update
     */
    where?: PricesWhereInput
    /**
     * Limit how many Prices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Prices upsert
   */
  export type PricesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prices
     */
    select?: PricesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prices
     */
    omit?: PricesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricesInclude<ExtArgs> | null
    /**
     * The filter to search for the Prices to update in case it exists.
     */
    where: PricesWhereUniqueInput
    /**
     * In case the Prices found by the `where` argument doesn't exist, create a new Prices with this data.
     */
    create: XOR<PricesCreateInput, PricesUncheckedCreateInput>
    /**
     * In case the Prices was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PricesUpdateInput, PricesUncheckedUpdateInput>
  }

  /**
   * Prices delete
   */
  export type PricesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prices
     */
    select?: PricesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prices
     */
    omit?: PricesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricesInclude<ExtArgs> | null
    /**
     * Filter which Prices to delete.
     */
    where: PricesWhereUniqueInput
  }

  /**
   * Prices deleteMany
   */
  export type PricesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prices to delete
     */
    where?: PricesWhereInput
    /**
     * Limit how many Prices to delete.
     */
    limit?: number
  }

  /**
   * Prices without action
   */
  export type PricesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prices
     */
    select?: PricesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prices
     */
    omit?: PricesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricesInclude<ExtArgs> | null
  }


  /**
   * Model AutomodConfig
   */

  export type AggregateAutomodConfig = {
    _count: AutomodConfigCountAggregateOutputType | null
    _min: AutomodConfigMinAggregateOutputType | null
    _max: AutomodConfigMaxAggregateOutputType | null
  }

  export type AutomodConfigMinAggregateOutputType = {
    id: string | null
    active: boolean | null
    profanity: boolean | null
    matureContent: boolean | null
    links: boolean | null
    guildId: string | null
  }

  export type AutomodConfigMaxAggregateOutputType = {
    id: string | null
    active: boolean | null
    profanity: boolean | null
    matureContent: boolean | null
    links: boolean | null
    guildId: string | null
  }

  export type AutomodConfigCountAggregateOutputType = {
    id: number
    active: number
    profanity: number
    matureContent: number
    links: number
    ignoredChannels: number
    approvedLinks: number
    guildId: number
    _all: number
  }


  export type AutomodConfigMinAggregateInputType = {
    id?: true
    active?: true
    profanity?: true
    matureContent?: true
    links?: true
    guildId?: true
  }

  export type AutomodConfigMaxAggregateInputType = {
    id?: true
    active?: true
    profanity?: true
    matureContent?: true
    links?: true
    guildId?: true
  }

  export type AutomodConfigCountAggregateInputType = {
    id?: true
    active?: true
    profanity?: true
    matureContent?: true
    links?: true
    ignoredChannels?: true
    approvedLinks?: true
    guildId?: true
    _all?: true
  }

  export type AutomodConfigAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AutomodConfig to aggregate.
     */
    where?: AutomodConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AutomodConfigs to fetch.
     */
    orderBy?: AutomodConfigOrderByWithRelationInput | AutomodConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AutomodConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AutomodConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AutomodConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AutomodConfigs
    **/
    _count?: true | AutomodConfigCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AutomodConfigMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AutomodConfigMaxAggregateInputType
  }

  export type GetAutomodConfigAggregateType<T extends AutomodConfigAggregateArgs> = {
        [P in keyof T & keyof AggregateAutomodConfig]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAutomodConfig[P]>
      : GetScalarType<T[P], AggregateAutomodConfig[P]>
  }




  export type AutomodConfigGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AutomodConfigWhereInput
    orderBy?: AutomodConfigOrderByWithAggregationInput | AutomodConfigOrderByWithAggregationInput[]
    by: AutomodConfigScalarFieldEnum[] | AutomodConfigScalarFieldEnum
    having?: AutomodConfigScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AutomodConfigCountAggregateInputType | true
    _min?: AutomodConfigMinAggregateInputType
    _max?: AutomodConfigMaxAggregateInputType
  }

  export type AutomodConfigGroupByOutputType = {
    id: string
    active: boolean
    profanity: boolean
    matureContent: boolean
    links: boolean
    ignoredChannels: string[]
    approvedLinks: string[]
    guildId: string
    _count: AutomodConfigCountAggregateOutputType | null
    _min: AutomodConfigMinAggregateOutputType | null
    _max: AutomodConfigMaxAggregateOutputType | null
  }

  type GetAutomodConfigGroupByPayload<T extends AutomodConfigGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AutomodConfigGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AutomodConfigGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AutomodConfigGroupByOutputType[P]>
            : GetScalarType<T[P], AutomodConfigGroupByOutputType[P]>
        }
      >
    >


  export type AutomodConfigSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    active?: boolean
    profanity?: boolean
    matureContent?: boolean
    links?: boolean
    ignoredChannels?: boolean
    approvedLinks?: boolean
    guildId?: boolean
    guild?: boolean | ServersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["automodConfig"]>

  export type AutomodConfigSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    active?: boolean
    profanity?: boolean
    matureContent?: boolean
    links?: boolean
    ignoredChannels?: boolean
    approvedLinks?: boolean
    guildId?: boolean
    guild?: boolean | ServersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["automodConfig"]>

  export type AutomodConfigSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    active?: boolean
    profanity?: boolean
    matureContent?: boolean
    links?: boolean
    ignoredChannels?: boolean
    approvedLinks?: boolean
    guildId?: boolean
    guild?: boolean | ServersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["automodConfig"]>

  export type AutomodConfigSelectScalar = {
    id?: boolean
    active?: boolean
    profanity?: boolean
    matureContent?: boolean
    links?: boolean
    ignoredChannels?: boolean
    approvedLinks?: boolean
    guildId?: boolean
  }

  export type AutomodConfigOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "active" | "profanity" | "matureContent" | "links" | "ignoredChannels" | "approvedLinks" | "guildId", ExtArgs["result"]["automodConfig"]>
  export type AutomodConfigInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guild?: boolean | ServersDefaultArgs<ExtArgs>
  }
  export type AutomodConfigIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guild?: boolean | ServersDefaultArgs<ExtArgs>
  }
  export type AutomodConfigIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guild?: boolean | ServersDefaultArgs<ExtArgs>
  }

  export type $AutomodConfigPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AutomodConfig"
    objects: {
      guild: Prisma.$ServersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      active: boolean
      profanity: boolean
      matureContent: boolean
      links: boolean
      ignoredChannels: string[]
      approvedLinks: string[]
      guildId: string
    }, ExtArgs["result"]["automodConfig"]>
    composites: {}
  }

  type AutomodConfigGetPayload<S extends boolean | null | undefined | AutomodConfigDefaultArgs> = $Result.GetResult<Prisma.$AutomodConfigPayload, S>

  type AutomodConfigCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AutomodConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AutomodConfigCountAggregateInputType | true
    }

  export interface AutomodConfigDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AutomodConfig'], meta: { name: 'AutomodConfig' } }
    /**
     * Find zero or one AutomodConfig that matches the filter.
     * @param {AutomodConfigFindUniqueArgs} args - Arguments to find a AutomodConfig
     * @example
     * // Get one AutomodConfig
     * const automodConfig = await prisma.automodConfig.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AutomodConfigFindUniqueArgs>(args: SelectSubset<T, AutomodConfigFindUniqueArgs<ExtArgs>>): Prisma__AutomodConfigClient<$Result.GetResult<Prisma.$AutomodConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AutomodConfig that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AutomodConfigFindUniqueOrThrowArgs} args - Arguments to find a AutomodConfig
     * @example
     * // Get one AutomodConfig
     * const automodConfig = await prisma.automodConfig.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AutomodConfigFindUniqueOrThrowArgs>(args: SelectSubset<T, AutomodConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AutomodConfigClient<$Result.GetResult<Prisma.$AutomodConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AutomodConfig that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutomodConfigFindFirstArgs} args - Arguments to find a AutomodConfig
     * @example
     * // Get one AutomodConfig
     * const automodConfig = await prisma.automodConfig.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AutomodConfigFindFirstArgs>(args?: SelectSubset<T, AutomodConfigFindFirstArgs<ExtArgs>>): Prisma__AutomodConfigClient<$Result.GetResult<Prisma.$AutomodConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AutomodConfig that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutomodConfigFindFirstOrThrowArgs} args - Arguments to find a AutomodConfig
     * @example
     * // Get one AutomodConfig
     * const automodConfig = await prisma.automodConfig.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AutomodConfigFindFirstOrThrowArgs>(args?: SelectSubset<T, AutomodConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma__AutomodConfigClient<$Result.GetResult<Prisma.$AutomodConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AutomodConfigs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutomodConfigFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AutomodConfigs
     * const automodConfigs = await prisma.automodConfig.findMany()
     * 
     * // Get first 10 AutomodConfigs
     * const automodConfigs = await prisma.automodConfig.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const automodConfigWithIdOnly = await prisma.automodConfig.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AutomodConfigFindManyArgs>(args?: SelectSubset<T, AutomodConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AutomodConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AutomodConfig.
     * @param {AutomodConfigCreateArgs} args - Arguments to create a AutomodConfig.
     * @example
     * // Create one AutomodConfig
     * const AutomodConfig = await prisma.automodConfig.create({
     *   data: {
     *     // ... data to create a AutomodConfig
     *   }
     * })
     * 
     */
    create<T extends AutomodConfigCreateArgs>(args: SelectSubset<T, AutomodConfigCreateArgs<ExtArgs>>): Prisma__AutomodConfigClient<$Result.GetResult<Prisma.$AutomodConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AutomodConfigs.
     * @param {AutomodConfigCreateManyArgs} args - Arguments to create many AutomodConfigs.
     * @example
     * // Create many AutomodConfigs
     * const automodConfig = await prisma.automodConfig.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AutomodConfigCreateManyArgs>(args?: SelectSubset<T, AutomodConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AutomodConfigs and returns the data saved in the database.
     * @param {AutomodConfigCreateManyAndReturnArgs} args - Arguments to create many AutomodConfigs.
     * @example
     * // Create many AutomodConfigs
     * const automodConfig = await prisma.automodConfig.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AutomodConfigs and only return the `id`
     * const automodConfigWithIdOnly = await prisma.automodConfig.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AutomodConfigCreateManyAndReturnArgs>(args?: SelectSubset<T, AutomodConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AutomodConfigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AutomodConfig.
     * @param {AutomodConfigDeleteArgs} args - Arguments to delete one AutomodConfig.
     * @example
     * // Delete one AutomodConfig
     * const AutomodConfig = await prisma.automodConfig.delete({
     *   where: {
     *     // ... filter to delete one AutomodConfig
     *   }
     * })
     * 
     */
    delete<T extends AutomodConfigDeleteArgs>(args: SelectSubset<T, AutomodConfigDeleteArgs<ExtArgs>>): Prisma__AutomodConfigClient<$Result.GetResult<Prisma.$AutomodConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AutomodConfig.
     * @param {AutomodConfigUpdateArgs} args - Arguments to update one AutomodConfig.
     * @example
     * // Update one AutomodConfig
     * const automodConfig = await prisma.automodConfig.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AutomodConfigUpdateArgs>(args: SelectSubset<T, AutomodConfigUpdateArgs<ExtArgs>>): Prisma__AutomodConfigClient<$Result.GetResult<Prisma.$AutomodConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AutomodConfigs.
     * @param {AutomodConfigDeleteManyArgs} args - Arguments to filter AutomodConfigs to delete.
     * @example
     * // Delete a few AutomodConfigs
     * const { count } = await prisma.automodConfig.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AutomodConfigDeleteManyArgs>(args?: SelectSubset<T, AutomodConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AutomodConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutomodConfigUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AutomodConfigs
     * const automodConfig = await prisma.automodConfig.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AutomodConfigUpdateManyArgs>(args: SelectSubset<T, AutomodConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AutomodConfigs and returns the data updated in the database.
     * @param {AutomodConfigUpdateManyAndReturnArgs} args - Arguments to update many AutomodConfigs.
     * @example
     * // Update many AutomodConfigs
     * const automodConfig = await prisma.automodConfig.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AutomodConfigs and only return the `id`
     * const automodConfigWithIdOnly = await prisma.automodConfig.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AutomodConfigUpdateManyAndReturnArgs>(args: SelectSubset<T, AutomodConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AutomodConfigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AutomodConfig.
     * @param {AutomodConfigUpsertArgs} args - Arguments to update or create a AutomodConfig.
     * @example
     * // Update or create a AutomodConfig
     * const automodConfig = await prisma.automodConfig.upsert({
     *   create: {
     *     // ... data to create a AutomodConfig
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AutomodConfig we want to update
     *   }
     * })
     */
    upsert<T extends AutomodConfigUpsertArgs>(args: SelectSubset<T, AutomodConfigUpsertArgs<ExtArgs>>): Prisma__AutomodConfigClient<$Result.GetResult<Prisma.$AutomodConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AutomodConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutomodConfigCountArgs} args - Arguments to filter AutomodConfigs to count.
     * @example
     * // Count the number of AutomodConfigs
     * const count = await prisma.automodConfig.count({
     *   where: {
     *     // ... the filter for the AutomodConfigs we want to count
     *   }
     * })
    **/
    count<T extends AutomodConfigCountArgs>(
      args?: Subset<T, AutomodConfigCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AutomodConfigCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AutomodConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutomodConfigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AutomodConfigAggregateArgs>(args: Subset<T, AutomodConfigAggregateArgs>): Prisma.PrismaPromise<GetAutomodConfigAggregateType<T>>

    /**
     * Group by AutomodConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutomodConfigGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AutomodConfigGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AutomodConfigGroupByArgs['orderBy'] }
        : { orderBy?: AutomodConfigGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AutomodConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAutomodConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AutomodConfig model
   */
  readonly fields: AutomodConfigFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AutomodConfig.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AutomodConfigClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    guild<T extends ServersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServersDefaultArgs<ExtArgs>>): Prisma__ServersClient<$Result.GetResult<Prisma.$ServersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AutomodConfig model
   */
  interface AutomodConfigFieldRefs {
    readonly id: FieldRef<"AutomodConfig", 'String'>
    readonly active: FieldRef<"AutomodConfig", 'Boolean'>
    readonly profanity: FieldRef<"AutomodConfig", 'Boolean'>
    readonly matureContent: FieldRef<"AutomodConfig", 'Boolean'>
    readonly links: FieldRef<"AutomodConfig", 'Boolean'>
    readonly ignoredChannels: FieldRef<"AutomodConfig", 'String[]'>
    readonly approvedLinks: FieldRef<"AutomodConfig", 'String[]'>
    readonly guildId: FieldRef<"AutomodConfig", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AutomodConfig findUnique
   */
  export type AutomodConfigFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutomodConfig
     */
    select?: AutomodConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutomodConfig
     */
    omit?: AutomodConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomodConfigInclude<ExtArgs> | null
    /**
     * Filter, which AutomodConfig to fetch.
     */
    where: AutomodConfigWhereUniqueInput
  }

  /**
   * AutomodConfig findUniqueOrThrow
   */
  export type AutomodConfigFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutomodConfig
     */
    select?: AutomodConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutomodConfig
     */
    omit?: AutomodConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomodConfigInclude<ExtArgs> | null
    /**
     * Filter, which AutomodConfig to fetch.
     */
    where: AutomodConfigWhereUniqueInput
  }

  /**
   * AutomodConfig findFirst
   */
  export type AutomodConfigFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutomodConfig
     */
    select?: AutomodConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutomodConfig
     */
    omit?: AutomodConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomodConfigInclude<ExtArgs> | null
    /**
     * Filter, which AutomodConfig to fetch.
     */
    where?: AutomodConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AutomodConfigs to fetch.
     */
    orderBy?: AutomodConfigOrderByWithRelationInput | AutomodConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AutomodConfigs.
     */
    cursor?: AutomodConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AutomodConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AutomodConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AutomodConfigs.
     */
    distinct?: AutomodConfigScalarFieldEnum | AutomodConfigScalarFieldEnum[]
  }

  /**
   * AutomodConfig findFirstOrThrow
   */
  export type AutomodConfigFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutomodConfig
     */
    select?: AutomodConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutomodConfig
     */
    omit?: AutomodConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomodConfigInclude<ExtArgs> | null
    /**
     * Filter, which AutomodConfig to fetch.
     */
    where?: AutomodConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AutomodConfigs to fetch.
     */
    orderBy?: AutomodConfigOrderByWithRelationInput | AutomodConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AutomodConfigs.
     */
    cursor?: AutomodConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AutomodConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AutomodConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AutomodConfigs.
     */
    distinct?: AutomodConfigScalarFieldEnum | AutomodConfigScalarFieldEnum[]
  }

  /**
   * AutomodConfig findMany
   */
  export type AutomodConfigFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutomodConfig
     */
    select?: AutomodConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutomodConfig
     */
    omit?: AutomodConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomodConfigInclude<ExtArgs> | null
    /**
     * Filter, which AutomodConfigs to fetch.
     */
    where?: AutomodConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AutomodConfigs to fetch.
     */
    orderBy?: AutomodConfigOrderByWithRelationInput | AutomodConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AutomodConfigs.
     */
    cursor?: AutomodConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AutomodConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AutomodConfigs.
     */
    skip?: number
    distinct?: AutomodConfigScalarFieldEnum | AutomodConfigScalarFieldEnum[]
  }

  /**
   * AutomodConfig create
   */
  export type AutomodConfigCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutomodConfig
     */
    select?: AutomodConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutomodConfig
     */
    omit?: AutomodConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomodConfigInclude<ExtArgs> | null
    /**
     * The data needed to create a AutomodConfig.
     */
    data: XOR<AutomodConfigCreateInput, AutomodConfigUncheckedCreateInput>
  }

  /**
   * AutomodConfig createMany
   */
  export type AutomodConfigCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AutomodConfigs.
     */
    data: AutomodConfigCreateManyInput | AutomodConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AutomodConfig createManyAndReturn
   */
  export type AutomodConfigCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutomodConfig
     */
    select?: AutomodConfigSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AutomodConfig
     */
    omit?: AutomodConfigOmit<ExtArgs> | null
    /**
     * The data used to create many AutomodConfigs.
     */
    data: AutomodConfigCreateManyInput | AutomodConfigCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomodConfigIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AutomodConfig update
   */
  export type AutomodConfigUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutomodConfig
     */
    select?: AutomodConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutomodConfig
     */
    omit?: AutomodConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomodConfigInclude<ExtArgs> | null
    /**
     * The data needed to update a AutomodConfig.
     */
    data: XOR<AutomodConfigUpdateInput, AutomodConfigUncheckedUpdateInput>
    /**
     * Choose, which AutomodConfig to update.
     */
    where: AutomodConfigWhereUniqueInput
  }

  /**
   * AutomodConfig updateMany
   */
  export type AutomodConfigUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AutomodConfigs.
     */
    data: XOR<AutomodConfigUpdateManyMutationInput, AutomodConfigUncheckedUpdateManyInput>
    /**
     * Filter which AutomodConfigs to update
     */
    where?: AutomodConfigWhereInput
    /**
     * Limit how many AutomodConfigs to update.
     */
    limit?: number
  }

  /**
   * AutomodConfig updateManyAndReturn
   */
  export type AutomodConfigUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutomodConfig
     */
    select?: AutomodConfigSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AutomodConfig
     */
    omit?: AutomodConfigOmit<ExtArgs> | null
    /**
     * The data used to update AutomodConfigs.
     */
    data: XOR<AutomodConfigUpdateManyMutationInput, AutomodConfigUncheckedUpdateManyInput>
    /**
     * Filter which AutomodConfigs to update
     */
    where?: AutomodConfigWhereInput
    /**
     * Limit how many AutomodConfigs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomodConfigIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AutomodConfig upsert
   */
  export type AutomodConfigUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutomodConfig
     */
    select?: AutomodConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutomodConfig
     */
    omit?: AutomodConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomodConfigInclude<ExtArgs> | null
    /**
     * The filter to search for the AutomodConfig to update in case it exists.
     */
    where: AutomodConfigWhereUniqueInput
    /**
     * In case the AutomodConfig found by the `where` argument doesn't exist, create a new AutomodConfig with this data.
     */
    create: XOR<AutomodConfigCreateInput, AutomodConfigUncheckedCreateInput>
    /**
     * In case the AutomodConfig was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AutomodConfigUpdateInput, AutomodConfigUncheckedUpdateInput>
  }

  /**
   * AutomodConfig delete
   */
  export type AutomodConfigDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutomodConfig
     */
    select?: AutomodConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutomodConfig
     */
    omit?: AutomodConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomodConfigInclude<ExtArgs> | null
    /**
     * Filter which AutomodConfig to delete.
     */
    where: AutomodConfigWhereUniqueInput
  }

  /**
   * AutomodConfig deleteMany
   */
  export type AutomodConfigDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AutomodConfigs to delete
     */
    where?: AutomodConfigWhereInput
    /**
     * Limit how many AutomodConfigs to delete.
     */
    limit?: number
  }

  /**
   * AutomodConfig without action
   */
  export type AutomodConfigDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutomodConfig
     */
    select?: AutomodConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutomodConfig
     */
    omit?: AutomodConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomodConfigInclude<ExtArgs> | null
  }


  /**
   * Model Testimonials
   */

  export type AggregateTestimonials = {
    _count: TestimonialsCountAggregateOutputType | null
    _avg: TestimonialsAvgAggregateOutputType | null
    _sum: TestimonialsSumAggregateOutputType | null
    _min: TestimonialsMinAggregateOutputType | null
    _max: TestimonialsMaxAggregateOutputType | null
  }

  export type TestimonialsAvgAggregateOutputType = {
    rating: number | null
  }

  export type TestimonialsSumAggregateOutputType = {
    rating: number | null
  }

  export type TestimonialsMinAggregateOutputType = {
    id: string | null
    username: string | null
    displayName: string | null
    userImg: string | null
    userId: string | null
    rating: number | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TestimonialsMaxAggregateOutputType = {
    id: string | null
    username: string | null
    displayName: string | null
    userImg: string | null
    userId: string | null
    rating: number | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TestimonialsCountAggregateOutputType = {
    id: number
    username: number
    displayName: number
    userImg: number
    userId: number
    rating: number
    content: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TestimonialsAvgAggregateInputType = {
    rating?: true
  }

  export type TestimonialsSumAggregateInputType = {
    rating?: true
  }

  export type TestimonialsMinAggregateInputType = {
    id?: true
    username?: true
    displayName?: true
    userImg?: true
    userId?: true
    rating?: true
    content?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TestimonialsMaxAggregateInputType = {
    id?: true
    username?: true
    displayName?: true
    userImg?: true
    userId?: true
    rating?: true
    content?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TestimonialsCountAggregateInputType = {
    id?: true
    username?: true
    displayName?: true
    userImg?: true
    userId?: true
    rating?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TestimonialsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Testimonials to aggregate.
     */
    where?: TestimonialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Testimonials to fetch.
     */
    orderBy?: TestimonialsOrderByWithRelationInput | TestimonialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TestimonialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Testimonials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Testimonials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Testimonials
    **/
    _count?: true | TestimonialsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TestimonialsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TestimonialsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TestimonialsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TestimonialsMaxAggregateInputType
  }

  export type GetTestimonialsAggregateType<T extends TestimonialsAggregateArgs> = {
        [P in keyof T & keyof AggregateTestimonials]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTestimonials[P]>
      : GetScalarType<T[P], AggregateTestimonials[P]>
  }




  export type TestimonialsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestimonialsWhereInput
    orderBy?: TestimonialsOrderByWithAggregationInput | TestimonialsOrderByWithAggregationInput[]
    by: TestimonialsScalarFieldEnum[] | TestimonialsScalarFieldEnum
    having?: TestimonialsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TestimonialsCountAggregateInputType | true
    _avg?: TestimonialsAvgAggregateInputType
    _sum?: TestimonialsSumAggregateInputType
    _min?: TestimonialsMinAggregateInputType
    _max?: TestimonialsMaxAggregateInputType
  }

  export type TestimonialsGroupByOutputType = {
    id: string
    username: string
    displayName: string
    userImg: string
    userId: string | null
    rating: number
    content: string
    createdAt: Date
    updatedAt: Date
    _count: TestimonialsCountAggregateOutputType | null
    _avg: TestimonialsAvgAggregateOutputType | null
    _sum: TestimonialsSumAggregateOutputType | null
    _min: TestimonialsMinAggregateOutputType | null
    _max: TestimonialsMaxAggregateOutputType | null
  }

  type GetTestimonialsGroupByPayload<T extends TestimonialsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TestimonialsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TestimonialsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TestimonialsGroupByOutputType[P]>
            : GetScalarType<T[P], TestimonialsGroupByOutputType[P]>
        }
      >
    >


  export type TestimonialsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    displayName?: boolean
    userImg?: boolean
    userId?: boolean
    rating?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["testimonials"]>

  export type TestimonialsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    displayName?: boolean
    userImg?: boolean
    userId?: boolean
    rating?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["testimonials"]>

  export type TestimonialsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    displayName?: boolean
    userImg?: boolean
    userId?: boolean
    rating?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["testimonials"]>

  export type TestimonialsSelectScalar = {
    id?: boolean
    username?: boolean
    displayName?: boolean
    userImg?: boolean
    userId?: boolean
    rating?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TestimonialsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "displayName" | "userImg" | "userId" | "rating" | "content" | "createdAt" | "updatedAt", ExtArgs["result"]["testimonials"]>

  export type $TestimonialsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Testimonials"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      displayName: string
      userImg: string
      userId: string | null
      rating: number
      content: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["testimonials"]>
    composites: {}
  }

  type TestimonialsGetPayload<S extends boolean | null | undefined | TestimonialsDefaultArgs> = $Result.GetResult<Prisma.$TestimonialsPayload, S>

  type TestimonialsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TestimonialsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TestimonialsCountAggregateInputType | true
    }

  export interface TestimonialsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Testimonials'], meta: { name: 'Testimonials' } }
    /**
     * Find zero or one Testimonials that matches the filter.
     * @param {TestimonialsFindUniqueArgs} args - Arguments to find a Testimonials
     * @example
     * // Get one Testimonials
     * const testimonials = await prisma.testimonials.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TestimonialsFindUniqueArgs>(args: SelectSubset<T, TestimonialsFindUniqueArgs<ExtArgs>>): Prisma__TestimonialsClient<$Result.GetResult<Prisma.$TestimonialsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Testimonials that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TestimonialsFindUniqueOrThrowArgs} args - Arguments to find a Testimonials
     * @example
     * // Get one Testimonials
     * const testimonials = await prisma.testimonials.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TestimonialsFindUniqueOrThrowArgs>(args: SelectSubset<T, TestimonialsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TestimonialsClient<$Result.GetResult<Prisma.$TestimonialsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Testimonials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestimonialsFindFirstArgs} args - Arguments to find a Testimonials
     * @example
     * // Get one Testimonials
     * const testimonials = await prisma.testimonials.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TestimonialsFindFirstArgs>(args?: SelectSubset<T, TestimonialsFindFirstArgs<ExtArgs>>): Prisma__TestimonialsClient<$Result.GetResult<Prisma.$TestimonialsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Testimonials that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestimonialsFindFirstOrThrowArgs} args - Arguments to find a Testimonials
     * @example
     * // Get one Testimonials
     * const testimonials = await prisma.testimonials.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TestimonialsFindFirstOrThrowArgs>(args?: SelectSubset<T, TestimonialsFindFirstOrThrowArgs<ExtArgs>>): Prisma__TestimonialsClient<$Result.GetResult<Prisma.$TestimonialsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Testimonials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestimonialsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Testimonials
     * const testimonials = await prisma.testimonials.findMany()
     * 
     * // Get first 10 Testimonials
     * const testimonials = await prisma.testimonials.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const testimonialsWithIdOnly = await prisma.testimonials.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TestimonialsFindManyArgs>(args?: SelectSubset<T, TestimonialsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestimonialsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Testimonials.
     * @param {TestimonialsCreateArgs} args - Arguments to create a Testimonials.
     * @example
     * // Create one Testimonials
     * const Testimonials = await prisma.testimonials.create({
     *   data: {
     *     // ... data to create a Testimonials
     *   }
     * })
     * 
     */
    create<T extends TestimonialsCreateArgs>(args: SelectSubset<T, TestimonialsCreateArgs<ExtArgs>>): Prisma__TestimonialsClient<$Result.GetResult<Prisma.$TestimonialsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Testimonials.
     * @param {TestimonialsCreateManyArgs} args - Arguments to create many Testimonials.
     * @example
     * // Create many Testimonials
     * const testimonials = await prisma.testimonials.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TestimonialsCreateManyArgs>(args?: SelectSubset<T, TestimonialsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Testimonials and returns the data saved in the database.
     * @param {TestimonialsCreateManyAndReturnArgs} args - Arguments to create many Testimonials.
     * @example
     * // Create many Testimonials
     * const testimonials = await prisma.testimonials.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Testimonials and only return the `id`
     * const testimonialsWithIdOnly = await prisma.testimonials.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TestimonialsCreateManyAndReturnArgs>(args?: SelectSubset<T, TestimonialsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestimonialsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Testimonials.
     * @param {TestimonialsDeleteArgs} args - Arguments to delete one Testimonials.
     * @example
     * // Delete one Testimonials
     * const Testimonials = await prisma.testimonials.delete({
     *   where: {
     *     // ... filter to delete one Testimonials
     *   }
     * })
     * 
     */
    delete<T extends TestimonialsDeleteArgs>(args: SelectSubset<T, TestimonialsDeleteArgs<ExtArgs>>): Prisma__TestimonialsClient<$Result.GetResult<Prisma.$TestimonialsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Testimonials.
     * @param {TestimonialsUpdateArgs} args - Arguments to update one Testimonials.
     * @example
     * // Update one Testimonials
     * const testimonials = await prisma.testimonials.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TestimonialsUpdateArgs>(args: SelectSubset<T, TestimonialsUpdateArgs<ExtArgs>>): Prisma__TestimonialsClient<$Result.GetResult<Prisma.$TestimonialsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Testimonials.
     * @param {TestimonialsDeleteManyArgs} args - Arguments to filter Testimonials to delete.
     * @example
     * // Delete a few Testimonials
     * const { count } = await prisma.testimonials.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TestimonialsDeleteManyArgs>(args?: SelectSubset<T, TestimonialsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Testimonials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestimonialsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Testimonials
     * const testimonials = await prisma.testimonials.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TestimonialsUpdateManyArgs>(args: SelectSubset<T, TestimonialsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Testimonials and returns the data updated in the database.
     * @param {TestimonialsUpdateManyAndReturnArgs} args - Arguments to update many Testimonials.
     * @example
     * // Update many Testimonials
     * const testimonials = await prisma.testimonials.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Testimonials and only return the `id`
     * const testimonialsWithIdOnly = await prisma.testimonials.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TestimonialsUpdateManyAndReturnArgs>(args: SelectSubset<T, TestimonialsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestimonialsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Testimonials.
     * @param {TestimonialsUpsertArgs} args - Arguments to update or create a Testimonials.
     * @example
     * // Update or create a Testimonials
     * const testimonials = await prisma.testimonials.upsert({
     *   create: {
     *     // ... data to create a Testimonials
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Testimonials we want to update
     *   }
     * })
     */
    upsert<T extends TestimonialsUpsertArgs>(args: SelectSubset<T, TestimonialsUpsertArgs<ExtArgs>>): Prisma__TestimonialsClient<$Result.GetResult<Prisma.$TestimonialsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Testimonials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestimonialsCountArgs} args - Arguments to filter Testimonials to count.
     * @example
     * // Count the number of Testimonials
     * const count = await prisma.testimonials.count({
     *   where: {
     *     // ... the filter for the Testimonials we want to count
     *   }
     * })
    **/
    count<T extends TestimonialsCountArgs>(
      args?: Subset<T, TestimonialsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TestimonialsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Testimonials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestimonialsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TestimonialsAggregateArgs>(args: Subset<T, TestimonialsAggregateArgs>): Prisma.PrismaPromise<GetTestimonialsAggregateType<T>>

    /**
     * Group by Testimonials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestimonialsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TestimonialsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TestimonialsGroupByArgs['orderBy'] }
        : { orderBy?: TestimonialsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TestimonialsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestimonialsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Testimonials model
   */
  readonly fields: TestimonialsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Testimonials.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TestimonialsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Testimonials model
   */
  interface TestimonialsFieldRefs {
    readonly id: FieldRef<"Testimonials", 'String'>
    readonly username: FieldRef<"Testimonials", 'String'>
    readonly displayName: FieldRef<"Testimonials", 'String'>
    readonly userImg: FieldRef<"Testimonials", 'String'>
    readonly userId: FieldRef<"Testimonials", 'String'>
    readonly rating: FieldRef<"Testimonials", 'Int'>
    readonly content: FieldRef<"Testimonials", 'String'>
    readonly createdAt: FieldRef<"Testimonials", 'DateTime'>
    readonly updatedAt: FieldRef<"Testimonials", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Testimonials findUnique
   */
  export type TestimonialsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonials
     */
    select?: TestimonialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonials
     */
    omit?: TestimonialsOmit<ExtArgs> | null
    /**
     * Filter, which Testimonials to fetch.
     */
    where: TestimonialsWhereUniqueInput
  }

  /**
   * Testimonials findUniqueOrThrow
   */
  export type TestimonialsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonials
     */
    select?: TestimonialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonials
     */
    omit?: TestimonialsOmit<ExtArgs> | null
    /**
     * Filter, which Testimonials to fetch.
     */
    where: TestimonialsWhereUniqueInput
  }

  /**
   * Testimonials findFirst
   */
  export type TestimonialsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonials
     */
    select?: TestimonialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonials
     */
    omit?: TestimonialsOmit<ExtArgs> | null
    /**
     * Filter, which Testimonials to fetch.
     */
    where?: TestimonialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Testimonials to fetch.
     */
    orderBy?: TestimonialsOrderByWithRelationInput | TestimonialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Testimonials.
     */
    cursor?: TestimonialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Testimonials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Testimonials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Testimonials.
     */
    distinct?: TestimonialsScalarFieldEnum | TestimonialsScalarFieldEnum[]
  }

  /**
   * Testimonials findFirstOrThrow
   */
  export type TestimonialsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonials
     */
    select?: TestimonialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonials
     */
    omit?: TestimonialsOmit<ExtArgs> | null
    /**
     * Filter, which Testimonials to fetch.
     */
    where?: TestimonialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Testimonials to fetch.
     */
    orderBy?: TestimonialsOrderByWithRelationInput | TestimonialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Testimonials.
     */
    cursor?: TestimonialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Testimonials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Testimonials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Testimonials.
     */
    distinct?: TestimonialsScalarFieldEnum | TestimonialsScalarFieldEnum[]
  }

  /**
   * Testimonials findMany
   */
  export type TestimonialsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonials
     */
    select?: TestimonialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonials
     */
    omit?: TestimonialsOmit<ExtArgs> | null
    /**
     * Filter, which Testimonials to fetch.
     */
    where?: TestimonialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Testimonials to fetch.
     */
    orderBy?: TestimonialsOrderByWithRelationInput | TestimonialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Testimonials.
     */
    cursor?: TestimonialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Testimonials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Testimonials.
     */
    skip?: number
    distinct?: TestimonialsScalarFieldEnum | TestimonialsScalarFieldEnum[]
  }

  /**
   * Testimonials create
   */
  export type TestimonialsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonials
     */
    select?: TestimonialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonials
     */
    omit?: TestimonialsOmit<ExtArgs> | null
    /**
     * The data needed to create a Testimonials.
     */
    data: XOR<TestimonialsCreateInput, TestimonialsUncheckedCreateInput>
  }

  /**
   * Testimonials createMany
   */
  export type TestimonialsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Testimonials.
     */
    data: TestimonialsCreateManyInput | TestimonialsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Testimonials createManyAndReturn
   */
  export type TestimonialsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonials
     */
    select?: TestimonialsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonials
     */
    omit?: TestimonialsOmit<ExtArgs> | null
    /**
     * The data used to create many Testimonials.
     */
    data: TestimonialsCreateManyInput | TestimonialsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Testimonials update
   */
  export type TestimonialsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonials
     */
    select?: TestimonialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonials
     */
    omit?: TestimonialsOmit<ExtArgs> | null
    /**
     * The data needed to update a Testimonials.
     */
    data: XOR<TestimonialsUpdateInput, TestimonialsUncheckedUpdateInput>
    /**
     * Choose, which Testimonials to update.
     */
    where: TestimonialsWhereUniqueInput
  }

  /**
   * Testimonials updateMany
   */
  export type TestimonialsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Testimonials.
     */
    data: XOR<TestimonialsUpdateManyMutationInput, TestimonialsUncheckedUpdateManyInput>
    /**
     * Filter which Testimonials to update
     */
    where?: TestimonialsWhereInput
    /**
     * Limit how many Testimonials to update.
     */
    limit?: number
  }

  /**
   * Testimonials updateManyAndReturn
   */
  export type TestimonialsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonials
     */
    select?: TestimonialsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonials
     */
    omit?: TestimonialsOmit<ExtArgs> | null
    /**
     * The data used to update Testimonials.
     */
    data: XOR<TestimonialsUpdateManyMutationInput, TestimonialsUncheckedUpdateManyInput>
    /**
     * Filter which Testimonials to update
     */
    where?: TestimonialsWhereInput
    /**
     * Limit how many Testimonials to update.
     */
    limit?: number
  }

  /**
   * Testimonials upsert
   */
  export type TestimonialsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonials
     */
    select?: TestimonialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonials
     */
    omit?: TestimonialsOmit<ExtArgs> | null
    /**
     * The filter to search for the Testimonials to update in case it exists.
     */
    where: TestimonialsWhereUniqueInput
    /**
     * In case the Testimonials found by the `where` argument doesn't exist, create a new Testimonials with this data.
     */
    create: XOR<TestimonialsCreateInput, TestimonialsUncheckedCreateInput>
    /**
     * In case the Testimonials was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TestimonialsUpdateInput, TestimonialsUncheckedUpdateInput>
  }

  /**
   * Testimonials delete
   */
  export type TestimonialsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonials
     */
    select?: TestimonialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonials
     */
    omit?: TestimonialsOmit<ExtArgs> | null
    /**
     * Filter which Testimonials to delete.
     */
    where: TestimonialsWhereUniqueInput
  }

  /**
   * Testimonials deleteMany
   */
  export type TestimonialsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Testimonials to delete
     */
    where?: TestimonialsWhereInput
    /**
     * Limit how many Testimonials to delete.
     */
    limit?: number
  }

  /**
   * Testimonials without action
   */
  export type TestimonialsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonials
     */
    select?: TestimonialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonials
     */
    omit?: TestimonialsOmit<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: boolean | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
    lastLoginMethod: string | null
    username: string | null
    locale: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: boolean | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
    lastLoginMethod: string | null
    username: string | null
    locale: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    image: number
    createdAt: number
    updatedAt: number
    lastLoginMethod: number
    username: number
    locale: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    lastLoginMethod?: true
    username?: true
    locale?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    lastLoginMethod?: true
    username?: true
    locale?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    lastLoginMethod?: true
    username?: true
    locale?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image: string | null
    createdAt: Date
    updatedAt: Date
    lastLoginMethod: string | null
    username: string | null
    locale: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastLoginMethod?: boolean
    username?: boolean
    locale?: boolean
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastLoginMethod?: boolean
    username?: boolean
    locale?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastLoginMethod?: boolean
    username?: boolean
    locale?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastLoginMethod?: boolean
    username?: boolean
    locale?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "emailVerified" | "image" | "createdAt" | "updatedAt" | "lastLoginMethod" | "username" | "locale", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      accounts: Prisma.$AccountPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      emailVerified: boolean
      image: string | null
      createdAt: Date
      updatedAt: Date
      lastLoginMethod: string | null
      username: string | null
      locale: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'Boolean'>
    readonly image: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly lastLoginMethod: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly locale: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    expiresAt: Date | null
    token: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ipAddress: string | null
    userAgent: string | null
    userId: string | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    expiresAt: Date | null
    token: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ipAddress: string | null
    userAgent: string | null
    userId: string | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    expiresAt: number
    token: number
    createdAt: number
    updatedAt: number
    ipAddress: number
    userAgent: number
    userId: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    expiresAt: Date
    token: string
    createdAt: Date
    updatedAt: Date
    ipAddress: string | null
    userAgent: string | null
    userId: string
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "expiresAt" | "token" | "createdAt" | "updatedAt" | "ipAddress" | "userAgent" | "userId", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      expiresAt: Date
      token: string
      createdAt: Date
      updatedAt: Date
      ipAddress: string | null
      userAgent: string | null
      userId: string
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly expiresAt: FieldRef<"Session", 'DateTime'>
    readonly token: FieldRef<"Session", 'String'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
    readonly updatedAt: FieldRef<"Session", 'DateTime'>
    readonly ipAddress: FieldRef<"Session", 'String'>
    readonly userAgent: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    accountId: string | null
    providerId: string | null
    userId: string | null
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    accountId: string | null
    providerId: string | null
    userId: string | null
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    accountId: number
    providerId: number
    userId: number
    accessToken: number
    refreshToken: number
    idToken: number
    accessTokenExpiresAt: number
    refreshTokenExpiresAt: number
    scope: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountMinAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date
    updatedAt: Date
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "accountId" | "providerId" | "userId" | "accessToken" | "refreshToken" | "idToken" | "accessTokenExpiresAt" | "refreshTokenExpiresAt" | "scope" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      accountId: string
      providerId: string
      userId: string
      accessToken: string | null
      refreshToken: string | null
      idToken: string | null
      accessTokenExpiresAt: Date | null
      refreshTokenExpiresAt: Date | null
      scope: string | null
      password: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly accountId: FieldRef<"Account", 'String'>
    readonly providerId: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly accessToken: FieldRef<"Account", 'String'>
    readonly refreshToken: FieldRef<"Account", 'String'>
    readonly idToken: FieldRef<"Account", 'String'>
    readonly accessTokenExpiresAt: FieldRef<"Account", 'DateTime'>
    readonly refreshTokenExpiresAt: FieldRef<"Account", 'DateTime'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly password: FieldRef<"Account", 'String'>
    readonly createdAt: FieldRef<"Account", 'DateTime'>
    readonly updatedAt: FieldRef<"Account", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Verification
   */

  export type AggregateVerification = {
    _count: VerificationCountAggregateOutputType | null
    _min: VerificationMinAggregateOutputType | null
    _max: VerificationMaxAggregateOutputType | null
  }

  export type VerificationMinAggregateOutputType = {
    id: string | null
    identifier: string | null
    value: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationMaxAggregateOutputType = {
    id: string | null
    identifier: string | null
    value: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationCountAggregateOutputType = {
    id: number
    identifier: number
    value: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VerificationMinAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationMaxAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationCountAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VerificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verification to aggregate.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Verifications
    **/
    _count?: true | VerificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationMaxAggregateInputType
  }

  export type GetVerificationAggregateType<T extends VerificationAggregateArgs> = {
        [P in keyof T & keyof AggregateVerification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerification[P]>
      : GetScalarType<T[P], AggregateVerification[P]>
  }




  export type VerificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationWhereInput
    orderBy?: VerificationOrderByWithAggregationInput | VerificationOrderByWithAggregationInput[]
    by: VerificationScalarFieldEnum[] | VerificationScalarFieldEnum
    having?: VerificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationCountAggregateInputType | true
    _min?: VerificationMinAggregateInputType
    _max?: VerificationMaxAggregateInputType
  }

  export type VerificationGroupByOutputType = {
    id: string
    identifier: string
    value: string
    expiresAt: Date
    createdAt: Date
    updatedAt: Date
    _count: VerificationCountAggregateOutputType | null
    _min: VerificationMinAggregateOutputType | null
    _max: VerificationMaxAggregateOutputType | null
  }

  type GetVerificationGroupByPayload<T extends VerificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationGroupByOutputType[P]>
        }
      >
    >


  export type VerificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectScalar = {
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VerificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "identifier" | "value" | "expiresAt" | "createdAt" | "updatedAt", ExtArgs["result"]["verification"]>

  export type $VerificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Verification"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      identifier: string
      value: string
      expiresAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["verification"]>
    composites: {}
  }

  type VerificationGetPayload<S extends boolean | null | undefined | VerificationDefaultArgs> = $Result.GetResult<Prisma.$VerificationPayload, S>

  type VerificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationCountAggregateInputType | true
    }

  export interface VerificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Verification'], meta: { name: 'Verification' } }
    /**
     * Find zero or one Verification that matches the filter.
     * @param {VerificationFindUniqueArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationFindUniqueArgs>(args: SelectSubset<T, VerificationFindUniqueArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Verification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationFindUniqueOrThrowArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindFirstArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationFindFirstArgs>(args?: SelectSubset<T, VerificationFindFirstArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindFirstOrThrowArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Verifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Verifications
     * const verifications = await prisma.verification.findMany()
     * 
     * // Get first 10 Verifications
     * const verifications = await prisma.verification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const verificationWithIdOnly = await prisma.verification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VerificationFindManyArgs>(args?: SelectSubset<T, VerificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Verification.
     * @param {VerificationCreateArgs} args - Arguments to create a Verification.
     * @example
     * // Create one Verification
     * const Verification = await prisma.verification.create({
     *   data: {
     *     // ... data to create a Verification
     *   }
     * })
     * 
     */
    create<T extends VerificationCreateArgs>(args: SelectSubset<T, VerificationCreateArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Verifications.
     * @param {VerificationCreateManyArgs} args - Arguments to create many Verifications.
     * @example
     * // Create many Verifications
     * const verification = await prisma.verification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationCreateManyArgs>(args?: SelectSubset<T, VerificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Verifications and returns the data saved in the database.
     * @param {VerificationCreateManyAndReturnArgs} args - Arguments to create many Verifications.
     * @example
     * // Create many Verifications
     * const verification = await prisma.verification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Verifications and only return the `id`
     * const verificationWithIdOnly = await prisma.verification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Verification.
     * @param {VerificationDeleteArgs} args - Arguments to delete one Verification.
     * @example
     * // Delete one Verification
     * const Verification = await prisma.verification.delete({
     *   where: {
     *     // ... filter to delete one Verification
     *   }
     * })
     * 
     */
    delete<T extends VerificationDeleteArgs>(args: SelectSubset<T, VerificationDeleteArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Verification.
     * @param {VerificationUpdateArgs} args - Arguments to update one Verification.
     * @example
     * // Update one Verification
     * const verification = await prisma.verification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationUpdateArgs>(args: SelectSubset<T, VerificationUpdateArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Verifications.
     * @param {VerificationDeleteManyArgs} args - Arguments to filter Verifications to delete.
     * @example
     * // Delete a few Verifications
     * const { count } = await prisma.verification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationDeleteManyArgs>(args?: SelectSubset<T, VerificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Verifications
     * const verification = await prisma.verification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationUpdateManyArgs>(args: SelectSubset<T, VerificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verifications and returns the data updated in the database.
     * @param {VerificationUpdateManyAndReturnArgs} args - Arguments to update many Verifications.
     * @example
     * // Update many Verifications
     * const verification = await prisma.verification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Verifications and only return the `id`
     * const verificationWithIdOnly = await prisma.verification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VerificationUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Verification.
     * @param {VerificationUpsertArgs} args - Arguments to update or create a Verification.
     * @example
     * // Update or create a Verification
     * const verification = await prisma.verification.upsert({
     *   create: {
     *     // ... data to create a Verification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Verification we want to update
     *   }
     * })
     */
    upsert<T extends VerificationUpsertArgs>(args: SelectSubset<T, VerificationUpsertArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCountArgs} args - Arguments to filter Verifications to count.
     * @example
     * // Count the number of Verifications
     * const count = await prisma.verification.count({
     *   where: {
     *     // ... the filter for the Verifications we want to count
     *   }
     * })
    **/
    count<T extends VerificationCountArgs>(
      args?: Subset<T, VerificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VerificationAggregateArgs>(args: Subset<T, VerificationAggregateArgs>): Prisma.PrismaPromise<GetVerificationAggregateType<T>>

    /**
     * Group by Verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VerificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationGroupByArgs['orderBy'] }
        : { orderBy?: VerificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VerificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Verification model
   */
  readonly fields: VerificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Verification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Verification model
   */
  interface VerificationFieldRefs {
    readonly id: FieldRef<"Verification", 'String'>
    readonly identifier: FieldRef<"Verification", 'String'>
    readonly value: FieldRef<"Verification", 'String'>
    readonly expiresAt: FieldRef<"Verification", 'DateTime'>
    readonly createdAt: FieldRef<"Verification", 'DateTime'>
    readonly updatedAt: FieldRef<"Verification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Verification findUnique
   */
  export type VerificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification findUniqueOrThrow
   */
  export type VerificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification findFirst
   */
  export type VerificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification findFirstOrThrow
   */
  export type VerificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification findMany
   */
  export type VerificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verifications to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification create
   */
  export type VerificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data needed to create a Verification.
     */
    data: XOR<VerificationCreateInput, VerificationUncheckedCreateInput>
  }

  /**
   * Verification createMany
   */
  export type VerificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Verifications.
     */
    data: VerificationCreateManyInput | VerificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Verification createManyAndReturn
   */
  export type VerificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data used to create many Verifications.
     */
    data: VerificationCreateManyInput | VerificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Verification update
   */
  export type VerificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data needed to update a Verification.
     */
    data: XOR<VerificationUpdateInput, VerificationUncheckedUpdateInput>
    /**
     * Choose, which Verification to update.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification updateMany
   */
  export type VerificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Verifications.
     */
    data: XOR<VerificationUpdateManyMutationInput, VerificationUncheckedUpdateManyInput>
    /**
     * Filter which Verifications to update
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to update.
     */
    limit?: number
  }

  /**
   * Verification updateManyAndReturn
   */
  export type VerificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data used to update Verifications.
     */
    data: XOR<VerificationUpdateManyMutationInput, VerificationUncheckedUpdateManyInput>
    /**
     * Filter which Verifications to update
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to update.
     */
    limit?: number
  }

  /**
   * Verification upsert
   */
  export type VerificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The filter to search for the Verification to update in case it exists.
     */
    where: VerificationWhereUniqueInput
    /**
     * In case the Verification found by the `where` argument doesn't exist, create a new Verification with this data.
     */
    create: XOR<VerificationCreateInput, VerificationUncheckedCreateInput>
    /**
     * In case the Verification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationUpdateInput, VerificationUncheckedUpdateInput>
  }

  /**
   * Verification delete
   */
  export type VerificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter which Verification to delete.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification deleteMany
   */
  export type VerificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verifications to delete
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to delete.
     */
    limit?: number
  }

  /**
   * Verification without action
   */
  export type VerificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsersScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    extId: 'extId',
    discordId: 'discordId',
    discordUsername: 'discordUsername',
    kickId: 'kickId',
    kickUsername: 'kickUsername',
    role: 'role',
    customerId: 'customerId',
    timezone: 'timezone',
    plan: 'plan'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const LimitsScalarFieldEnum: {
    id: 'id',
    date: 'date',
    aiUsed: 'aiUsed',
    aiLimit: 'aiLimit',
    additionalMessages: 'additionalMessages',
    premiumServers: 'premiumServers',
    premiumServerLimmit: 'premiumServerLimmit'
  };

  export type LimitsScalarFieldEnum = (typeof LimitsScalarFieldEnum)[keyof typeof LimitsScalarFieldEnum]


  export const ServersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    ownerId: 'ownerId',
    icon: 'icon',
    isPremium: 'isPremium',
    premiumAddedBy: 'premiumAddedBy',
    aiEnabled: 'aiEnabled',
    welcomeChannel: 'welcomeChannel',
    announcementChannel: 'announcementChannel',
    updatesChannel: 'updatesChannel',
    logsChannel: 'logsChannel',
    logLevel: 'logLevel',
    inviteLink: 'inviteLink',
    inviteCode: 'inviteCode',
    lastOpened: 'lastOpened',
    cleoPersonalityName: 'cleoPersonalityName',
    cleoPersonalityId: 'cleoPersonalityId'
  };

  export type ServersScalarFieldEnum = (typeof ServersScalarFieldEnum)[keyof typeof ServersScalarFieldEnum]


  export const PremiumSubscriptionsScalarFieldEnum: {
    id: 'id',
    tier: 'tier',
    startDate: 'startDate',
    endDate: 'endDate',
    source: 'source'
  };

  export type PremiumSubscriptionsScalarFieldEnum = (typeof PremiumSubscriptionsScalarFieldEnum)[keyof typeof PremiumSubscriptionsScalarFieldEnum]


  export const ServerSubscriptionsScalarFieldEnum: {
    id: 'id',
    startDate: 'startDate',
    endDate: 'endDate',
    source: 'source',
    subscriptionId: 'subscriptionId'
  };

  export type ServerSubscriptionsScalarFieldEnum = (typeof ServerSubscriptionsScalarFieldEnum)[keyof typeof ServerSubscriptionsScalarFieldEnum]


  export const ErrorLogScalarFieldEnum: {
    id: 'id',
    process: 'process',
    message: 'message',
    stackTrace: 'stackTrace',
    timestamp: 'timestamp'
  };

  export type ErrorLogScalarFieldEnum = (typeof ErrorLogScalarFieldEnum)[keyof typeof ErrorLogScalarFieldEnum]


  export const IncidentsScalarFieldEnum: {
    id: 'id',
    serverId: 'serverId',
    userId: 'userId',
    moderatorId: 'moderatorId',
    type: 'type',
    reason: 'reason',
    timestamp: 'timestamp',
    status: 'status'
  };

  export type IncidentsScalarFieldEnum = (typeof IncidentsScalarFieldEnum)[keyof typeof IncidentsScalarFieldEnum]


  export const ProductsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type'
  };

  export type ProductsScalarFieldEnum = (typeof ProductsScalarFieldEnum)[keyof typeof ProductsScalarFieldEnum]


  export const PricesScalarFieldEnum: {
    id: 'id',
    amount: 'amount',
    default: 'default',
    productId: 'productId'
  };

  export type PricesScalarFieldEnum = (typeof PricesScalarFieldEnum)[keyof typeof PricesScalarFieldEnum]


  export const AutomodConfigScalarFieldEnum: {
    id: 'id',
    active: 'active',
    profanity: 'profanity',
    matureContent: 'matureContent',
    links: 'links',
    ignoredChannels: 'ignoredChannels',
    approvedLinks: 'approvedLinks',
    guildId: 'guildId'
  };

  export type AutomodConfigScalarFieldEnum = (typeof AutomodConfigScalarFieldEnum)[keyof typeof AutomodConfigScalarFieldEnum]


  export const TestimonialsScalarFieldEnum: {
    id: 'id',
    username: 'username',
    displayName: 'displayName',
    userImg: 'userImg',
    userId: 'userId',
    rating: 'rating',
    content: 'content',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TestimonialsScalarFieldEnum = (typeof TestimonialsScalarFieldEnum)[keyof typeof TestimonialsScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    lastLoginMethod: 'lastLoginMethod',
    username: 'username',
    locale: 'locale'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    expiresAt: 'expiresAt',
    token: 'token',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    userId: 'userId'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    accountId: 'accountId',
    providerId: 'providerId',
    userId: 'userId',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    idToken: 'idToken',
    accessTokenExpiresAt: 'accessTokenExpiresAt',
    refreshTokenExpiresAt: 'refreshTokenExpiresAt',
    scope: 'scope',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const VerificationScalarFieldEnum: {
    id: 'id',
    identifier: 'identifier',
    value: 'value',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VerificationScalarFieldEnum = (typeof VerificationScalarFieldEnum)[keyof typeof VerificationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Plans'
   */
  export type EnumPlansFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Plans'>
    


  /**
   * Reference to a field of type 'Plans[]'
   */
  export type ListEnumPlansFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Plans[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'LogLevel'
   */
  export type EnumLogLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LogLevel'>
    


  /**
   * Reference to a field of type 'LogLevel[]'
   */
  export type ListEnumLogLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LogLevel[]'>
    


  /**
   * Reference to a field of type 'Sources'
   */
  export type EnumSourcesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Sources'>
    


  /**
   * Reference to a field of type 'Sources[]'
   */
  export type ListEnumSourcesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Sources[]'>
    


  /**
   * Reference to a field of type 'IncidentsType'
   */
  export type EnumIncidentsTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'IncidentsType'>
    


  /**
   * Reference to a field of type 'IncidentsType[]'
   */
  export type ListEnumIncidentsTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'IncidentsType[]'>
    


  /**
   * Reference to a field of type 'IncidentsStatus'
   */
  export type EnumIncidentsStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'IncidentsStatus'>
    


  /**
   * Reference to a field of type 'IncidentsStatus[]'
   */
  export type ListEnumIncidentsStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'IncidentsStatus[]'>
    


  /**
   * Reference to a field of type 'ProductType'
   */
  export type EnumProductTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProductType'>
    


  /**
   * Reference to a field of type 'ProductType[]'
   */
  export type ListEnumProductTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProductType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    id?: StringFilter<"Users"> | string
    username?: StringFilter<"Users"> | string
    email?: StringNullableFilter<"Users"> | string | null
    extId?: StringNullableFilter<"Users"> | string | null
    discordId?: StringNullableFilter<"Users"> | string | null
    discordUsername?: StringNullableFilter<"Users"> | string | null
    kickId?: StringNullableFilter<"Users"> | string | null
    kickUsername?: StringNullableFilter<"Users"> | string | null
    role?: EnumRoleFilter<"Users"> | $Enums.Role
    customerId?: StringNullableFilter<"Users"> | string | null
    timezone?: StringNullableFilter<"Users"> | string | null
    plan?: EnumPlansFilter<"Users"> | $Enums.Plans
    premiumSubscriptions?: XOR<PremiumSubscriptionsNullableScalarRelationFilter, PremiumSubscriptionsWhereInput> | null
    limits?: XOR<LimitsNullableScalarRelationFilter, LimitsWhereInput> | null
    premiumServers?: ServersListRelationFilter
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrderInput | SortOrder
    extId?: SortOrderInput | SortOrder
    discordId?: SortOrderInput | SortOrder
    discordUsername?: SortOrderInput | SortOrder
    kickId?: SortOrderInput | SortOrder
    kickUsername?: SortOrderInput | SortOrder
    role?: SortOrder
    customerId?: SortOrderInput | SortOrder
    timezone?: SortOrderInput | SortOrder
    plan?: SortOrder
    premiumSubscriptions?: PremiumSubscriptionsOrderByWithRelationInput
    limits?: LimitsOrderByWithRelationInput
    premiumServers?: ServersOrderByRelationAggregateInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    email?: string
    extId?: string
    discordId?: string
    kickId?: string
    customerId?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    discordUsername?: StringNullableFilter<"Users"> | string | null
    kickUsername?: StringNullableFilter<"Users"> | string | null
    role?: EnumRoleFilter<"Users"> | $Enums.Role
    timezone?: StringNullableFilter<"Users"> | string | null
    plan?: EnumPlansFilter<"Users"> | $Enums.Plans
    premiumSubscriptions?: XOR<PremiumSubscriptionsNullableScalarRelationFilter, PremiumSubscriptionsWhereInput> | null
    limits?: XOR<LimitsNullableScalarRelationFilter, LimitsWhereInput> | null
    premiumServers?: ServersListRelationFilter
  }, "id" | "username" | "email" | "extId" | "discordId" | "kickId" | "customerId">

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrderInput | SortOrder
    extId?: SortOrderInput | SortOrder
    discordId?: SortOrderInput | SortOrder
    discordUsername?: SortOrderInput | SortOrder
    kickId?: SortOrderInput | SortOrder
    kickUsername?: SortOrderInput | SortOrder
    role?: SortOrder
    customerId?: SortOrderInput | SortOrder
    timezone?: SortOrderInput | SortOrder
    plan?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Users"> | string
    username?: StringWithAggregatesFilter<"Users"> | string
    email?: StringNullableWithAggregatesFilter<"Users"> | string | null
    extId?: StringNullableWithAggregatesFilter<"Users"> | string | null
    discordId?: StringNullableWithAggregatesFilter<"Users"> | string | null
    discordUsername?: StringNullableWithAggregatesFilter<"Users"> | string | null
    kickId?: StringNullableWithAggregatesFilter<"Users"> | string | null
    kickUsername?: StringNullableWithAggregatesFilter<"Users"> | string | null
    role?: EnumRoleWithAggregatesFilter<"Users"> | $Enums.Role
    customerId?: StringNullableWithAggregatesFilter<"Users"> | string | null
    timezone?: StringNullableWithAggregatesFilter<"Users"> | string | null
    plan?: EnumPlansWithAggregatesFilter<"Users"> | $Enums.Plans
  }

  export type LimitsWhereInput = {
    AND?: LimitsWhereInput | LimitsWhereInput[]
    OR?: LimitsWhereInput[]
    NOT?: LimitsWhereInput | LimitsWhereInput[]
    id?: StringFilter<"Limits"> | string
    date?: DateTimeFilter<"Limits"> | Date | string
    aiUsed?: IntFilter<"Limits"> | number
    aiLimit?: IntFilter<"Limits"> | number
    additionalMessages?: IntFilter<"Limits"> | number
    premiumServers?: IntFilter<"Limits"> | number
    premiumServerLimmit?: IntFilter<"Limits"> | number
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type LimitsOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    aiUsed?: SortOrder
    aiLimit?: SortOrder
    additionalMessages?: SortOrder
    premiumServers?: SortOrder
    premiumServerLimmit?: SortOrder
    user?: UsersOrderByWithRelationInput
  }

  export type LimitsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LimitsWhereInput | LimitsWhereInput[]
    OR?: LimitsWhereInput[]
    NOT?: LimitsWhereInput | LimitsWhereInput[]
    date?: DateTimeFilter<"Limits"> | Date | string
    aiUsed?: IntFilter<"Limits"> | number
    aiLimit?: IntFilter<"Limits"> | number
    additionalMessages?: IntFilter<"Limits"> | number
    premiumServers?: IntFilter<"Limits"> | number
    premiumServerLimmit?: IntFilter<"Limits"> | number
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "id">

  export type LimitsOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    aiUsed?: SortOrder
    aiLimit?: SortOrder
    additionalMessages?: SortOrder
    premiumServers?: SortOrder
    premiumServerLimmit?: SortOrder
    _count?: LimitsCountOrderByAggregateInput
    _avg?: LimitsAvgOrderByAggregateInput
    _max?: LimitsMaxOrderByAggregateInput
    _min?: LimitsMinOrderByAggregateInput
    _sum?: LimitsSumOrderByAggregateInput
  }

  export type LimitsScalarWhereWithAggregatesInput = {
    AND?: LimitsScalarWhereWithAggregatesInput | LimitsScalarWhereWithAggregatesInput[]
    OR?: LimitsScalarWhereWithAggregatesInput[]
    NOT?: LimitsScalarWhereWithAggregatesInput | LimitsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Limits"> | string
    date?: DateTimeWithAggregatesFilter<"Limits"> | Date | string
    aiUsed?: IntWithAggregatesFilter<"Limits"> | number
    aiLimit?: IntWithAggregatesFilter<"Limits"> | number
    additionalMessages?: IntWithAggregatesFilter<"Limits"> | number
    premiumServers?: IntWithAggregatesFilter<"Limits"> | number
    premiumServerLimmit?: IntWithAggregatesFilter<"Limits"> | number
  }

  export type ServersWhereInput = {
    AND?: ServersWhereInput | ServersWhereInput[]
    OR?: ServersWhereInput[]
    NOT?: ServersWhereInput | ServersWhereInput[]
    id?: StringFilter<"Servers"> | string
    name?: StringFilter<"Servers"> | string
    ownerId?: StringFilter<"Servers"> | string
    icon?: StringNullableFilter<"Servers"> | string | null
    isPremium?: BoolFilter<"Servers"> | boolean
    premiumAddedBy?: StringNullableFilter<"Servers"> | string | null
    aiEnabled?: BoolFilter<"Servers"> | boolean
    welcomeChannel?: StringNullableFilter<"Servers"> | string | null
    announcementChannel?: StringNullableFilter<"Servers"> | string | null
    updatesChannel?: StringNullableFilter<"Servers"> | string | null
    logsChannel?: StringNullableFilter<"Servers"> | string | null
    logLevel?: EnumLogLevelFilter<"Servers"> | $Enums.LogLevel
    inviteLink?: StringNullableFilter<"Servers"> | string | null
    inviteCode?: StringNullableFilter<"Servers"> | string | null
    lastOpened?: DateTimeNullableFilter<"Servers"> | Date | string | null
    cleoPersonalityName?: StringNullableFilter<"Servers"> | string | null
    cleoPersonalityId?: StringNullableFilter<"Servers"> | string | null
    premiumUser?: XOR<UsersNullableScalarRelationFilter, UsersWhereInput> | null
    AutomodConfig?: AutomodConfigListRelationFilter
    ServerSubscriptions?: ServerSubscriptionsListRelationFilter
  }

  export type ServersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    ownerId?: SortOrder
    icon?: SortOrderInput | SortOrder
    isPremium?: SortOrder
    premiumAddedBy?: SortOrderInput | SortOrder
    aiEnabled?: SortOrder
    welcomeChannel?: SortOrderInput | SortOrder
    announcementChannel?: SortOrderInput | SortOrder
    updatesChannel?: SortOrderInput | SortOrder
    logsChannel?: SortOrderInput | SortOrder
    logLevel?: SortOrder
    inviteLink?: SortOrderInput | SortOrder
    inviteCode?: SortOrderInput | SortOrder
    lastOpened?: SortOrderInput | SortOrder
    cleoPersonalityName?: SortOrderInput | SortOrder
    cleoPersonalityId?: SortOrderInput | SortOrder
    premiumUser?: UsersOrderByWithRelationInput
    AutomodConfig?: AutomodConfigOrderByRelationAggregateInput
    ServerSubscriptions?: ServerSubscriptionsOrderByRelationAggregateInput
  }

  export type ServersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ServersWhereInput | ServersWhereInput[]
    OR?: ServersWhereInput[]
    NOT?: ServersWhereInput | ServersWhereInput[]
    name?: StringFilter<"Servers"> | string
    ownerId?: StringFilter<"Servers"> | string
    icon?: StringNullableFilter<"Servers"> | string | null
    isPremium?: BoolFilter<"Servers"> | boolean
    premiumAddedBy?: StringNullableFilter<"Servers"> | string | null
    aiEnabled?: BoolFilter<"Servers"> | boolean
    welcomeChannel?: StringNullableFilter<"Servers"> | string | null
    announcementChannel?: StringNullableFilter<"Servers"> | string | null
    updatesChannel?: StringNullableFilter<"Servers"> | string | null
    logsChannel?: StringNullableFilter<"Servers"> | string | null
    logLevel?: EnumLogLevelFilter<"Servers"> | $Enums.LogLevel
    inviteLink?: StringNullableFilter<"Servers"> | string | null
    inviteCode?: StringNullableFilter<"Servers"> | string | null
    lastOpened?: DateTimeNullableFilter<"Servers"> | Date | string | null
    cleoPersonalityName?: StringNullableFilter<"Servers"> | string | null
    cleoPersonalityId?: StringNullableFilter<"Servers"> | string | null
    premiumUser?: XOR<UsersNullableScalarRelationFilter, UsersWhereInput> | null
    AutomodConfig?: AutomodConfigListRelationFilter
    ServerSubscriptions?: ServerSubscriptionsListRelationFilter
  }, "id">

  export type ServersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    ownerId?: SortOrder
    icon?: SortOrderInput | SortOrder
    isPremium?: SortOrder
    premiumAddedBy?: SortOrderInput | SortOrder
    aiEnabled?: SortOrder
    welcomeChannel?: SortOrderInput | SortOrder
    announcementChannel?: SortOrderInput | SortOrder
    updatesChannel?: SortOrderInput | SortOrder
    logsChannel?: SortOrderInput | SortOrder
    logLevel?: SortOrder
    inviteLink?: SortOrderInput | SortOrder
    inviteCode?: SortOrderInput | SortOrder
    lastOpened?: SortOrderInput | SortOrder
    cleoPersonalityName?: SortOrderInput | SortOrder
    cleoPersonalityId?: SortOrderInput | SortOrder
    _count?: ServersCountOrderByAggregateInput
    _max?: ServersMaxOrderByAggregateInput
    _min?: ServersMinOrderByAggregateInput
  }

  export type ServersScalarWhereWithAggregatesInput = {
    AND?: ServersScalarWhereWithAggregatesInput | ServersScalarWhereWithAggregatesInput[]
    OR?: ServersScalarWhereWithAggregatesInput[]
    NOT?: ServersScalarWhereWithAggregatesInput | ServersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Servers"> | string
    name?: StringWithAggregatesFilter<"Servers"> | string
    ownerId?: StringWithAggregatesFilter<"Servers"> | string
    icon?: StringNullableWithAggregatesFilter<"Servers"> | string | null
    isPremium?: BoolWithAggregatesFilter<"Servers"> | boolean
    premiumAddedBy?: StringNullableWithAggregatesFilter<"Servers"> | string | null
    aiEnabled?: BoolWithAggregatesFilter<"Servers"> | boolean
    welcomeChannel?: StringNullableWithAggregatesFilter<"Servers"> | string | null
    announcementChannel?: StringNullableWithAggregatesFilter<"Servers"> | string | null
    updatesChannel?: StringNullableWithAggregatesFilter<"Servers"> | string | null
    logsChannel?: StringNullableWithAggregatesFilter<"Servers"> | string | null
    logLevel?: EnumLogLevelWithAggregatesFilter<"Servers"> | $Enums.LogLevel
    inviteLink?: StringNullableWithAggregatesFilter<"Servers"> | string | null
    inviteCode?: StringNullableWithAggregatesFilter<"Servers"> | string | null
    lastOpened?: DateTimeNullableWithAggregatesFilter<"Servers"> | Date | string | null
    cleoPersonalityName?: StringNullableWithAggregatesFilter<"Servers"> | string | null
    cleoPersonalityId?: StringNullableWithAggregatesFilter<"Servers"> | string | null
  }

  export type PremiumSubscriptionsWhereInput = {
    AND?: PremiumSubscriptionsWhereInput | PremiumSubscriptionsWhereInput[]
    OR?: PremiumSubscriptionsWhereInput[]
    NOT?: PremiumSubscriptionsWhereInput | PremiumSubscriptionsWhereInput[]
    id?: StringFilter<"PremiumSubscriptions"> | string
    tier?: EnumPlansFilter<"PremiumSubscriptions"> | $Enums.Plans
    startDate?: DateTimeFilter<"PremiumSubscriptions"> | Date | string
    endDate?: DateTimeFilter<"PremiumSubscriptions"> | Date | string
    source?: EnumSourcesFilter<"PremiumSubscriptions"> | $Enums.Sources
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type PremiumSubscriptionsOrderByWithRelationInput = {
    id?: SortOrder
    tier?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    source?: SortOrder
    user?: UsersOrderByWithRelationInput
  }

  export type PremiumSubscriptionsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PremiumSubscriptionsWhereInput | PremiumSubscriptionsWhereInput[]
    OR?: PremiumSubscriptionsWhereInput[]
    NOT?: PremiumSubscriptionsWhereInput | PremiumSubscriptionsWhereInput[]
    tier?: EnumPlansFilter<"PremiumSubscriptions"> | $Enums.Plans
    startDate?: DateTimeFilter<"PremiumSubscriptions"> | Date | string
    endDate?: DateTimeFilter<"PremiumSubscriptions"> | Date | string
    source?: EnumSourcesFilter<"PremiumSubscriptions"> | $Enums.Sources
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "id">

  export type PremiumSubscriptionsOrderByWithAggregationInput = {
    id?: SortOrder
    tier?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    source?: SortOrder
    _count?: PremiumSubscriptionsCountOrderByAggregateInput
    _max?: PremiumSubscriptionsMaxOrderByAggregateInput
    _min?: PremiumSubscriptionsMinOrderByAggregateInput
  }

  export type PremiumSubscriptionsScalarWhereWithAggregatesInput = {
    AND?: PremiumSubscriptionsScalarWhereWithAggregatesInput | PremiumSubscriptionsScalarWhereWithAggregatesInput[]
    OR?: PremiumSubscriptionsScalarWhereWithAggregatesInput[]
    NOT?: PremiumSubscriptionsScalarWhereWithAggregatesInput | PremiumSubscriptionsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PremiumSubscriptions"> | string
    tier?: EnumPlansWithAggregatesFilter<"PremiumSubscriptions"> | $Enums.Plans
    startDate?: DateTimeWithAggregatesFilter<"PremiumSubscriptions"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"PremiumSubscriptions"> | Date | string
    source?: EnumSourcesWithAggregatesFilter<"PremiumSubscriptions"> | $Enums.Sources
  }

  export type ServerSubscriptionsWhereInput = {
    AND?: ServerSubscriptionsWhereInput | ServerSubscriptionsWhereInput[]
    OR?: ServerSubscriptionsWhereInput[]
    NOT?: ServerSubscriptionsWhereInput | ServerSubscriptionsWhereInput[]
    id?: StringFilter<"ServerSubscriptions"> | string
    startDate?: DateTimeFilter<"ServerSubscriptions"> | Date | string
    endDate?: DateTimeFilter<"ServerSubscriptions"> | Date | string
    source?: EnumSourcesFilter<"ServerSubscriptions"> | $Enums.Sources
    subscriptionId?: StringFilter<"ServerSubscriptions"> | string
    server?: XOR<ServersScalarRelationFilter, ServersWhereInput>
  }

  export type ServerSubscriptionsOrderByWithRelationInput = {
    id?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    source?: SortOrder
    subscriptionId?: SortOrder
    server?: ServersOrderByWithRelationInput
  }

  export type ServerSubscriptionsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ServerSubscriptionsWhereInput | ServerSubscriptionsWhereInput[]
    OR?: ServerSubscriptionsWhereInput[]
    NOT?: ServerSubscriptionsWhereInput | ServerSubscriptionsWhereInput[]
    startDate?: DateTimeFilter<"ServerSubscriptions"> | Date | string
    endDate?: DateTimeFilter<"ServerSubscriptions"> | Date | string
    source?: EnumSourcesFilter<"ServerSubscriptions"> | $Enums.Sources
    subscriptionId?: StringFilter<"ServerSubscriptions"> | string
    server?: XOR<ServersScalarRelationFilter, ServersWhereInput>
  }, "id">

  export type ServerSubscriptionsOrderByWithAggregationInput = {
    id?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    source?: SortOrder
    subscriptionId?: SortOrder
    _count?: ServerSubscriptionsCountOrderByAggregateInput
    _max?: ServerSubscriptionsMaxOrderByAggregateInput
    _min?: ServerSubscriptionsMinOrderByAggregateInput
  }

  export type ServerSubscriptionsScalarWhereWithAggregatesInput = {
    AND?: ServerSubscriptionsScalarWhereWithAggregatesInput | ServerSubscriptionsScalarWhereWithAggregatesInput[]
    OR?: ServerSubscriptionsScalarWhereWithAggregatesInput[]
    NOT?: ServerSubscriptionsScalarWhereWithAggregatesInput | ServerSubscriptionsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ServerSubscriptions"> | string
    startDate?: DateTimeWithAggregatesFilter<"ServerSubscriptions"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"ServerSubscriptions"> | Date | string
    source?: EnumSourcesWithAggregatesFilter<"ServerSubscriptions"> | $Enums.Sources
    subscriptionId?: StringWithAggregatesFilter<"ServerSubscriptions"> | string
  }

  export type ErrorLogWhereInput = {
    AND?: ErrorLogWhereInput | ErrorLogWhereInput[]
    OR?: ErrorLogWhereInput[]
    NOT?: ErrorLogWhereInput | ErrorLogWhereInput[]
    id?: StringFilter<"ErrorLog"> | string
    process?: StringFilter<"ErrorLog"> | string
    message?: StringFilter<"ErrorLog"> | string
    stackTrace?: StringFilter<"ErrorLog"> | string
    timestamp?: DateTimeFilter<"ErrorLog"> | Date | string
  }

  export type ErrorLogOrderByWithRelationInput = {
    id?: SortOrder
    process?: SortOrder
    message?: SortOrder
    stackTrace?: SortOrder
    timestamp?: SortOrder
  }

  export type ErrorLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ErrorLogWhereInput | ErrorLogWhereInput[]
    OR?: ErrorLogWhereInput[]
    NOT?: ErrorLogWhereInput | ErrorLogWhereInput[]
    process?: StringFilter<"ErrorLog"> | string
    message?: StringFilter<"ErrorLog"> | string
    stackTrace?: StringFilter<"ErrorLog"> | string
    timestamp?: DateTimeFilter<"ErrorLog"> | Date | string
  }, "id">

  export type ErrorLogOrderByWithAggregationInput = {
    id?: SortOrder
    process?: SortOrder
    message?: SortOrder
    stackTrace?: SortOrder
    timestamp?: SortOrder
    _count?: ErrorLogCountOrderByAggregateInput
    _max?: ErrorLogMaxOrderByAggregateInput
    _min?: ErrorLogMinOrderByAggregateInput
  }

  export type ErrorLogScalarWhereWithAggregatesInput = {
    AND?: ErrorLogScalarWhereWithAggregatesInput | ErrorLogScalarWhereWithAggregatesInput[]
    OR?: ErrorLogScalarWhereWithAggregatesInput[]
    NOT?: ErrorLogScalarWhereWithAggregatesInput | ErrorLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ErrorLog"> | string
    process?: StringWithAggregatesFilter<"ErrorLog"> | string
    message?: StringWithAggregatesFilter<"ErrorLog"> | string
    stackTrace?: StringWithAggregatesFilter<"ErrorLog"> | string
    timestamp?: DateTimeWithAggregatesFilter<"ErrorLog"> | Date | string
  }

  export type IncidentsWhereInput = {
    AND?: IncidentsWhereInput | IncidentsWhereInput[]
    OR?: IncidentsWhereInput[]
    NOT?: IncidentsWhereInput | IncidentsWhereInput[]
    id?: StringFilter<"Incidents"> | string
    serverId?: StringFilter<"Incidents"> | string
    userId?: StringFilter<"Incidents"> | string
    moderatorId?: StringFilter<"Incidents"> | string
    type?: EnumIncidentsTypeFilter<"Incidents"> | $Enums.IncidentsType
    reason?: StringFilter<"Incidents"> | string
    timestamp?: DateTimeFilter<"Incidents"> | Date | string
    status?: EnumIncidentsStatusFilter<"Incidents"> | $Enums.IncidentsStatus
  }

  export type IncidentsOrderByWithRelationInput = {
    id?: SortOrder
    serverId?: SortOrder
    userId?: SortOrder
    moderatorId?: SortOrder
    type?: SortOrder
    reason?: SortOrder
    timestamp?: SortOrder
    status?: SortOrder
  }

  export type IncidentsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: IncidentsWhereInput | IncidentsWhereInput[]
    OR?: IncidentsWhereInput[]
    NOT?: IncidentsWhereInput | IncidentsWhereInput[]
    serverId?: StringFilter<"Incidents"> | string
    userId?: StringFilter<"Incidents"> | string
    moderatorId?: StringFilter<"Incidents"> | string
    type?: EnumIncidentsTypeFilter<"Incidents"> | $Enums.IncidentsType
    reason?: StringFilter<"Incidents"> | string
    timestamp?: DateTimeFilter<"Incidents"> | Date | string
    status?: EnumIncidentsStatusFilter<"Incidents"> | $Enums.IncidentsStatus
  }, "id">

  export type IncidentsOrderByWithAggregationInput = {
    id?: SortOrder
    serverId?: SortOrder
    userId?: SortOrder
    moderatorId?: SortOrder
    type?: SortOrder
    reason?: SortOrder
    timestamp?: SortOrder
    status?: SortOrder
    _count?: IncidentsCountOrderByAggregateInput
    _max?: IncidentsMaxOrderByAggregateInput
    _min?: IncidentsMinOrderByAggregateInput
  }

  export type IncidentsScalarWhereWithAggregatesInput = {
    AND?: IncidentsScalarWhereWithAggregatesInput | IncidentsScalarWhereWithAggregatesInput[]
    OR?: IncidentsScalarWhereWithAggregatesInput[]
    NOT?: IncidentsScalarWhereWithAggregatesInput | IncidentsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Incidents"> | string
    serverId?: StringWithAggregatesFilter<"Incidents"> | string
    userId?: StringWithAggregatesFilter<"Incidents"> | string
    moderatorId?: StringWithAggregatesFilter<"Incidents"> | string
    type?: EnumIncidentsTypeWithAggregatesFilter<"Incidents"> | $Enums.IncidentsType
    reason?: StringWithAggregatesFilter<"Incidents"> | string
    timestamp?: DateTimeWithAggregatesFilter<"Incidents"> | Date | string
    status?: EnumIncidentsStatusWithAggregatesFilter<"Incidents"> | $Enums.IncidentsStatus
  }

  export type ProductsWhereInput = {
    AND?: ProductsWhereInput | ProductsWhereInput[]
    OR?: ProductsWhereInput[]
    NOT?: ProductsWhereInput | ProductsWhereInput[]
    id?: StringFilter<"Products"> | string
    name?: StringFilter<"Products"> | string
    type?: EnumProductTypeFilter<"Products"> | $Enums.ProductType
    prices?: PricesListRelationFilter
  }

  export type ProductsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    prices?: PricesOrderByRelationAggregateInput
  }

  export type ProductsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: ProductsWhereInput | ProductsWhereInput[]
    OR?: ProductsWhereInput[]
    NOT?: ProductsWhereInput | ProductsWhereInput[]
    type?: EnumProductTypeFilter<"Products"> | $Enums.ProductType
    prices?: PricesListRelationFilter
  }, "id" | "name">

  export type ProductsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    _count?: ProductsCountOrderByAggregateInput
    _max?: ProductsMaxOrderByAggregateInput
    _min?: ProductsMinOrderByAggregateInput
  }

  export type ProductsScalarWhereWithAggregatesInput = {
    AND?: ProductsScalarWhereWithAggregatesInput | ProductsScalarWhereWithAggregatesInput[]
    OR?: ProductsScalarWhereWithAggregatesInput[]
    NOT?: ProductsScalarWhereWithAggregatesInput | ProductsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Products"> | string
    name?: StringWithAggregatesFilter<"Products"> | string
    type?: EnumProductTypeWithAggregatesFilter<"Products"> | $Enums.ProductType
  }

  export type PricesWhereInput = {
    AND?: PricesWhereInput | PricesWhereInput[]
    OR?: PricesWhereInput[]
    NOT?: PricesWhereInput | PricesWhereInput[]
    id?: StringFilter<"Prices"> | string
    amount?: IntFilter<"Prices"> | number
    default?: BoolFilter<"Prices"> | boolean
    productId?: StringFilter<"Prices"> | string
    product?: XOR<ProductsScalarRelationFilter, ProductsWhereInput>
  }

  export type PricesOrderByWithRelationInput = {
    id?: SortOrder
    amount?: SortOrder
    default?: SortOrder
    productId?: SortOrder
    product?: ProductsOrderByWithRelationInput
  }

  export type PricesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PricesWhereInput | PricesWhereInput[]
    OR?: PricesWhereInput[]
    NOT?: PricesWhereInput | PricesWhereInput[]
    amount?: IntFilter<"Prices"> | number
    default?: BoolFilter<"Prices"> | boolean
    productId?: StringFilter<"Prices"> | string
    product?: XOR<ProductsScalarRelationFilter, ProductsWhereInput>
  }, "id">

  export type PricesOrderByWithAggregationInput = {
    id?: SortOrder
    amount?: SortOrder
    default?: SortOrder
    productId?: SortOrder
    _count?: PricesCountOrderByAggregateInput
    _avg?: PricesAvgOrderByAggregateInput
    _max?: PricesMaxOrderByAggregateInput
    _min?: PricesMinOrderByAggregateInput
    _sum?: PricesSumOrderByAggregateInput
  }

  export type PricesScalarWhereWithAggregatesInput = {
    AND?: PricesScalarWhereWithAggregatesInput | PricesScalarWhereWithAggregatesInput[]
    OR?: PricesScalarWhereWithAggregatesInput[]
    NOT?: PricesScalarWhereWithAggregatesInput | PricesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Prices"> | string
    amount?: IntWithAggregatesFilter<"Prices"> | number
    default?: BoolWithAggregatesFilter<"Prices"> | boolean
    productId?: StringWithAggregatesFilter<"Prices"> | string
  }

  export type AutomodConfigWhereInput = {
    AND?: AutomodConfigWhereInput | AutomodConfigWhereInput[]
    OR?: AutomodConfigWhereInput[]
    NOT?: AutomodConfigWhereInput | AutomodConfigWhereInput[]
    id?: StringFilter<"AutomodConfig"> | string
    active?: BoolFilter<"AutomodConfig"> | boolean
    profanity?: BoolFilter<"AutomodConfig"> | boolean
    matureContent?: BoolFilter<"AutomodConfig"> | boolean
    links?: BoolFilter<"AutomodConfig"> | boolean
    ignoredChannels?: StringNullableListFilter<"AutomodConfig">
    approvedLinks?: StringNullableListFilter<"AutomodConfig">
    guildId?: StringFilter<"AutomodConfig"> | string
    guild?: XOR<ServersScalarRelationFilter, ServersWhereInput>
  }

  export type AutomodConfigOrderByWithRelationInput = {
    id?: SortOrder
    active?: SortOrder
    profanity?: SortOrder
    matureContent?: SortOrder
    links?: SortOrder
    ignoredChannels?: SortOrder
    approvedLinks?: SortOrder
    guildId?: SortOrder
    guild?: ServersOrderByWithRelationInput
  }

  export type AutomodConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    guildId?: string
    AND?: AutomodConfigWhereInput | AutomodConfigWhereInput[]
    OR?: AutomodConfigWhereInput[]
    NOT?: AutomodConfigWhereInput | AutomodConfigWhereInput[]
    active?: BoolFilter<"AutomodConfig"> | boolean
    profanity?: BoolFilter<"AutomodConfig"> | boolean
    matureContent?: BoolFilter<"AutomodConfig"> | boolean
    links?: BoolFilter<"AutomodConfig"> | boolean
    ignoredChannels?: StringNullableListFilter<"AutomodConfig">
    approvedLinks?: StringNullableListFilter<"AutomodConfig">
    guild?: XOR<ServersScalarRelationFilter, ServersWhereInput>
  }, "id" | "guildId">

  export type AutomodConfigOrderByWithAggregationInput = {
    id?: SortOrder
    active?: SortOrder
    profanity?: SortOrder
    matureContent?: SortOrder
    links?: SortOrder
    ignoredChannels?: SortOrder
    approvedLinks?: SortOrder
    guildId?: SortOrder
    _count?: AutomodConfigCountOrderByAggregateInput
    _max?: AutomodConfigMaxOrderByAggregateInput
    _min?: AutomodConfigMinOrderByAggregateInput
  }

  export type AutomodConfigScalarWhereWithAggregatesInput = {
    AND?: AutomodConfigScalarWhereWithAggregatesInput | AutomodConfigScalarWhereWithAggregatesInput[]
    OR?: AutomodConfigScalarWhereWithAggregatesInput[]
    NOT?: AutomodConfigScalarWhereWithAggregatesInput | AutomodConfigScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AutomodConfig"> | string
    active?: BoolWithAggregatesFilter<"AutomodConfig"> | boolean
    profanity?: BoolWithAggregatesFilter<"AutomodConfig"> | boolean
    matureContent?: BoolWithAggregatesFilter<"AutomodConfig"> | boolean
    links?: BoolWithAggregatesFilter<"AutomodConfig"> | boolean
    ignoredChannels?: StringNullableListFilter<"AutomodConfig">
    approvedLinks?: StringNullableListFilter<"AutomodConfig">
    guildId?: StringWithAggregatesFilter<"AutomodConfig"> | string
  }

  export type TestimonialsWhereInput = {
    AND?: TestimonialsWhereInput | TestimonialsWhereInput[]
    OR?: TestimonialsWhereInput[]
    NOT?: TestimonialsWhereInput | TestimonialsWhereInput[]
    id?: StringFilter<"Testimonials"> | string
    username?: StringFilter<"Testimonials"> | string
    displayName?: StringFilter<"Testimonials"> | string
    userImg?: StringFilter<"Testimonials"> | string
    userId?: StringNullableFilter<"Testimonials"> | string | null
    rating?: IntFilter<"Testimonials"> | number
    content?: StringFilter<"Testimonials"> | string
    createdAt?: DateTimeFilter<"Testimonials"> | Date | string
    updatedAt?: DateTimeFilter<"Testimonials"> | Date | string
  }

  export type TestimonialsOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    displayName?: SortOrder
    userImg?: SortOrder
    userId?: SortOrderInput | SortOrder
    rating?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TestimonialsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    AND?: TestimonialsWhereInput | TestimonialsWhereInput[]
    OR?: TestimonialsWhereInput[]
    NOT?: TestimonialsWhereInput | TestimonialsWhereInput[]
    displayName?: StringFilter<"Testimonials"> | string
    userImg?: StringFilter<"Testimonials"> | string
    userId?: StringNullableFilter<"Testimonials"> | string | null
    rating?: IntFilter<"Testimonials"> | number
    content?: StringFilter<"Testimonials"> | string
    createdAt?: DateTimeFilter<"Testimonials"> | Date | string
    updatedAt?: DateTimeFilter<"Testimonials"> | Date | string
  }, "id" | "username">

  export type TestimonialsOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    displayName?: SortOrder
    userImg?: SortOrder
    userId?: SortOrderInput | SortOrder
    rating?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TestimonialsCountOrderByAggregateInput
    _avg?: TestimonialsAvgOrderByAggregateInput
    _max?: TestimonialsMaxOrderByAggregateInput
    _min?: TestimonialsMinOrderByAggregateInput
    _sum?: TestimonialsSumOrderByAggregateInput
  }

  export type TestimonialsScalarWhereWithAggregatesInput = {
    AND?: TestimonialsScalarWhereWithAggregatesInput | TestimonialsScalarWhereWithAggregatesInput[]
    OR?: TestimonialsScalarWhereWithAggregatesInput[]
    NOT?: TestimonialsScalarWhereWithAggregatesInput | TestimonialsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Testimonials"> | string
    username?: StringWithAggregatesFilter<"Testimonials"> | string
    displayName?: StringWithAggregatesFilter<"Testimonials"> | string
    userImg?: StringWithAggregatesFilter<"Testimonials"> | string
    userId?: StringNullableWithAggregatesFilter<"Testimonials"> | string | null
    rating?: IntWithAggregatesFilter<"Testimonials"> | number
    content?: StringWithAggregatesFilter<"Testimonials"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Testimonials"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Testimonials"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    emailVerified?: BoolFilter<"User"> | boolean
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    lastLoginMethod?: StringNullableFilter<"User"> | string | null
    username?: StringNullableFilter<"User"> | string | null
    locale?: StringNullableFilter<"User"> | string | null
    sessions?: SessionListRelationFilter
    accounts?: AccountListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLoginMethod?: SortOrderInput | SortOrder
    username?: SortOrderInput | SortOrder
    locale?: SortOrderInput | SortOrder
    sessions?: SessionOrderByRelationAggregateInput
    accounts?: AccountOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    emailVerified?: BoolFilter<"User"> | boolean
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    lastLoginMethod?: StringNullableFilter<"User"> | string | null
    locale?: StringNullableFilter<"User"> | string | null
    sessions?: SessionListRelationFilter
    accounts?: AccountListRelationFilter
  }, "id" | "email" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLoginMethod?: SortOrderInput | SortOrder
    username?: SortOrderInput | SortOrder
    locale?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    emailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    lastLoginMethod?: StringNullableWithAggregatesFilter<"User"> | string | null
    username?: StringNullableWithAggregatesFilter<"User"> | string | null
    locale?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    token?: StringFilter<"Session"> | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    token?: StringWithAggregatesFilter<"Session"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    ipAddress?: StringNullableWithAggregatesFilter<"Session"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"Session"> | string | null
    userId?: StringWithAggregatesFilter<"Session"> | string
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    idToken?: SortOrderInput | SortOrder
    accessTokenExpiresAt?: SortOrderInput | SortOrder
    refreshTokenExpiresAt?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    idToken?: SortOrderInput | SortOrder
    accessTokenExpiresAt?: SortOrderInput | SortOrder
    refreshTokenExpiresAt?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    accountId?: StringWithAggregatesFilter<"Account"> | string
    providerId?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    accessToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    refreshToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    idToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    password?: StringNullableWithAggregatesFilter<"Account"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
  }

  export type VerificationWhereInput = {
    AND?: VerificationWhereInput | VerificationWhereInput[]
    OR?: VerificationWhereInput[]
    NOT?: VerificationWhereInput | VerificationWhereInput[]
    id?: StringFilter<"Verification"> | string
    identifier?: StringFilter<"Verification"> | string
    value?: StringFilter<"Verification"> | string
    expiresAt?: DateTimeFilter<"Verification"> | Date | string
    createdAt?: DateTimeFilter<"Verification"> | Date | string
    updatedAt?: DateTimeFilter<"Verification"> | Date | string
  }

  export type VerificationOrderByWithRelationInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VerificationWhereInput | VerificationWhereInput[]
    OR?: VerificationWhereInput[]
    NOT?: VerificationWhereInput | VerificationWhereInput[]
    identifier?: StringFilter<"Verification"> | string
    value?: StringFilter<"Verification"> | string
    expiresAt?: DateTimeFilter<"Verification"> | Date | string
    createdAt?: DateTimeFilter<"Verification"> | Date | string
    updatedAt?: DateTimeFilter<"Verification"> | Date | string
  }, "id">

  export type VerificationOrderByWithAggregationInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VerificationCountOrderByAggregateInput
    _max?: VerificationMaxOrderByAggregateInput
    _min?: VerificationMinOrderByAggregateInput
  }

  export type VerificationScalarWhereWithAggregatesInput = {
    AND?: VerificationScalarWhereWithAggregatesInput | VerificationScalarWhereWithAggregatesInput[]
    OR?: VerificationScalarWhereWithAggregatesInput[]
    NOT?: VerificationScalarWhereWithAggregatesInput | VerificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Verification"> | string
    identifier?: StringWithAggregatesFilter<"Verification"> | string
    value?: StringWithAggregatesFilter<"Verification"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Verification"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Verification"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Verification"> | Date | string
  }

  export type UsersCreateInput = {
    id?: string
    username: string
    email?: string | null
    extId?: string | null
    discordId?: string | null
    discordUsername?: string | null
    kickId?: string | null
    kickUsername?: string | null
    role?: $Enums.Role
    customerId?: string | null
    timezone?: string | null
    plan?: $Enums.Plans
    premiumSubscriptions?: PremiumSubscriptionsCreateNestedOneWithoutUserInput
    limits?: LimitsCreateNestedOneWithoutUserInput
    premiumServers?: ServersCreateNestedManyWithoutPremiumUserInput
  }

  export type UsersUncheckedCreateInput = {
    id?: string
    username: string
    email?: string | null
    extId?: string | null
    discordId?: string | null
    discordUsername?: string | null
    kickId?: string | null
    kickUsername?: string | null
    role?: $Enums.Role
    customerId?: string | null
    timezone?: string | null
    plan?: $Enums.Plans
    premiumSubscriptions?: PremiumSubscriptionsUncheckedCreateNestedOneWithoutUserInput
    limits?: LimitsUncheckedCreateNestedOneWithoutUserInput
    premiumServers?: ServersUncheckedCreateNestedManyWithoutPremiumUserInput
  }

  export type UsersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    extId?: NullableStringFieldUpdateOperationsInput | string | null
    discordId?: NullableStringFieldUpdateOperationsInput | string | null
    discordUsername?: NullableStringFieldUpdateOperationsInput | string | null
    kickId?: NullableStringFieldUpdateOperationsInput | string | null
    kickUsername?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    plan?: EnumPlansFieldUpdateOperationsInput | $Enums.Plans
    premiumSubscriptions?: PremiumSubscriptionsUpdateOneWithoutUserNestedInput
    limits?: LimitsUpdateOneWithoutUserNestedInput
    premiumServers?: ServersUpdateManyWithoutPremiumUserNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    extId?: NullableStringFieldUpdateOperationsInput | string | null
    discordId?: NullableStringFieldUpdateOperationsInput | string | null
    discordUsername?: NullableStringFieldUpdateOperationsInput | string | null
    kickId?: NullableStringFieldUpdateOperationsInput | string | null
    kickUsername?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    plan?: EnumPlansFieldUpdateOperationsInput | $Enums.Plans
    premiumSubscriptions?: PremiumSubscriptionsUncheckedUpdateOneWithoutUserNestedInput
    limits?: LimitsUncheckedUpdateOneWithoutUserNestedInput
    premiumServers?: ServersUncheckedUpdateManyWithoutPremiumUserNestedInput
  }

  export type UsersCreateManyInput = {
    id?: string
    username: string
    email?: string | null
    extId?: string | null
    discordId?: string | null
    discordUsername?: string | null
    kickId?: string | null
    kickUsername?: string | null
    role?: $Enums.Role
    customerId?: string | null
    timezone?: string | null
    plan?: $Enums.Plans
  }

  export type UsersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    extId?: NullableStringFieldUpdateOperationsInput | string | null
    discordId?: NullableStringFieldUpdateOperationsInput | string | null
    discordUsername?: NullableStringFieldUpdateOperationsInput | string | null
    kickId?: NullableStringFieldUpdateOperationsInput | string | null
    kickUsername?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    plan?: EnumPlansFieldUpdateOperationsInput | $Enums.Plans
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    extId?: NullableStringFieldUpdateOperationsInput | string | null
    discordId?: NullableStringFieldUpdateOperationsInput | string | null
    discordUsername?: NullableStringFieldUpdateOperationsInput | string | null
    kickId?: NullableStringFieldUpdateOperationsInput | string | null
    kickUsername?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    plan?: EnumPlansFieldUpdateOperationsInput | $Enums.Plans
  }

  export type LimitsCreateInput = {
    date: Date | string
    aiUsed?: number
    aiLimit?: number
    additionalMessages?: number
    premiumServers?: number
    premiumServerLimmit?: number
    user: UsersCreateNestedOneWithoutLimitsInput
  }

  export type LimitsUncheckedCreateInput = {
    id: string
    date: Date | string
    aiUsed?: number
    aiLimit?: number
    additionalMessages?: number
    premiumServers?: number
    premiumServerLimmit?: number
  }

  export type LimitsUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    aiUsed?: IntFieldUpdateOperationsInput | number
    aiLimit?: IntFieldUpdateOperationsInput | number
    additionalMessages?: IntFieldUpdateOperationsInput | number
    premiumServers?: IntFieldUpdateOperationsInput | number
    premiumServerLimmit?: IntFieldUpdateOperationsInput | number
    user?: UsersUpdateOneRequiredWithoutLimitsNestedInput
  }

  export type LimitsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    aiUsed?: IntFieldUpdateOperationsInput | number
    aiLimit?: IntFieldUpdateOperationsInput | number
    additionalMessages?: IntFieldUpdateOperationsInput | number
    premiumServers?: IntFieldUpdateOperationsInput | number
    premiumServerLimmit?: IntFieldUpdateOperationsInput | number
  }

  export type LimitsCreateManyInput = {
    id: string
    date: Date | string
    aiUsed?: number
    aiLimit?: number
    additionalMessages?: number
    premiumServers?: number
    premiumServerLimmit?: number
  }

  export type LimitsUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    aiUsed?: IntFieldUpdateOperationsInput | number
    aiLimit?: IntFieldUpdateOperationsInput | number
    additionalMessages?: IntFieldUpdateOperationsInput | number
    premiumServers?: IntFieldUpdateOperationsInput | number
    premiumServerLimmit?: IntFieldUpdateOperationsInput | number
  }

  export type LimitsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    aiUsed?: IntFieldUpdateOperationsInput | number
    aiLimit?: IntFieldUpdateOperationsInput | number
    additionalMessages?: IntFieldUpdateOperationsInput | number
    premiumServers?: IntFieldUpdateOperationsInput | number
    premiumServerLimmit?: IntFieldUpdateOperationsInput | number
  }

  export type ServersCreateInput = {
    id: string
    name: string
    ownerId: string
    icon?: string | null
    isPremium?: boolean
    aiEnabled?: boolean
    welcomeChannel?: string | null
    announcementChannel?: string | null
    updatesChannel?: string | null
    logsChannel?: string | null
    logLevel?: $Enums.LogLevel
    inviteLink?: string | null
    inviteCode?: string | null
    lastOpened?: Date | string | null
    cleoPersonalityName?: string | null
    cleoPersonalityId?: string | null
    premiumUser?: UsersCreateNestedOneWithoutPremiumServersInput
    AutomodConfig?: AutomodConfigCreateNestedManyWithoutGuildInput
    ServerSubscriptions?: ServerSubscriptionsCreateNestedManyWithoutServerInput
  }

  export type ServersUncheckedCreateInput = {
    id: string
    name: string
    ownerId: string
    icon?: string | null
    isPremium?: boolean
    premiumAddedBy?: string | null
    aiEnabled?: boolean
    welcomeChannel?: string | null
    announcementChannel?: string | null
    updatesChannel?: string | null
    logsChannel?: string | null
    logLevel?: $Enums.LogLevel
    inviteLink?: string | null
    inviteCode?: string | null
    lastOpened?: Date | string | null
    cleoPersonalityName?: string | null
    cleoPersonalityId?: string | null
    AutomodConfig?: AutomodConfigUncheckedCreateNestedManyWithoutGuildInput
    ServerSubscriptions?: ServerSubscriptionsUncheckedCreateNestedManyWithoutServerInput
  }

  export type ServersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    aiEnabled?: BoolFieldUpdateOperationsInput | boolean
    welcomeChannel?: NullableStringFieldUpdateOperationsInput | string | null
    announcementChannel?: NullableStringFieldUpdateOperationsInput | string | null
    updatesChannel?: NullableStringFieldUpdateOperationsInput | string | null
    logsChannel?: NullableStringFieldUpdateOperationsInput | string | null
    logLevel?: EnumLogLevelFieldUpdateOperationsInput | $Enums.LogLevel
    inviteLink?: NullableStringFieldUpdateOperationsInput | string | null
    inviteCode?: NullableStringFieldUpdateOperationsInput | string | null
    lastOpened?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cleoPersonalityName?: NullableStringFieldUpdateOperationsInput | string | null
    cleoPersonalityId?: NullableStringFieldUpdateOperationsInput | string | null
    premiumUser?: UsersUpdateOneWithoutPremiumServersNestedInput
    AutomodConfig?: AutomodConfigUpdateManyWithoutGuildNestedInput
    ServerSubscriptions?: ServerSubscriptionsUpdateManyWithoutServerNestedInput
  }

  export type ServersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    premiumAddedBy?: NullableStringFieldUpdateOperationsInput | string | null
    aiEnabled?: BoolFieldUpdateOperationsInput | boolean
    welcomeChannel?: NullableStringFieldUpdateOperationsInput | string | null
    announcementChannel?: NullableStringFieldUpdateOperationsInput | string | null
    updatesChannel?: NullableStringFieldUpdateOperationsInput | string | null
    logsChannel?: NullableStringFieldUpdateOperationsInput | string | null
    logLevel?: EnumLogLevelFieldUpdateOperationsInput | $Enums.LogLevel
    inviteLink?: NullableStringFieldUpdateOperationsInput | string | null
    inviteCode?: NullableStringFieldUpdateOperationsInput | string | null
    lastOpened?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cleoPersonalityName?: NullableStringFieldUpdateOperationsInput | string | null
    cleoPersonalityId?: NullableStringFieldUpdateOperationsInput | string | null
    AutomodConfig?: AutomodConfigUncheckedUpdateManyWithoutGuildNestedInput
    ServerSubscriptions?: ServerSubscriptionsUncheckedUpdateManyWithoutServerNestedInput
  }

  export type ServersCreateManyInput = {
    id: string
    name: string
    ownerId: string
    icon?: string | null
    isPremium?: boolean
    premiumAddedBy?: string | null
    aiEnabled?: boolean
    welcomeChannel?: string | null
    announcementChannel?: string | null
    updatesChannel?: string | null
    logsChannel?: string | null
    logLevel?: $Enums.LogLevel
    inviteLink?: string | null
    inviteCode?: string | null
    lastOpened?: Date | string | null
    cleoPersonalityName?: string | null
    cleoPersonalityId?: string | null
  }

  export type ServersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    aiEnabled?: BoolFieldUpdateOperationsInput | boolean
    welcomeChannel?: NullableStringFieldUpdateOperationsInput | string | null
    announcementChannel?: NullableStringFieldUpdateOperationsInput | string | null
    updatesChannel?: NullableStringFieldUpdateOperationsInput | string | null
    logsChannel?: NullableStringFieldUpdateOperationsInput | string | null
    logLevel?: EnumLogLevelFieldUpdateOperationsInput | $Enums.LogLevel
    inviteLink?: NullableStringFieldUpdateOperationsInput | string | null
    inviteCode?: NullableStringFieldUpdateOperationsInput | string | null
    lastOpened?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cleoPersonalityName?: NullableStringFieldUpdateOperationsInput | string | null
    cleoPersonalityId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ServersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    premiumAddedBy?: NullableStringFieldUpdateOperationsInput | string | null
    aiEnabled?: BoolFieldUpdateOperationsInput | boolean
    welcomeChannel?: NullableStringFieldUpdateOperationsInput | string | null
    announcementChannel?: NullableStringFieldUpdateOperationsInput | string | null
    updatesChannel?: NullableStringFieldUpdateOperationsInput | string | null
    logsChannel?: NullableStringFieldUpdateOperationsInput | string | null
    logLevel?: EnumLogLevelFieldUpdateOperationsInput | $Enums.LogLevel
    inviteLink?: NullableStringFieldUpdateOperationsInput | string | null
    inviteCode?: NullableStringFieldUpdateOperationsInput | string | null
    lastOpened?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cleoPersonalityName?: NullableStringFieldUpdateOperationsInput | string | null
    cleoPersonalityId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PremiumSubscriptionsCreateInput = {
    tier: $Enums.Plans
    startDate?: Date | string
    endDate?: Date | string
    source: $Enums.Sources
    user: UsersCreateNestedOneWithoutPremiumSubscriptionsInput
  }

  export type PremiumSubscriptionsUncheckedCreateInput = {
    id: string
    tier: $Enums.Plans
    startDate?: Date | string
    endDate?: Date | string
    source: $Enums.Sources
  }

  export type PremiumSubscriptionsUpdateInput = {
    tier?: EnumPlansFieldUpdateOperationsInput | $Enums.Plans
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: EnumSourcesFieldUpdateOperationsInput | $Enums.Sources
    user?: UsersUpdateOneRequiredWithoutPremiumSubscriptionsNestedInput
  }

  export type PremiumSubscriptionsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tier?: EnumPlansFieldUpdateOperationsInput | $Enums.Plans
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: EnumSourcesFieldUpdateOperationsInput | $Enums.Sources
  }

  export type PremiumSubscriptionsCreateManyInput = {
    id: string
    tier: $Enums.Plans
    startDate?: Date | string
    endDate?: Date | string
    source: $Enums.Sources
  }

  export type PremiumSubscriptionsUpdateManyMutationInput = {
    tier?: EnumPlansFieldUpdateOperationsInput | $Enums.Plans
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: EnumSourcesFieldUpdateOperationsInput | $Enums.Sources
  }

  export type PremiumSubscriptionsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tier?: EnumPlansFieldUpdateOperationsInput | $Enums.Plans
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: EnumSourcesFieldUpdateOperationsInput | $Enums.Sources
  }

  export type ServerSubscriptionsCreateInput = {
    startDate?: Date | string
    endDate?: Date | string
    source: $Enums.Sources
    subscriptionId: string
    server: ServersCreateNestedOneWithoutServerSubscriptionsInput
  }

  export type ServerSubscriptionsUncheckedCreateInput = {
    id: string
    startDate?: Date | string
    endDate?: Date | string
    source: $Enums.Sources
    subscriptionId: string
  }

  export type ServerSubscriptionsUpdateInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: EnumSourcesFieldUpdateOperationsInput | $Enums.Sources
    subscriptionId?: StringFieldUpdateOperationsInput | string
    server?: ServersUpdateOneRequiredWithoutServerSubscriptionsNestedInput
  }

  export type ServerSubscriptionsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: EnumSourcesFieldUpdateOperationsInput | $Enums.Sources
    subscriptionId?: StringFieldUpdateOperationsInput | string
  }

  export type ServerSubscriptionsCreateManyInput = {
    id: string
    startDate?: Date | string
    endDate?: Date | string
    source: $Enums.Sources
    subscriptionId: string
  }

  export type ServerSubscriptionsUpdateManyMutationInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: EnumSourcesFieldUpdateOperationsInput | $Enums.Sources
    subscriptionId?: StringFieldUpdateOperationsInput | string
  }

  export type ServerSubscriptionsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: EnumSourcesFieldUpdateOperationsInput | $Enums.Sources
    subscriptionId?: StringFieldUpdateOperationsInput | string
  }

  export type ErrorLogCreateInput = {
    id?: string
    process: string
    message: string
    stackTrace: string
    timestamp?: Date | string
  }

  export type ErrorLogUncheckedCreateInput = {
    id?: string
    process: string
    message: string
    stackTrace: string
    timestamp?: Date | string
  }

  export type ErrorLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    process?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    stackTrace?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ErrorLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    process?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    stackTrace?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ErrorLogCreateManyInput = {
    id?: string
    process: string
    message: string
    stackTrace: string
    timestamp?: Date | string
  }

  export type ErrorLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    process?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    stackTrace?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ErrorLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    process?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    stackTrace?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentsCreateInput = {
    id?: string
    serverId: string
    userId: string
    moderatorId: string
    type: $Enums.IncidentsType
    reason: string
    timestamp?: Date | string
    status?: $Enums.IncidentsStatus
  }

  export type IncidentsUncheckedCreateInput = {
    id?: string
    serverId: string
    userId: string
    moderatorId: string
    type: $Enums.IncidentsType
    reason: string
    timestamp?: Date | string
    status?: $Enums.IncidentsStatus
  }

  export type IncidentsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    serverId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    moderatorId?: StringFieldUpdateOperationsInput | string
    type?: EnumIncidentsTypeFieldUpdateOperationsInput | $Enums.IncidentsType
    reason?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumIncidentsStatusFieldUpdateOperationsInput | $Enums.IncidentsStatus
  }

  export type IncidentsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    serverId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    moderatorId?: StringFieldUpdateOperationsInput | string
    type?: EnumIncidentsTypeFieldUpdateOperationsInput | $Enums.IncidentsType
    reason?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumIncidentsStatusFieldUpdateOperationsInput | $Enums.IncidentsStatus
  }

  export type IncidentsCreateManyInput = {
    id?: string
    serverId: string
    userId: string
    moderatorId: string
    type: $Enums.IncidentsType
    reason: string
    timestamp?: Date | string
    status?: $Enums.IncidentsStatus
  }

  export type IncidentsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    serverId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    moderatorId?: StringFieldUpdateOperationsInput | string
    type?: EnumIncidentsTypeFieldUpdateOperationsInput | $Enums.IncidentsType
    reason?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumIncidentsStatusFieldUpdateOperationsInput | $Enums.IncidentsStatus
  }

  export type IncidentsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    serverId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    moderatorId?: StringFieldUpdateOperationsInput | string
    type?: EnumIncidentsTypeFieldUpdateOperationsInput | $Enums.IncidentsType
    reason?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumIncidentsStatusFieldUpdateOperationsInput | $Enums.IncidentsStatus
  }

  export type ProductsCreateInput = {
    id: string
    name: string
    type: $Enums.ProductType
    prices?: PricesCreateNestedManyWithoutProductInput
  }

  export type ProductsUncheckedCreateInput = {
    id: string
    name: string
    type: $Enums.ProductType
    prices?: PricesUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumProductTypeFieldUpdateOperationsInput | $Enums.ProductType
    prices?: PricesUpdateManyWithoutProductNestedInput
  }

  export type ProductsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumProductTypeFieldUpdateOperationsInput | $Enums.ProductType
    prices?: PricesUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductsCreateManyInput = {
    id: string
    name: string
    type: $Enums.ProductType
  }

  export type ProductsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumProductTypeFieldUpdateOperationsInput | $Enums.ProductType
  }

  export type ProductsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumProductTypeFieldUpdateOperationsInput | $Enums.ProductType
  }

  export type PricesCreateInput = {
    id: string
    amount: number
    default?: boolean
    product: ProductsCreateNestedOneWithoutPricesInput
  }

  export type PricesUncheckedCreateInput = {
    id: string
    amount: number
    default?: boolean
    productId: string
  }

  export type PricesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    default?: BoolFieldUpdateOperationsInput | boolean
    product?: ProductsUpdateOneRequiredWithoutPricesNestedInput
  }

  export type PricesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    default?: BoolFieldUpdateOperationsInput | boolean
    productId?: StringFieldUpdateOperationsInput | string
  }

  export type PricesCreateManyInput = {
    id: string
    amount: number
    default?: boolean
    productId: string
  }

  export type PricesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    default?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PricesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    default?: BoolFieldUpdateOperationsInput | boolean
    productId?: StringFieldUpdateOperationsInput | string
  }

  export type AutomodConfigCreateInput = {
    id?: string
    active?: boolean
    profanity?: boolean
    matureContent?: boolean
    links?: boolean
    ignoredChannels?: AutomodConfigCreateignoredChannelsInput | string[]
    approvedLinks?: AutomodConfigCreateapprovedLinksInput | string[]
    guild: ServersCreateNestedOneWithoutAutomodConfigInput
  }

  export type AutomodConfigUncheckedCreateInput = {
    id?: string
    active?: boolean
    profanity?: boolean
    matureContent?: boolean
    links?: boolean
    ignoredChannels?: AutomodConfigCreateignoredChannelsInput | string[]
    approvedLinks?: AutomodConfigCreateapprovedLinksInput | string[]
    guildId: string
  }

  export type AutomodConfigUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    profanity?: BoolFieldUpdateOperationsInput | boolean
    matureContent?: BoolFieldUpdateOperationsInput | boolean
    links?: BoolFieldUpdateOperationsInput | boolean
    ignoredChannels?: AutomodConfigUpdateignoredChannelsInput | string[]
    approvedLinks?: AutomodConfigUpdateapprovedLinksInput | string[]
    guild?: ServersUpdateOneRequiredWithoutAutomodConfigNestedInput
  }

  export type AutomodConfigUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    profanity?: BoolFieldUpdateOperationsInput | boolean
    matureContent?: BoolFieldUpdateOperationsInput | boolean
    links?: BoolFieldUpdateOperationsInput | boolean
    ignoredChannels?: AutomodConfigUpdateignoredChannelsInput | string[]
    approvedLinks?: AutomodConfigUpdateapprovedLinksInput | string[]
    guildId?: StringFieldUpdateOperationsInput | string
  }

  export type AutomodConfigCreateManyInput = {
    id?: string
    active?: boolean
    profanity?: boolean
    matureContent?: boolean
    links?: boolean
    ignoredChannels?: AutomodConfigCreateignoredChannelsInput | string[]
    approvedLinks?: AutomodConfigCreateapprovedLinksInput | string[]
    guildId: string
  }

  export type AutomodConfigUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    profanity?: BoolFieldUpdateOperationsInput | boolean
    matureContent?: BoolFieldUpdateOperationsInput | boolean
    links?: BoolFieldUpdateOperationsInput | boolean
    ignoredChannels?: AutomodConfigUpdateignoredChannelsInput | string[]
    approvedLinks?: AutomodConfigUpdateapprovedLinksInput | string[]
  }

  export type AutomodConfigUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    profanity?: BoolFieldUpdateOperationsInput | boolean
    matureContent?: BoolFieldUpdateOperationsInput | boolean
    links?: BoolFieldUpdateOperationsInput | boolean
    ignoredChannels?: AutomodConfigUpdateignoredChannelsInput | string[]
    approvedLinks?: AutomodConfigUpdateapprovedLinksInput | string[]
    guildId?: StringFieldUpdateOperationsInput | string
  }

  export type TestimonialsCreateInput = {
    id?: string
    username: string
    displayName: string
    userImg: string
    userId?: string | null
    rating: number
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TestimonialsUncheckedCreateInput = {
    id?: string
    username: string
    displayName: string
    userImg: string
    userId?: string | null
    rating: number
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TestimonialsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    userImg?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestimonialsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    userImg?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestimonialsCreateManyInput = {
    id?: string
    username: string
    displayName: string
    userImg: string
    userId?: string | null
    rating: number
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TestimonialsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    userImg?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestimonialsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    userImg?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginMethod?: string | null
    username?: string | null
    locale?: string | null
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginMethod?: string | null
    username?: string | null
    locale?: string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginMethod?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    locale?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginMethod?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    locale?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginMethod?: string | null
    username?: string | null
    locale?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginMethod?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    locale?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginMethod?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    locale?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionCreateInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    userId: string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SessionCreateManyInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    userId: string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type AccountCreateInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateManyInput = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCreateInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerificationUncheckedCreateInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCreateManyInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type EnumPlansFilter<$PrismaModel = never> = {
    equals?: $Enums.Plans | EnumPlansFieldRefInput<$PrismaModel>
    in?: $Enums.Plans[] | ListEnumPlansFieldRefInput<$PrismaModel>
    notIn?: $Enums.Plans[] | ListEnumPlansFieldRefInput<$PrismaModel>
    not?: NestedEnumPlansFilter<$PrismaModel> | $Enums.Plans
  }

  export type PremiumSubscriptionsNullableScalarRelationFilter = {
    is?: PremiumSubscriptionsWhereInput | null
    isNot?: PremiumSubscriptionsWhereInput | null
  }

  export type LimitsNullableScalarRelationFilter = {
    is?: LimitsWhereInput | null
    isNot?: LimitsWhereInput | null
  }

  export type ServersListRelationFilter = {
    every?: ServersWhereInput
    some?: ServersWhereInput
    none?: ServersWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ServersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    extId?: SortOrder
    discordId?: SortOrder
    discordUsername?: SortOrder
    kickId?: SortOrder
    kickUsername?: SortOrder
    role?: SortOrder
    customerId?: SortOrder
    timezone?: SortOrder
    plan?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    extId?: SortOrder
    discordId?: SortOrder
    discordUsername?: SortOrder
    kickId?: SortOrder
    kickUsername?: SortOrder
    role?: SortOrder
    customerId?: SortOrder
    timezone?: SortOrder
    plan?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    extId?: SortOrder
    discordId?: SortOrder
    discordUsername?: SortOrder
    kickId?: SortOrder
    kickUsername?: SortOrder
    role?: SortOrder
    customerId?: SortOrder
    timezone?: SortOrder
    plan?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type EnumPlansWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Plans | EnumPlansFieldRefInput<$PrismaModel>
    in?: $Enums.Plans[] | ListEnumPlansFieldRefInput<$PrismaModel>
    notIn?: $Enums.Plans[] | ListEnumPlansFieldRefInput<$PrismaModel>
    not?: NestedEnumPlansWithAggregatesFilter<$PrismaModel> | $Enums.Plans
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlansFilter<$PrismaModel>
    _max?: NestedEnumPlansFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type UsersScalarRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type LimitsCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    aiUsed?: SortOrder
    aiLimit?: SortOrder
    additionalMessages?: SortOrder
    premiumServers?: SortOrder
    premiumServerLimmit?: SortOrder
  }

  export type LimitsAvgOrderByAggregateInput = {
    aiUsed?: SortOrder
    aiLimit?: SortOrder
    additionalMessages?: SortOrder
    premiumServers?: SortOrder
    premiumServerLimmit?: SortOrder
  }

  export type LimitsMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    aiUsed?: SortOrder
    aiLimit?: SortOrder
    additionalMessages?: SortOrder
    premiumServers?: SortOrder
    premiumServerLimmit?: SortOrder
  }

  export type LimitsMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    aiUsed?: SortOrder
    aiLimit?: SortOrder
    additionalMessages?: SortOrder
    premiumServers?: SortOrder
    premiumServerLimmit?: SortOrder
  }

  export type LimitsSumOrderByAggregateInput = {
    aiUsed?: SortOrder
    aiLimit?: SortOrder
    additionalMessages?: SortOrder
    premiumServers?: SortOrder
    premiumServerLimmit?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumLogLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.LogLevel | EnumLogLevelFieldRefInput<$PrismaModel>
    in?: $Enums.LogLevel[] | ListEnumLogLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.LogLevel[] | ListEnumLogLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumLogLevelFilter<$PrismaModel> | $Enums.LogLevel
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UsersNullableScalarRelationFilter = {
    is?: UsersWhereInput | null
    isNot?: UsersWhereInput | null
  }

  export type AutomodConfigListRelationFilter = {
    every?: AutomodConfigWhereInput
    some?: AutomodConfigWhereInput
    none?: AutomodConfigWhereInput
  }

  export type ServerSubscriptionsListRelationFilter = {
    every?: ServerSubscriptionsWhereInput
    some?: ServerSubscriptionsWhereInput
    none?: ServerSubscriptionsWhereInput
  }

  export type AutomodConfigOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ServerSubscriptionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ServersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    ownerId?: SortOrder
    icon?: SortOrder
    isPremium?: SortOrder
    premiumAddedBy?: SortOrder
    aiEnabled?: SortOrder
    welcomeChannel?: SortOrder
    announcementChannel?: SortOrder
    updatesChannel?: SortOrder
    logsChannel?: SortOrder
    logLevel?: SortOrder
    inviteLink?: SortOrder
    inviteCode?: SortOrder
    lastOpened?: SortOrder
    cleoPersonalityName?: SortOrder
    cleoPersonalityId?: SortOrder
  }

  export type ServersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    ownerId?: SortOrder
    icon?: SortOrder
    isPremium?: SortOrder
    premiumAddedBy?: SortOrder
    aiEnabled?: SortOrder
    welcomeChannel?: SortOrder
    announcementChannel?: SortOrder
    updatesChannel?: SortOrder
    logsChannel?: SortOrder
    logLevel?: SortOrder
    inviteLink?: SortOrder
    inviteCode?: SortOrder
    lastOpened?: SortOrder
    cleoPersonalityName?: SortOrder
    cleoPersonalityId?: SortOrder
  }

  export type ServersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    ownerId?: SortOrder
    icon?: SortOrder
    isPremium?: SortOrder
    premiumAddedBy?: SortOrder
    aiEnabled?: SortOrder
    welcomeChannel?: SortOrder
    announcementChannel?: SortOrder
    updatesChannel?: SortOrder
    logsChannel?: SortOrder
    logLevel?: SortOrder
    inviteLink?: SortOrder
    inviteCode?: SortOrder
    lastOpened?: SortOrder
    cleoPersonalityName?: SortOrder
    cleoPersonalityId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumLogLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LogLevel | EnumLogLevelFieldRefInput<$PrismaModel>
    in?: $Enums.LogLevel[] | ListEnumLogLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.LogLevel[] | ListEnumLogLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumLogLevelWithAggregatesFilter<$PrismaModel> | $Enums.LogLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLogLevelFilter<$PrismaModel>
    _max?: NestedEnumLogLevelFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumSourcesFilter<$PrismaModel = never> = {
    equals?: $Enums.Sources | EnumSourcesFieldRefInput<$PrismaModel>
    in?: $Enums.Sources[] | ListEnumSourcesFieldRefInput<$PrismaModel>
    notIn?: $Enums.Sources[] | ListEnumSourcesFieldRefInput<$PrismaModel>
    not?: NestedEnumSourcesFilter<$PrismaModel> | $Enums.Sources
  }

  export type PremiumSubscriptionsCountOrderByAggregateInput = {
    id?: SortOrder
    tier?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    source?: SortOrder
  }

  export type PremiumSubscriptionsMaxOrderByAggregateInput = {
    id?: SortOrder
    tier?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    source?: SortOrder
  }

  export type PremiumSubscriptionsMinOrderByAggregateInput = {
    id?: SortOrder
    tier?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    source?: SortOrder
  }

  export type EnumSourcesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Sources | EnumSourcesFieldRefInput<$PrismaModel>
    in?: $Enums.Sources[] | ListEnumSourcesFieldRefInput<$PrismaModel>
    notIn?: $Enums.Sources[] | ListEnumSourcesFieldRefInput<$PrismaModel>
    not?: NestedEnumSourcesWithAggregatesFilter<$PrismaModel> | $Enums.Sources
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSourcesFilter<$PrismaModel>
    _max?: NestedEnumSourcesFilter<$PrismaModel>
  }

  export type ServersScalarRelationFilter = {
    is?: ServersWhereInput
    isNot?: ServersWhereInput
  }

  export type ServerSubscriptionsCountOrderByAggregateInput = {
    id?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    source?: SortOrder
    subscriptionId?: SortOrder
  }

  export type ServerSubscriptionsMaxOrderByAggregateInput = {
    id?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    source?: SortOrder
    subscriptionId?: SortOrder
  }

  export type ServerSubscriptionsMinOrderByAggregateInput = {
    id?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    source?: SortOrder
    subscriptionId?: SortOrder
  }

  export type ErrorLogCountOrderByAggregateInput = {
    id?: SortOrder
    process?: SortOrder
    message?: SortOrder
    stackTrace?: SortOrder
    timestamp?: SortOrder
  }

  export type ErrorLogMaxOrderByAggregateInput = {
    id?: SortOrder
    process?: SortOrder
    message?: SortOrder
    stackTrace?: SortOrder
    timestamp?: SortOrder
  }

  export type ErrorLogMinOrderByAggregateInput = {
    id?: SortOrder
    process?: SortOrder
    message?: SortOrder
    stackTrace?: SortOrder
    timestamp?: SortOrder
  }

  export type EnumIncidentsTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.IncidentsType | EnumIncidentsTypeFieldRefInput<$PrismaModel>
    in?: $Enums.IncidentsType[] | ListEnumIncidentsTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.IncidentsType[] | ListEnumIncidentsTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumIncidentsTypeFilter<$PrismaModel> | $Enums.IncidentsType
  }

  export type EnumIncidentsStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.IncidentsStatus | EnumIncidentsStatusFieldRefInput<$PrismaModel>
    in?: $Enums.IncidentsStatus[] | ListEnumIncidentsStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.IncidentsStatus[] | ListEnumIncidentsStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumIncidentsStatusFilter<$PrismaModel> | $Enums.IncidentsStatus
  }

  export type IncidentsCountOrderByAggregateInput = {
    id?: SortOrder
    serverId?: SortOrder
    userId?: SortOrder
    moderatorId?: SortOrder
    type?: SortOrder
    reason?: SortOrder
    timestamp?: SortOrder
    status?: SortOrder
  }

  export type IncidentsMaxOrderByAggregateInput = {
    id?: SortOrder
    serverId?: SortOrder
    userId?: SortOrder
    moderatorId?: SortOrder
    type?: SortOrder
    reason?: SortOrder
    timestamp?: SortOrder
    status?: SortOrder
  }

  export type IncidentsMinOrderByAggregateInput = {
    id?: SortOrder
    serverId?: SortOrder
    userId?: SortOrder
    moderatorId?: SortOrder
    type?: SortOrder
    reason?: SortOrder
    timestamp?: SortOrder
    status?: SortOrder
  }

  export type EnumIncidentsTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.IncidentsType | EnumIncidentsTypeFieldRefInput<$PrismaModel>
    in?: $Enums.IncidentsType[] | ListEnumIncidentsTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.IncidentsType[] | ListEnumIncidentsTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumIncidentsTypeWithAggregatesFilter<$PrismaModel> | $Enums.IncidentsType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumIncidentsTypeFilter<$PrismaModel>
    _max?: NestedEnumIncidentsTypeFilter<$PrismaModel>
  }

  export type EnumIncidentsStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.IncidentsStatus | EnumIncidentsStatusFieldRefInput<$PrismaModel>
    in?: $Enums.IncidentsStatus[] | ListEnumIncidentsStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.IncidentsStatus[] | ListEnumIncidentsStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumIncidentsStatusWithAggregatesFilter<$PrismaModel> | $Enums.IncidentsStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumIncidentsStatusFilter<$PrismaModel>
    _max?: NestedEnumIncidentsStatusFilter<$PrismaModel>
  }

  export type EnumProductTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductType | EnumProductTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProductType[] | ListEnumProductTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProductType[] | ListEnumProductTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumProductTypeFilter<$PrismaModel> | $Enums.ProductType
  }

  export type PricesListRelationFilter = {
    every?: PricesWhereInput
    some?: PricesWhereInput
    none?: PricesWhereInput
  }

  export type PricesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
  }

  export type ProductsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
  }

  export type ProductsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
  }

  export type EnumProductTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductType | EnumProductTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProductType[] | ListEnumProductTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProductType[] | ListEnumProductTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumProductTypeWithAggregatesFilter<$PrismaModel> | $Enums.ProductType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProductTypeFilter<$PrismaModel>
    _max?: NestedEnumProductTypeFilter<$PrismaModel>
  }

  export type ProductsScalarRelationFilter = {
    is?: ProductsWhereInput
    isNot?: ProductsWhereInput
  }

  export type PricesCountOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    default?: SortOrder
    productId?: SortOrder
  }

  export type PricesAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type PricesMaxOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    default?: SortOrder
    productId?: SortOrder
  }

  export type PricesMinOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    default?: SortOrder
    productId?: SortOrder
  }

  export type PricesSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type AutomodConfigCountOrderByAggregateInput = {
    id?: SortOrder
    active?: SortOrder
    profanity?: SortOrder
    matureContent?: SortOrder
    links?: SortOrder
    ignoredChannels?: SortOrder
    approvedLinks?: SortOrder
    guildId?: SortOrder
  }

  export type AutomodConfigMaxOrderByAggregateInput = {
    id?: SortOrder
    active?: SortOrder
    profanity?: SortOrder
    matureContent?: SortOrder
    links?: SortOrder
    guildId?: SortOrder
  }

  export type AutomodConfigMinOrderByAggregateInput = {
    id?: SortOrder
    active?: SortOrder
    profanity?: SortOrder
    matureContent?: SortOrder
    links?: SortOrder
    guildId?: SortOrder
  }

  export type TestimonialsCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    displayName?: SortOrder
    userImg?: SortOrder
    userId?: SortOrder
    rating?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TestimonialsAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type TestimonialsMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    displayName?: SortOrder
    userImg?: SortOrder
    userId?: SortOrder
    rating?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TestimonialsMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    displayName?: SortOrder
    userImg?: SortOrder
    userId?: SortOrder
    rating?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TestimonialsSumOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLoginMethod?: SortOrder
    username?: SortOrder
    locale?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLoginMethod?: SortOrder
    username?: SortOrder
    locale?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLoginMethod?: SortOrder
    username?: SortOrder
    locale?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationCountOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationMaxOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationMinOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PremiumSubscriptionsCreateNestedOneWithoutUserInput = {
    create?: XOR<PremiumSubscriptionsCreateWithoutUserInput, PremiumSubscriptionsUncheckedCreateWithoutUserInput>
    connectOrCreate?: PremiumSubscriptionsCreateOrConnectWithoutUserInput
    connect?: PremiumSubscriptionsWhereUniqueInput
  }

  export type LimitsCreateNestedOneWithoutUserInput = {
    create?: XOR<LimitsCreateWithoutUserInput, LimitsUncheckedCreateWithoutUserInput>
    connectOrCreate?: LimitsCreateOrConnectWithoutUserInput
    connect?: LimitsWhereUniqueInput
  }

  export type ServersCreateNestedManyWithoutPremiumUserInput = {
    create?: XOR<ServersCreateWithoutPremiumUserInput, ServersUncheckedCreateWithoutPremiumUserInput> | ServersCreateWithoutPremiumUserInput[] | ServersUncheckedCreateWithoutPremiumUserInput[]
    connectOrCreate?: ServersCreateOrConnectWithoutPremiumUserInput | ServersCreateOrConnectWithoutPremiumUserInput[]
    createMany?: ServersCreateManyPremiumUserInputEnvelope
    connect?: ServersWhereUniqueInput | ServersWhereUniqueInput[]
  }

  export type PremiumSubscriptionsUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<PremiumSubscriptionsCreateWithoutUserInput, PremiumSubscriptionsUncheckedCreateWithoutUserInput>
    connectOrCreate?: PremiumSubscriptionsCreateOrConnectWithoutUserInput
    connect?: PremiumSubscriptionsWhereUniqueInput
  }

  export type LimitsUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<LimitsCreateWithoutUserInput, LimitsUncheckedCreateWithoutUserInput>
    connectOrCreate?: LimitsCreateOrConnectWithoutUserInput
    connect?: LimitsWhereUniqueInput
  }

  export type ServersUncheckedCreateNestedManyWithoutPremiumUserInput = {
    create?: XOR<ServersCreateWithoutPremiumUserInput, ServersUncheckedCreateWithoutPremiumUserInput> | ServersCreateWithoutPremiumUserInput[] | ServersUncheckedCreateWithoutPremiumUserInput[]
    connectOrCreate?: ServersCreateOrConnectWithoutPremiumUserInput | ServersCreateOrConnectWithoutPremiumUserInput[]
    createMany?: ServersCreateManyPremiumUserInputEnvelope
    connect?: ServersWhereUniqueInput | ServersWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type EnumPlansFieldUpdateOperationsInput = {
    set?: $Enums.Plans
  }

  export type PremiumSubscriptionsUpdateOneWithoutUserNestedInput = {
    create?: XOR<PremiumSubscriptionsCreateWithoutUserInput, PremiumSubscriptionsUncheckedCreateWithoutUserInput>
    connectOrCreate?: PremiumSubscriptionsCreateOrConnectWithoutUserInput
    upsert?: PremiumSubscriptionsUpsertWithoutUserInput
    disconnect?: PremiumSubscriptionsWhereInput | boolean
    delete?: PremiumSubscriptionsWhereInput | boolean
    connect?: PremiumSubscriptionsWhereUniqueInput
    update?: XOR<XOR<PremiumSubscriptionsUpdateToOneWithWhereWithoutUserInput, PremiumSubscriptionsUpdateWithoutUserInput>, PremiumSubscriptionsUncheckedUpdateWithoutUserInput>
  }

  export type LimitsUpdateOneWithoutUserNestedInput = {
    create?: XOR<LimitsCreateWithoutUserInput, LimitsUncheckedCreateWithoutUserInput>
    connectOrCreate?: LimitsCreateOrConnectWithoutUserInput
    upsert?: LimitsUpsertWithoutUserInput
    disconnect?: LimitsWhereInput | boolean
    delete?: LimitsWhereInput | boolean
    connect?: LimitsWhereUniqueInput
    update?: XOR<XOR<LimitsUpdateToOneWithWhereWithoutUserInput, LimitsUpdateWithoutUserInput>, LimitsUncheckedUpdateWithoutUserInput>
  }

  export type ServersUpdateManyWithoutPremiumUserNestedInput = {
    create?: XOR<ServersCreateWithoutPremiumUserInput, ServersUncheckedCreateWithoutPremiumUserInput> | ServersCreateWithoutPremiumUserInput[] | ServersUncheckedCreateWithoutPremiumUserInput[]
    connectOrCreate?: ServersCreateOrConnectWithoutPremiumUserInput | ServersCreateOrConnectWithoutPremiumUserInput[]
    upsert?: ServersUpsertWithWhereUniqueWithoutPremiumUserInput | ServersUpsertWithWhereUniqueWithoutPremiumUserInput[]
    createMany?: ServersCreateManyPremiumUserInputEnvelope
    set?: ServersWhereUniqueInput | ServersWhereUniqueInput[]
    disconnect?: ServersWhereUniqueInput | ServersWhereUniqueInput[]
    delete?: ServersWhereUniqueInput | ServersWhereUniqueInput[]
    connect?: ServersWhereUniqueInput | ServersWhereUniqueInput[]
    update?: ServersUpdateWithWhereUniqueWithoutPremiumUserInput | ServersUpdateWithWhereUniqueWithoutPremiumUserInput[]
    updateMany?: ServersUpdateManyWithWhereWithoutPremiumUserInput | ServersUpdateManyWithWhereWithoutPremiumUserInput[]
    deleteMany?: ServersScalarWhereInput | ServersScalarWhereInput[]
  }

  export type PremiumSubscriptionsUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<PremiumSubscriptionsCreateWithoutUserInput, PremiumSubscriptionsUncheckedCreateWithoutUserInput>
    connectOrCreate?: PremiumSubscriptionsCreateOrConnectWithoutUserInput
    upsert?: PremiumSubscriptionsUpsertWithoutUserInput
    disconnect?: PremiumSubscriptionsWhereInput | boolean
    delete?: PremiumSubscriptionsWhereInput | boolean
    connect?: PremiumSubscriptionsWhereUniqueInput
    update?: XOR<XOR<PremiumSubscriptionsUpdateToOneWithWhereWithoutUserInput, PremiumSubscriptionsUpdateWithoutUserInput>, PremiumSubscriptionsUncheckedUpdateWithoutUserInput>
  }

  export type LimitsUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<LimitsCreateWithoutUserInput, LimitsUncheckedCreateWithoutUserInput>
    connectOrCreate?: LimitsCreateOrConnectWithoutUserInput
    upsert?: LimitsUpsertWithoutUserInput
    disconnect?: LimitsWhereInput | boolean
    delete?: LimitsWhereInput | boolean
    connect?: LimitsWhereUniqueInput
    update?: XOR<XOR<LimitsUpdateToOneWithWhereWithoutUserInput, LimitsUpdateWithoutUserInput>, LimitsUncheckedUpdateWithoutUserInput>
  }

  export type ServersUncheckedUpdateManyWithoutPremiumUserNestedInput = {
    create?: XOR<ServersCreateWithoutPremiumUserInput, ServersUncheckedCreateWithoutPremiumUserInput> | ServersCreateWithoutPremiumUserInput[] | ServersUncheckedCreateWithoutPremiumUserInput[]
    connectOrCreate?: ServersCreateOrConnectWithoutPremiumUserInput | ServersCreateOrConnectWithoutPremiumUserInput[]
    upsert?: ServersUpsertWithWhereUniqueWithoutPremiumUserInput | ServersUpsertWithWhereUniqueWithoutPremiumUserInput[]
    createMany?: ServersCreateManyPremiumUserInputEnvelope
    set?: ServersWhereUniqueInput | ServersWhereUniqueInput[]
    disconnect?: ServersWhereUniqueInput | ServersWhereUniqueInput[]
    delete?: ServersWhereUniqueInput | ServersWhereUniqueInput[]
    connect?: ServersWhereUniqueInput | ServersWhereUniqueInput[]
    update?: ServersUpdateWithWhereUniqueWithoutPremiumUserInput | ServersUpdateWithWhereUniqueWithoutPremiumUserInput[]
    updateMany?: ServersUpdateManyWithWhereWithoutPremiumUserInput | ServersUpdateManyWithWhereWithoutPremiumUserInput[]
    deleteMany?: ServersScalarWhereInput | ServersScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutLimitsInput = {
    create?: XOR<UsersCreateWithoutLimitsInput, UsersUncheckedCreateWithoutLimitsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutLimitsInput
    connect?: UsersWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UsersUpdateOneRequiredWithoutLimitsNestedInput = {
    create?: XOR<UsersCreateWithoutLimitsInput, UsersUncheckedCreateWithoutLimitsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutLimitsInput
    upsert?: UsersUpsertWithoutLimitsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutLimitsInput, UsersUpdateWithoutLimitsInput>, UsersUncheckedUpdateWithoutLimitsInput>
  }

  export type UsersCreateNestedOneWithoutPremiumServersInput = {
    create?: XOR<UsersCreateWithoutPremiumServersInput, UsersUncheckedCreateWithoutPremiumServersInput>
    connectOrCreate?: UsersCreateOrConnectWithoutPremiumServersInput
    connect?: UsersWhereUniqueInput
  }

  export type AutomodConfigCreateNestedManyWithoutGuildInput = {
    create?: XOR<AutomodConfigCreateWithoutGuildInput, AutomodConfigUncheckedCreateWithoutGuildInput> | AutomodConfigCreateWithoutGuildInput[] | AutomodConfigUncheckedCreateWithoutGuildInput[]
    connectOrCreate?: AutomodConfigCreateOrConnectWithoutGuildInput | AutomodConfigCreateOrConnectWithoutGuildInput[]
    createMany?: AutomodConfigCreateManyGuildInputEnvelope
    connect?: AutomodConfigWhereUniqueInput | AutomodConfigWhereUniqueInput[]
  }

  export type ServerSubscriptionsCreateNestedManyWithoutServerInput = {
    create?: XOR<ServerSubscriptionsCreateWithoutServerInput, ServerSubscriptionsUncheckedCreateWithoutServerInput> | ServerSubscriptionsCreateWithoutServerInput[] | ServerSubscriptionsUncheckedCreateWithoutServerInput[]
    connectOrCreate?: ServerSubscriptionsCreateOrConnectWithoutServerInput | ServerSubscriptionsCreateOrConnectWithoutServerInput[]
    createMany?: ServerSubscriptionsCreateManyServerInputEnvelope
    connect?: ServerSubscriptionsWhereUniqueInput | ServerSubscriptionsWhereUniqueInput[]
  }

  export type AutomodConfigUncheckedCreateNestedManyWithoutGuildInput = {
    create?: XOR<AutomodConfigCreateWithoutGuildInput, AutomodConfigUncheckedCreateWithoutGuildInput> | AutomodConfigCreateWithoutGuildInput[] | AutomodConfigUncheckedCreateWithoutGuildInput[]
    connectOrCreate?: AutomodConfigCreateOrConnectWithoutGuildInput | AutomodConfigCreateOrConnectWithoutGuildInput[]
    createMany?: AutomodConfigCreateManyGuildInputEnvelope
    connect?: AutomodConfigWhereUniqueInput | AutomodConfigWhereUniqueInput[]
  }

  export type ServerSubscriptionsUncheckedCreateNestedManyWithoutServerInput = {
    create?: XOR<ServerSubscriptionsCreateWithoutServerInput, ServerSubscriptionsUncheckedCreateWithoutServerInput> | ServerSubscriptionsCreateWithoutServerInput[] | ServerSubscriptionsUncheckedCreateWithoutServerInput[]
    connectOrCreate?: ServerSubscriptionsCreateOrConnectWithoutServerInput | ServerSubscriptionsCreateOrConnectWithoutServerInput[]
    createMany?: ServerSubscriptionsCreateManyServerInputEnvelope
    connect?: ServerSubscriptionsWhereUniqueInput | ServerSubscriptionsWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumLogLevelFieldUpdateOperationsInput = {
    set?: $Enums.LogLevel
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UsersUpdateOneWithoutPremiumServersNestedInput = {
    create?: XOR<UsersCreateWithoutPremiumServersInput, UsersUncheckedCreateWithoutPremiumServersInput>
    connectOrCreate?: UsersCreateOrConnectWithoutPremiumServersInput
    upsert?: UsersUpsertWithoutPremiumServersInput
    disconnect?: UsersWhereInput | boolean
    delete?: UsersWhereInput | boolean
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutPremiumServersInput, UsersUpdateWithoutPremiumServersInput>, UsersUncheckedUpdateWithoutPremiumServersInput>
  }

  export type AutomodConfigUpdateManyWithoutGuildNestedInput = {
    create?: XOR<AutomodConfigCreateWithoutGuildInput, AutomodConfigUncheckedCreateWithoutGuildInput> | AutomodConfigCreateWithoutGuildInput[] | AutomodConfigUncheckedCreateWithoutGuildInput[]
    connectOrCreate?: AutomodConfigCreateOrConnectWithoutGuildInput | AutomodConfigCreateOrConnectWithoutGuildInput[]
    upsert?: AutomodConfigUpsertWithWhereUniqueWithoutGuildInput | AutomodConfigUpsertWithWhereUniqueWithoutGuildInput[]
    createMany?: AutomodConfigCreateManyGuildInputEnvelope
    set?: AutomodConfigWhereUniqueInput | AutomodConfigWhereUniqueInput[]
    disconnect?: AutomodConfigWhereUniqueInput | AutomodConfigWhereUniqueInput[]
    delete?: AutomodConfigWhereUniqueInput | AutomodConfigWhereUniqueInput[]
    connect?: AutomodConfigWhereUniqueInput | AutomodConfigWhereUniqueInput[]
    update?: AutomodConfigUpdateWithWhereUniqueWithoutGuildInput | AutomodConfigUpdateWithWhereUniqueWithoutGuildInput[]
    updateMany?: AutomodConfigUpdateManyWithWhereWithoutGuildInput | AutomodConfigUpdateManyWithWhereWithoutGuildInput[]
    deleteMany?: AutomodConfigScalarWhereInput | AutomodConfigScalarWhereInput[]
  }

  export type ServerSubscriptionsUpdateManyWithoutServerNestedInput = {
    create?: XOR<ServerSubscriptionsCreateWithoutServerInput, ServerSubscriptionsUncheckedCreateWithoutServerInput> | ServerSubscriptionsCreateWithoutServerInput[] | ServerSubscriptionsUncheckedCreateWithoutServerInput[]
    connectOrCreate?: ServerSubscriptionsCreateOrConnectWithoutServerInput | ServerSubscriptionsCreateOrConnectWithoutServerInput[]
    upsert?: ServerSubscriptionsUpsertWithWhereUniqueWithoutServerInput | ServerSubscriptionsUpsertWithWhereUniqueWithoutServerInput[]
    createMany?: ServerSubscriptionsCreateManyServerInputEnvelope
    set?: ServerSubscriptionsWhereUniqueInput | ServerSubscriptionsWhereUniqueInput[]
    disconnect?: ServerSubscriptionsWhereUniqueInput | ServerSubscriptionsWhereUniqueInput[]
    delete?: ServerSubscriptionsWhereUniqueInput | ServerSubscriptionsWhereUniqueInput[]
    connect?: ServerSubscriptionsWhereUniqueInput | ServerSubscriptionsWhereUniqueInput[]
    update?: ServerSubscriptionsUpdateWithWhereUniqueWithoutServerInput | ServerSubscriptionsUpdateWithWhereUniqueWithoutServerInput[]
    updateMany?: ServerSubscriptionsUpdateManyWithWhereWithoutServerInput | ServerSubscriptionsUpdateManyWithWhereWithoutServerInput[]
    deleteMany?: ServerSubscriptionsScalarWhereInput | ServerSubscriptionsScalarWhereInput[]
  }

  export type AutomodConfigUncheckedUpdateManyWithoutGuildNestedInput = {
    create?: XOR<AutomodConfigCreateWithoutGuildInput, AutomodConfigUncheckedCreateWithoutGuildInput> | AutomodConfigCreateWithoutGuildInput[] | AutomodConfigUncheckedCreateWithoutGuildInput[]
    connectOrCreate?: AutomodConfigCreateOrConnectWithoutGuildInput | AutomodConfigCreateOrConnectWithoutGuildInput[]
    upsert?: AutomodConfigUpsertWithWhereUniqueWithoutGuildInput | AutomodConfigUpsertWithWhereUniqueWithoutGuildInput[]
    createMany?: AutomodConfigCreateManyGuildInputEnvelope
    set?: AutomodConfigWhereUniqueInput | AutomodConfigWhereUniqueInput[]
    disconnect?: AutomodConfigWhereUniqueInput | AutomodConfigWhereUniqueInput[]
    delete?: AutomodConfigWhereUniqueInput | AutomodConfigWhereUniqueInput[]
    connect?: AutomodConfigWhereUniqueInput | AutomodConfigWhereUniqueInput[]
    update?: AutomodConfigUpdateWithWhereUniqueWithoutGuildInput | AutomodConfigUpdateWithWhereUniqueWithoutGuildInput[]
    updateMany?: AutomodConfigUpdateManyWithWhereWithoutGuildInput | AutomodConfigUpdateManyWithWhereWithoutGuildInput[]
    deleteMany?: AutomodConfigScalarWhereInput | AutomodConfigScalarWhereInput[]
  }

  export type ServerSubscriptionsUncheckedUpdateManyWithoutServerNestedInput = {
    create?: XOR<ServerSubscriptionsCreateWithoutServerInput, ServerSubscriptionsUncheckedCreateWithoutServerInput> | ServerSubscriptionsCreateWithoutServerInput[] | ServerSubscriptionsUncheckedCreateWithoutServerInput[]
    connectOrCreate?: ServerSubscriptionsCreateOrConnectWithoutServerInput | ServerSubscriptionsCreateOrConnectWithoutServerInput[]
    upsert?: ServerSubscriptionsUpsertWithWhereUniqueWithoutServerInput | ServerSubscriptionsUpsertWithWhereUniqueWithoutServerInput[]
    createMany?: ServerSubscriptionsCreateManyServerInputEnvelope
    set?: ServerSubscriptionsWhereUniqueInput | ServerSubscriptionsWhereUniqueInput[]
    disconnect?: ServerSubscriptionsWhereUniqueInput | ServerSubscriptionsWhereUniqueInput[]
    delete?: ServerSubscriptionsWhereUniqueInput | ServerSubscriptionsWhereUniqueInput[]
    connect?: ServerSubscriptionsWhereUniqueInput | ServerSubscriptionsWhereUniqueInput[]
    update?: ServerSubscriptionsUpdateWithWhereUniqueWithoutServerInput | ServerSubscriptionsUpdateWithWhereUniqueWithoutServerInput[]
    updateMany?: ServerSubscriptionsUpdateManyWithWhereWithoutServerInput | ServerSubscriptionsUpdateManyWithWhereWithoutServerInput[]
    deleteMany?: ServerSubscriptionsScalarWhereInput | ServerSubscriptionsScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutPremiumSubscriptionsInput = {
    create?: XOR<UsersCreateWithoutPremiumSubscriptionsInput, UsersUncheckedCreateWithoutPremiumSubscriptionsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutPremiumSubscriptionsInput
    connect?: UsersWhereUniqueInput
  }

  export type EnumSourcesFieldUpdateOperationsInput = {
    set?: $Enums.Sources
  }

  export type UsersUpdateOneRequiredWithoutPremiumSubscriptionsNestedInput = {
    create?: XOR<UsersCreateWithoutPremiumSubscriptionsInput, UsersUncheckedCreateWithoutPremiumSubscriptionsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutPremiumSubscriptionsInput
    upsert?: UsersUpsertWithoutPremiumSubscriptionsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutPremiumSubscriptionsInput, UsersUpdateWithoutPremiumSubscriptionsInput>, UsersUncheckedUpdateWithoutPremiumSubscriptionsInput>
  }

  export type ServersCreateNestedOneWithoutServerSubscriptionsInput = {
    create?: XOR<ServersCreateWithoutServerSubscriptionsInput, ServersUncheckedCreateWithoutServerSubscriptionsInput>
    connectOrCreate?: ServersCreateOrConnectWithoutServerSubscriptionsInput
    connect?: ServersWhereUniqueInput
  }

  export type ServersUpdateOneRequiredWithoutServerSubscriptionsNestedInput = {
    create?: XOR<ServersCreateWithoutServerSubscriptionsInput, ServersUncheckedCreateWithoutServerSubscriptionsInput>
    connectOrCreate?: ServersCreateOrConnectWithoutServerSubscriptionsInput
    upsert?: ServersUpsertWithoutServerSubscriptionsInput
    connect?: ServersWhereUniqueInput
    update?: XOR<XOR<ServersUpdateToOneWithWhereWithoutServerSubscriptionsInput, ServersUpdateWithoutServerSubscriptionsInput>, ServersUncheckedUpdateWithoutServerSubscriptionsInput>
  }

  export type EnumIncidentsTypeFieldUpdateOperationsInput = {
    set?: $Enums.IncidentsType
  }

  export type EnumIncidentsStatusFieldUpdateOperationsInput = {
    set?: $Enums.IncidentsStatus
  }

  export type PricesCreateNestedManyWithoutProductInput = {
    create?: XOR<PricesCreateWithoutProductInput, PricesUncheckedCreateWithoutProductInput> | PricesCreateWithoutProductInput[] | PricesUncheckedCreateWithoutProductInput[]
    connectOrCreate?: PricesCreateOrConnectWithoutProductInput | PricesCreateOrConnectWithoutProductInput[]
    createMany?: PricesCreateManyProductInputEnvelope
    connect?: PricesWhereUniqueInput | PricesWhereUniqueInput[]
  }

  export type PricesUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<PricesCreateWithoutProductInput, PricesUncheckedCreateWithoutProductInput> | PricesCreateWithoutProductInput[] | PricesUncheckedCreateWithoutProductInput[]
    connectOrCreate?: PricesCreateOrConnectWithoutProductInput | PricesCreateOrConnectWithoutProductInput[]
    createMany?: PricesCreateManyProductInputEnvelope
    connect?: PricesWhereUniqueInput | PricesWhereUniqueInput[]
  }

  export type EnumProductTypeFieldUpdateOperationsInput = {
    set?: $Enums.ProductType
  }

  export type PricesUpdateManyWithoutProductNestedInput = {
    create?: XOR<PricesCreateWithoutProductInput, PricesUncheckedCreateWithoutProductInput> | PricesCreateWithoutProductInput[] | PricesUncheckedCreateWithoutProductInput[]
    connectOrCreate?: PricesCreateOrConnectWithoutProductInput | PricesCreateOrConnectWithoutProductInput[]
    upsert?: PricesUpsertWithWhereUniqueWithoutProductInput | PricesUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: PricesCreateManyProductInputEnvelope
    set?: PricesWhereUniqueInput | PricesWhereUniqueInput[]
    disconnect?: PricesWhereUniqueInput | PricesWhereUniqueInput[]
    delete?: PricesWhereUniqueInput | PricesWhereUniqueInput[]
    connect?: PricesWhereUniqueInput | PricesWhereUniqueInput[]
    update?: PricesUpdateWithWhereUniqueWithoutProductInput | PricesUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: PricesUpdateManyWithWhereWithoutProductInput | PricesUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: PricesScalarWhereInput | PricesScalarWhereInput[]
  }

  export type PricesUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<PricesCreateWithoutProductInput, PricesUncheckedCreateWithoutProductInput> | PricesCreateWithoutProductInput[] | PricesUncheckedCreateWithoutProductInput[]
    connectOrCreate?: PricesCreateOrConnectWithoutProductInput | PricesCreateOrConnectWithoutProductInput[]
    upsert?: PricesUpsertWithWhereUniqueWithoutProductInput | PricesUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: PricesCreateManyProductInputEnvelope
    set?: PricesWhereUniqueInput | PricesWhereUniqueInput[]
    disconnect?: PricesWhereUniqueInput | PricesWhereUniqueInput[]
    delete?: PricesWhereUniqueInput | PricesWhereUniqueInput[]
    connect?: PricesWhereUniqueInput | PricesWhereUniqueInput[]
    update?: PricesUpdateWithWhereUniqueWithoutProductInput | PricesUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: PricesUpdateManyWithWhereWithoutProductInput | PricesUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: PricesScalarWhereInput | PricesScalarWhereInput[]
  }

  export type ProductsCreateNestedOneWithoutPricesInput = {
    create?: XOR<ProductsCreateWithoutPricesInput, ProductsUncheckedCreateWithoutPricesInput>
    connectOrCreate?: ProductsCreateOrConnectWithoutPricesInput
    connect?: ProductsWhereUniqueInput
  }

  export type ProductsUpdateOneRequiredWithoutPricesNestedInput = {
    create?: XOR<ProductsCreateWithoutPricesInput, ProductsUncheckedCreateWithoutPricesInput>
    connectOrCreate?: ProductsCreateOrConnectWithoutPricesInput
    upsert?: ProductsUpsertWithoutPricesInput
    connect?: ProductsWhereUniqueInput
    update?: XOR<XOR<ProductsUpdateToOneWithWhereWithoutPricesInput, ProductsUpdateWithoutPricesInput>, ProductsUncheckedUpdateWithoutPricesInput>
  }

  export type AutomodConfigCreateignoredChannelsInput = {
    set: string[]
  }

  export type AutomodConfigCreateapprovedLinksInput = {
    set: string[]
  }

  export type ServersCreateNestedOneWithoutAutomodConfigInput = {
    create?: XOR<ServersCreateWithoutAutomodConfigInput, ServersUncheckedCreateWithoutAutomodConfigInput>
    connectOrCreate?: ServersCreateOrConnectWithoutAutomodConfigInput
    connect?: ServersWhereUniqueInput
  }

  export type AutomodConfigUpdateignoredChannelsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type AutomodConfigUpdateapprovedLinksInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ServersUpdateOneRequiredWithoutAutomodConfigNestedInput = {
    create?: XOR<ServersCreateWithoutAutomodConfigInput, ServersUncheckedCreateWithoutAutomodConfigInput>
    connectOrCreate?: ServersCreateOrConnectWithoutAutomodConfigInput
    upsert?: ServersUpsertWithoutAutomodConfigInput
    connect?: ServersWhereUniqueInput
    update?: XOR<XOR<ServersUpdateToOneWithWhereWithoutAutomodConfigInput, ServersUpdateWithoutAutomodConfigInput>, ServersUncheckedUpdateWithoutAutomodConfigInput>
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumPlansFilter<$PrismaModel = never> = {
    equals?: $Enums.Plans | EnumPlansFieldRefInput<$PrismaModel>
    in?: $Enums.Plans[] | ListEnumPlansFieldRefInput<$PrismaModel>
    notIn?: $Enums.Plans[] | ListEnumPlansFieldRefInput<$PrismaModel>
    not?: NestedEnumPlansFilter<$PrismaModel> | $Enums.Plans
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedEnumPlansWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Plans | EnumPlansFieldRefInput<$PrismaModel>
    in?: $Enums.Plans[] | ListEnumPlansFieldRefInput<$PrismaModel>
    notIn?: $Enums.Plans[] | ListEnumPlansFieldRefInput<$PrismaModel>
    not?: NestedEnumPlansWithAggregatesFilter<$PrismaModel> | $Enums.Plans
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlansFilter<$PrismaModel>
    _max?: NestedEnumPlansFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumLogLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.LogLevel | EnumLogLevelFieldRefInput<$PrismaModel>
    in?: $Enums.LogLevel[] | ListEnumLogLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.LogLevel[] | ListEnumLogLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumLogLevelFilter<$PrismaModel> | $Enums.LogLevel
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumLogLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LogLevel | EnumLogLevelFieldRefInput<$PrismaModel>
    in?: $Enums.LogLevel[] | ListEnumLogLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.LogLevel[] | ListEnumLogLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumLogLevelWithAggregatesFilter<$PrismaModel> | $Enums.LogLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLogLevelFilter<$PrismaModel>
    _max?: NestedEnumLogLevelFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumSourcesFilter<$PrismaModel = never> = {
    equals?: $Enums.Sources | EnumSourcesFieldRefInput<$PrismaModel>
    in?: $Enums.Sources[] | ListEnumSourcesFieldRefInput<$PrismaModel>
    notIn?: $Enums.Sources[] | ListEnumSourcesFieldRefInput<$PrismaModel>
    not?: NestedEnumSourcesFilter<$PrismaModel> | $Enums.Sources
  }

  export type NestedEnumSourcesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Sources | EnumSourcesFieldRefInput<$PrismaModel>
    in?: $Enums.Sources[] | ListEnumSourcesFieldRefInput<$PrismaModel>
    notIn?: $Enums.Sources[] | ListEnumSourcesFieldRefInput<$PrismaModel>
    not?: NestedEnumSourcesWithAggregatesFilter<$PrismaModel> | $Enums.Sources
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSourcesFilter<$PrismaModel>
    _max?: NestedEnumSourcesFilter<$PrismaModel>
  }

  export type NestedEnumIncidentsTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.IncidentsType | EnumIncidentsTypeFieldRefInput<$PrismaModel>
    in?: $Enums.IncidentsType[] | ListEnumIncidentsTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.IncidentsType[] | ListEnumIncidentsTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumIncidentsTypeFilter<$PrismaModel> | $Enums.IncidentsType
  }

  export type NestedEnumIncidentsStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.IncidentsStatus | EnumIncidentsStatusFieldRefInput<$PrismaModel>
    in?: $Enums.IncidentsStatus[] | ListEnumIncidentsStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.IncidentsStatus[] | ListEnumIncidentsStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumIncidentsStatusFilter<$PrismaModel> | $Enums.IncidentsStatus
  }

  export type NestedEnumIncidentsTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.IncidentsType | EnumIncidentsTypeFieldRefInput<$PrismaModel>
    in?: $Enums.IncidentsType[] | ListEnumIncidentsTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.IncidentsType[] | ListEnumIncidentsTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumIncidentsTypeWithAggregatesFilter<$PrismaModel> | $Enums.IncidentsType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumIncidentsTypeFilter<$PrismaModel>
    _max?: NestedEnumIncidentsTypeFilter<$PrismaModel>
  }

  export type NestedEnumIncidentsStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.IncidentsStatus | EnumIncidentsStatusFieldRefInput<$PrismaModel>
    in?: $Enums.IncidentsStatus[] | ListEnumIncidentsStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.IncidentsStatus[] | ListEnumIncidentsStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumIncidentsStatusWithAggregatesFilter<$PrismaModel> | $Enums.IncidentsStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumIncidentsStatusFilter<$PrismaModel>
    _max?: NestedEnumIncidentsStatusFilter<$PrismaModel>
  }

  export type NestedEnumProductTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductType | EnumProductTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProductType[] | ListEnumProductTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProductType[] | ListEnumProductTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumProductTypeFilter<$PrismaModel> | $Enums.ProductType
  }

  export type NestedEnumProductTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductType | EnumProductTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProductType[] | ListEnumProductTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProductType[] | ListEnumProductTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumProductTypeWithAggregatesFilter<$PrismaModel> | $Enums.ProductType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProductTypeFilter<$PrismaModel>
    _max?: NestedEnumProductTypeFilter<$PrismaModel>
  }

  export type PremiumSubscriptionsCreateWithoutUserInput = {
    tier: $Enums.Plans
    startDate?: Date | string
    endDate?: Date | string
    source: $Enums.Sources
  }

  export type PremiumSubscriptionsUncheckedCreateWithoutUserInput = {
    tier: $Enums.Plans
    startDate?: Date | string
    endDate?: Date | string
    source: $Enums.Sources
  }

  export type PremiumSubscriptionsCreateOrConnectWithoutUserInput = {
    where: PremiumSubscriptionsWhereUniqueInput
    create: XOR<PremiumSubscriptionsCreateWithoutUserInput, PremiumSubscriptionsUncheckedCreateWithoutUserInput>
  }

  export type LimitsCreateWithoutUserInput = {
    date: Date | string
    aiUsed?: number
    aiLimit?: number
    additionalMessages?: number
    premiumServers?: number
    premiumServerLimmit?: number
  }

  export type LimitsUncheckedCreateWithoutUserInput = {
    date: Date | string
    aiUsed?: number
    aiLimit?: number
    additionalMessages?: number
    premiumServers?: number
    premiumServerLimmit?: number
  }

  export type LimitsCreateOrConnectWithoutUserInput = {
    where: LimitsWhereUniqueInput
    create: XOR<LimitsCreateWithoutUserInput, LimitsUncheckedCreateWithoutUserInput>
  }

  export type ServersCreateWithoutPremiumUserInput = {
    id: string
    name: string
    ownerId: string
    icon?: string | null
    isPremium?: boolean
    aiEnabled?: boolean
    welcomeChannel?: string | null
    announcementChannel?: string | null
    updatesChannel?: string | null
    logsChannel?: string | null
    logLevel?: $Enums.LogLevel
    inviteLink?: string | null
    inviteCode?: string | null
    lastOpened?: Date | string | null
    cleoPersonalityName?: string | null
    cleoPersonalityId?: string | null
    AutomodConfig?: AutomodConfigCreateNestedManyWithoutGuildInput
    ServerSubscriptions?: ServerSubscriptionsCreateNestedManyWithoutServerInput
  }

  export type ServersUncheckedCreateWithoutPremiumUserInput = {
    id: string
    name: string
    ownerId: string
    icon?: string | null
    isPremium?: boolean
    aiEnabled?: boolean
    welcomeChannel?: string | null
    announcementChannel?: string | null
    updatesChannel?: string | null
    logsChannel?: string | null
    logLevel?: $Enums.LogLevel
    inviteLink?: string | null
    inviteCode?: string | null
    lastOpened?: Date | string | null
    cleoPersonalityName?: string | null
    cleoPersonalityId?: string | null
    AutomodConfig?: AutomodConfigUncheckedCreateNestedManyWithoutGuildInput
    ServerSubscriptions?: ServerSubscriptionsUncheckedCreateNestedManyWithoutServerInput
  }

  export type ServersCreateOrConnectWithoutPremiumUserInput = {
    where: ServersWhereUniqueInput
    create: XOR<ServersCreateWithoutPremiumUserInput, ServersUncheckedCreateWithoutPremiumUserInput>
  }

  export type ServersCreateManyPremiumUserInputEnvelope = {
    data: ServersCreateManyPremiumUserInput | ServersCreateManyPremiumUserInput[]
    skipDuplicates?: boolean
  }

  export type PremiumSubscriptionsUpsertWithoutUserInput = {
    update: XOR<PremiumSubscriptionsUpdateWithoutUserInput, PremiumSubscriptionsUncheckedUpdateWithoutUserInput>
    create: XOR<PremiumSubscriptionsCreateWithoutUserInput, PremiumSubscriptionsUncheckedCreateWithoutUserInput>
    where?: PremiumSubscriptionsWhereInput
  }

  export type PremiumSubscriptionsUpdateToOneWithWhereWithoutUserInput = {
    where?: PremiumSubscriptionsWhereInput
    data: XOR<PremiumSubscriptionsUpdateWithoutUserInput, PremiumSubscriptionsUncheckedUpdateWithoutUserInput>
  }

  export type PremiumSubscriptionsUpdateWithoutUserInput = {
    tier?: EnumPlansFieldUpdateOperationsInput | $Enums.Plans
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: EnumSourcesFieldUpdateOperationsInput | $Enums.Sources
  }

  export type PremiumSubscriptionsUncheckedUpdateWithoutUserInput = {
    tier?: EnumPlansFieldUpdateOperationsInput | $Enums.Plans
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: EnumSourcesFieldUpdateOperationsInput | $Enums.Sources
  }

  export type LimitsUpsertWithoutUserInput = {
    update: XOR<LimitsUpdateWithoutUserInput, LimitsUncheckedUpdateWithoutUserInput>
    create: XOR<LimitsCreateWithoutUserInput, LimitsUncheckedCreateWithoutUserInput>
    where?: LimitsWhereInput
  }

  export type LimitsUpdateToOneWithWhereWithoutUserInput = {
    where?: LimitsWhereInput
    data: XOR<LimitsUpdateWithoutUserInput, LimitsUncheckedUpdateWithoutUserInput>
  }

  export type LimitsUpdateWithoutUserInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    aiUsed?: IntFieldUpdateOperationsInput | number
    aiLimit?: IntFieldUpdateOperationsInput | number
    additionalMessages?: IntFieldUpdateOperationsInput | number
    premiumServers?: IntFieldUpdateOperationsInput | number
    premiumServerLimmit?: IntFieldUpdateOperationsInput | number
  }

  export type LimitsUncheckedUpdateWithoutUserInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    aiUsed?: IntFieldUpdateOperationsInput | number
    aiLimit?: IntFieldUpdateOperationsInput | number
    additionalMessages?: IntFieldUpdateOperationsInput | number
    premiumServers?: IntFieldUpdateOperationsInput | number
    premiumServerLimmit?: IntFieldUpdateOperationsInput | number
  }

  export type ServersUpsertWithWhereUniqueWithoutPremiumUserInput = {
    where: ServersWhereUniqueInput
    update: XOR<ServersUpdateWithoutPremiumUserInput, ServersUncheckedUpdateWithoutPremiumUserInput>
    create: XOR<ServersCreateWithoutPremiumUserInput, ServersUncheckedCreateWithoutPremiumUserInput>
  }

  export type ServersUpdateWithWhereUniqueWithoutPremiumUserInput = {
    where: ServersWhereUniqueInput
    data: XOR<ServersUpdateWithoutPremiumUserInput, ServersUncheckedUpdateWithoutPremiumUserInput>
  }

  export type ServersUpdateManyWithWhereWithoutPremiumUserInput = {
    where: ServersScalarWhereInput
    data: XOR<ServersUpdateManyMutationInput, ServersUncheckedUpdateManyWithoutPremiumUserInput>
  }

  export type ServersScalarWhereInput = {
    AND?: ServersScalarWhereInput | ServersScalarWhereInput[]
    OR?: ServersScalarWhereInput[]
    NOT?: ServersScalarWhereInput | ServersScalarWhereInput[]
    id?: StringFilter<"Servers"> | string
    name?: StringFilter<"Servers"> | string
    ownerId?: StringFilter<"Servers"> | string
    icon?: StringNullableFilter<"Servers"> | string | null
    isPremium?: BoolFilter<"Servers"> | boolean
    premiumAddedBy?: StringNullableFilter<"Servers"> | string | null
    aiEnabled?: BoolFilter<"Servers"> | boolean
    welcomeChannel?: StringNullableFilter<"Servers"> | string | null
    announcementChannel?: StringNullableFilter<"Servers"> | string | null
    updatesChannel?: StringNullableFilter<"Servers"> | string | null
    logsChannel?: StringNullableFilter<"Servers"> | string | null
    logLevel?: EnumLogLevelFilter<"Servers"> | $Enums.LogLevel
    inviteLink?: StringNullableFilter<"Servers"> | string | null
    inviteCode?: StringNullableFilter<"Servers"> | string | null
    lastOpened?: DateTimeNullableFilter<"Servers"> | Date | string | null
    cleoPersonalityName?: StringNullableFilter<"Servers"> | string | null
    cleoPersonalityId?: StringNullableFilter<"Servers"> | string | null
  }

  export type UsersCreateWithoutLimitsInput = {
    id?: string
    username: string
    email?: string | null
    extId?: string | null
    discordId?: string | null
    discordUsername?: string | null
    kickId?: string | null
    kickUsername?: string | null
    role?: $Enums.Role
    customerId?: string | null
    timezone?: string | null
    plan?: $Enums.Plans
    premiumSubscriptions?: PremiumSubscriptionsCreateNestedOneWithoutUserInput
    premiumServers?: ServersCreateNestedManyWithoutPremiumUserInput
  }

  export type UsersUncheckedCreateWithoutLimitsInput = {
    id?: string
    username: string
    email?: string | null
    extId?: string | null
    discordId?: string | null
    discordUsername?: string | null
    kickId?: string | null
    kickUsername?: string | null
    role?: $Enums.Role
    customerId?: string | null
    timezone?: string | null
    plan?: $Enums.Plans
    premiumSubscriptions?: PremiumSubscriptionsUncheckedCreateNestedOneWithoutUserInput
    premiumServers?: ServersUncheckedCreateNestedManyWithoutPremiumUserInput
  }

  export type UsersCreateOrConnectWithoutLimitsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutLimitsInput, UsersUncheckedCreateWithoutLimitsInput>
  }

  export type UsersUpsertWithoutLimitsInput = {
    update: XOR<UsersUpdateWithoutLimitsInput, UsersUncheckedUpdateWithoutLimitsInput>
    create: XOR<UsersCreateWithoutLimitsInput, UsersUncheckedCreateWithoutLimitsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutLimitsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutLimitsInput, UsersUncheckedUpdateWithoutLimitsInput>
  }

  export type UsersUpdateWithoutLimitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    extId?: NullableStringFieldUpdateOperationsInput | string | null
    discordId?: NullableStringFieldUpdateOperationsInput | string | null
    discordUsername?: NullableStringFieldUpdateOperationsInput | string | null
    kickId?: NullableStringFieldUpdateOperationsInput | string | null
    kickUsername?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    plan?: EnumPlansFieldUpdateOperationsInput | $Enums.Plans
    premiumSubscriptions?: PremiumSubscriptionsUpdateOneWithoutUserNestedInput
    premiumServers?: ServersUpdateManyWithoutPremiumUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutLimitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    extId?: NullableStringFieldUpdateOperationsInput | string | null
    discordId?: NullableStringFieldUpdateOperationsInput | string | null
    discordUsername?: NullableStringFieldUpdateOperationsInput | string | null
    kickId?: NullableStringFieldUpdateOperationsInput | string | null
    kickUsername?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    plan?: EnumPlansFieldUpdateOperationsInput | $Enums.Plans
    premiumSubscriptions?: PremiumSubscriptionsUncheckedUpdateOneWithoutUserNestedInput
    premiumServers?: ServersUncheckedUpdateManyWithoutPremiumUserNestedInput
  }

  export type UsersCreateWithoutPremiumServersInput = {
    id?: string
    username: string
    email?: string | null
    extId?: string | null
    discordId?: string | null
    discordUsername?: string | null
    kickId?: string | null
    kickUsername?: string | null
    role?: $Enums.Role
    customerId?: string | null
    timezone?: string | null
    plan?: $Enums.Plans
    premiumSubscriptions?: PremiumSubscriptionsCreateNestedOneWithoutUserInput
    limits?: LimitsCreateNestedOneWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutPremiumServersInput = {
    id?: string
    username: string
    email?: string | null
    extId?: string | null
    discordId?: string | null
    discordUsername?: string | null
    kickId?: string | null
    kickUsername?: string | null
    role?: $Enums.Role
    customerId?: string | null
    timezone?: string | null
    plan?: $Enums.Plans
    premiumSubscriptions?: PremiumSubscriptionsUncheckedCreateNestedOneWithoutUserInput
    limits?: LimitsUncheckedCreateNestedOneWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutPremiumServersInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutPremiumServersInput, UsersUncheckedCreateWithoutPremiumServersInput>
  }

  export type AutomodConfigCreateWithoutGuildInput = {
    id?: string
    active?: boolean
    profanity?: boolean
    matureContent?: boolean
    links?: boolean
    ignoredChannels?: AutomodConfigCreateignoredChannelsInput | string[]
    approvedLinks?: AutomodConfigCreateapprovedLinksInput | string[]
  }

  export type AutomodConfigUncheckedCreateWithoutGuildInput = {
    id?: string
    active?: boolean
    profanity?: boolean
    matureContent?: boolean
    links?: boolean
    ignoredChannels?: AutomodConfigCreateignoredChannelsInput | string[]
    approvedLinks?: AutomodConfigCreateapprovedLinksInput | string[]
  }

  export type AutomodConfigCreateOrConnectWithoutGuildInput = {
    where: AutomodConfigWhereUniqueInput
    create: XOR<AutomodConfigCreateWithoutGuildInput, AutomodConfigUncheckedCreateWithoutGuildInput>
  }

  export type AutomodConfigCreateManyGuildInputEnvelope = {
    data: AutomodConfigCreateManyGuildInput | AutomodConfigCreateManyGuildInput[]
    skipDuplicates?: boolean
  }

  export type ServerSubscriptionsCreateWithoutServerInput = {
    startDate?: Date | string
    endDate?: Date | string
    source: $Enums.Sources
    subscriptionId: string
  }

  export type ServerSubscriptionsUncheckedCreateWithoutServerInput = {
    startDate?: Date | string
    endDate?: Date | string
    source: $Enums.Sources
    subscriptionId: string
  }

  export type ServerSubscriptionsCreateOrConnectWithoutServerInput = {
    where: ServerSubscriptionsWhereUniqueInput
    create: XOR<ServerSubscriptionsCreateWithoutServerInput, ServerSubscriptionsUncheckedCreateWithoutServerInput>
  }

  export type ServerSubscriptionsCreateManyServerInputEnvelope = {
    data: ServerSubscriptionsCreateManyServerInput | ServerSubscriptionsCreateManyServerInput[]
    skipDuplicates?: boolean
  }

  export type UsersUpsertWithoutPremiumServersInput = {
    update: XOR<UsersUpdateWithoutPremiumServersInput, UsersUncheckedUpdateWithoutPremiumServersInput>
    create: XOR<UsersCreateWithoutPremiumServersInput, UsersUncheckedCreateWithoutPremiumServersInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutPremiumServersInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutPremiumServersInput, UsersUncheckedUpdateWithoutPremiumServersInput>
  }

  export type UsersUpdateWithoutPremiumServersInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    extId?: NullableStringFieldUpdateOperationsInput | string | null
    discordId?: NullableStringFieldUpdateOperationsInput | string | null
    discordUsername?: NullableStringFieldUpdateOperationsInput | string | null
    kickId?: NullableStringFieldUpdateOperationsInput | string | null
    kickUsername?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    plan?: EnumPlansFieldUpdateOperationsInput | $Enums.Plans
    premiumSubscriptions?: PremiumSubscriptionsUpdateOneWithoutUserNestedInput
    limits?: LimitsUpdateOneWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutPremiumServersInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    extId?: NullableStringFieldUpdateOperationsInput | string | null
    discordId?: NullableStringFieldUpdateOperationsInput | string | null
    discordUsername?: NullableStringFieldUpdateOperationsInput | string | null
    kickId?: NullableStringFieldUpdateOperationsInput | string | null
    kickUsername?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    plan?: EnumPlansFieldUpdateOperationsInput | $Enums.Plans
    premiumSubscriptions?: PremiumSubscriptionsUncheckedUpdateOneWithoutUserNestedInput
    limits?: LimitsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type AutomodConfigUpsertWithWhereUniqueWithoutGuildInput = {
    where: AutomodConfigWhereUniqueInput
    update: XOR<AutomodConfigUpdateWithoutGuildInput, AutomodConfigUncheckedUpdateWithoutGuildInput>
    create: XOR<AutomodConfigCreateWithoutGuildInput, AutomodConfigUncheckedCreateWithoutGuildInput>
  }

  export type AutomodConfigUpdateWithWhereUniqueWithoutGuildInput = {
    where: AutomodConfigWhereUniqueInput
    data: XOR<AutomodConfigUpdateWithoutGuildInput, AutomodConfigUncheckedUpdateWithoutGuildInput>
  }

  export type AutomodConfigUpdateManyWithWhereWithoutGuildInput = {
    where: AutomodConfigScalarWhereInput
    data: XOR<AutomodConfigUpdateManyMutationInput, AutomodConfigUncheckedUpdateManyWithoutGuildInput>
  }

  export type AutomodConfigScalarWhereInput = {
    AND?: AutomodConfigScalarWhereInput | AutomodConfigScalarWhereInput[]
    OR?: AutomodConfigScalarWhereInput[]
    NOT?: AutomodConfigScalarWhereInput | AutomodConfigScalarWhereInput[]
    id?: StringFilter<"AutomodConfig"> | string
    active?: BoolFilter<"AutomodConfig"> | boolean
    profanity?: BoolFilter<"AutomodConfig"> | boolean
    matureContent?: BoolFilter<"AutomodConfig"> | boolean
    links?: BoolFilter<"AutomodConfig"> | boolean
    ignoredChannels?: StringNullableListFilter<"AutomodConfig">
    approvedLinks?: StringNullableListFilter<"AutomodConfig">
    guildId?: StringFilter<"AutomodConfig"> | string
  }

  export type ServerSubscriptionsUpsertWithWhereUniqueWithoutServerInput = {
    where: ServerSubscriptionsWhereUniqueInput
    update: XOR<ServerSubscriptionsUpdateWithoutServerInput, ServerSubscriptionsUncheckedUpdateWithoutServerInput>
    create: XOR<ServerSubscriptionsCreateWithoutServerInput, ServerSubscriptionsUncheckedCreateWithoutServerInput>
  }

  export type ServerSubscriptionsUpdateWithWhereUniqueWithoutServerInput = {
    where: ServerSubscriptionsWhereUniqueInput
    data: XOR<ServerSubscriptionsUpdateWithoutServerInput, ServerSubscriptionsUncheckedUpdateWithoutServerInput>
  }

  export type ServerSubscriptionsUpdateManyWithWhereWithoutServerInput = {
    where: ServerSubscriptionsScalarWhereInput
    data: XOR<ServerSubscriptionsUpdateManyMutationInput, ServerSubscriptionsUncheckedUpdateManyWithoutServerInput>
  }

  export type ServerSubscriptionsScalarWhereInput = {
    AND?: ServerSubscriptionsScalarWhereInput | ServerSubscriptionsScalarWhereInput[]
    OR?: ServerSubscriptionsScalarWhereInput[]
    NOT?: ServerSubscriptionsScalarWhereInput | ServerSubscriptionsScalarWhereInput[]
    id?: StringFilter<"ServerSubscriptions"> | string
    startDate?: DateTimeFilter<"ServerSubscriptions"> | Date | string
    endDate?: DateTimeFilter<"ServerSubscriptions"> | Date | string
    source?: EnumSourcesFilter<"ServerSubscriptions"> | $Enums.Sources
    subscriptionId?: StringFilter<"ServerSubscriptions"> | string
  }

  export type UsersCreateWithoutPremiumSubscriptionsInput = {
    id?: string
    username: string
    email?: string | null
    extId?: string | null
    discordId?: string | null
    discordUsername?: string | null
    kickId?: string | null
    kickUsername?: string | null
    role?: $Enums.Role
    customerId?: string | null
    timezone?: string | null
    plan?: $Enums.Plans
    limits?: LimitsCreateNestedOneWithoutUserInput
    premiumServers?: ServersCreateNestedManyWithoutPremiumUserInput
  }

  export type UsersUncheckedCreateWithoutPremiumSubscriptionsInput = {
    id?: string
    username: string
    email?: string | null
    extId?: string | null
    discordId?: string | null
    discordUsername?: string | null
    kickId?: string | null
    kickUsername?: string | null
    role?: $Enums.Role
    customerId?: string | null
    timezone?: string | null
    plan?: $Enums.Plans
    limits?: LimitsUncheckedCreateNestedOneWithoutUserInput
    premiumServers?: ServersUncheckedCreateNestedManyWithoutPremiumUserInput
  }

  export type UsersCreateOrConnectWithoutPremiumSubscriptionsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutPremiumSubscriptionsInput, UsersUncheckedCreateWithoutPremiumSubscriptionsInput>
  }

  export type UsersUpsertWithoutPremiumSubscriptionsInput = {
    update: XOR<UsersUpdateWithoutPremiumSubscriptionsInput, UsersUncheckedUpdateWithoutPremiumSubscriptionsInput>
    create: XOR<UsersCreateWithoutPremiumSubscriptionsInput, UsersUncheckedCreateWithoutPremiumSubscriptionsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutPremiumSubscriptionsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutPremiumSubscriptionsInput, UsersUncheckedUpdateWithoutPremiumSubscriptionsInput>
  }

  export type UsersUpdateWithoutPremiumSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    extId?: NullableStringFieldUpdateOperationsInput | string | null
    discordId?: NullableStringFieldUpdateOperationsInput | string | null
    discordUsername?: NullableStringFieldUpdateOperationsInput | string | null
    kickId?: NullableStringFieldUpdateOperationsInput | string | null
    kickUsername?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    plan?: EnumPlansFieldUpdateOperationsInput | $Enums.Plans
    limits?: LimitsUpdateOneWithoutUserNestedInput
    premiumServers?: ServersUpdateManyWithoutPremiumUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutPremiumSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    extId?: NullableStringFieldUpdateOperationsInput | string | null
    discordId?: NullableStringFieldUpdateOperationsInput | string | null
    discordUsername?: NullableStringFieldUpdateOperationsInput | string | null
    kickId?: NullableStringFieldUpdateOperationsInput | string | null
    kickUsername?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    plan?: EnumPlansFieldUpdateOperationsInput | $Enums.Plans
    limits?: LimitsUncheckedUpdateOneWithoutUserNestedInput
    premiumServers?: ServersUncheckedUpdateManyWithoutPremiumUserNestedInput
  }

  export type ServersCreateWithoutServerSubscriptionsInput = {
    id: string
    name: string
    ownerId: string
    icon?: string | null
    isPremium?: boolean
    aiEnabled?: boolean
    welcomeChannel?: string | null
    announcementChannel?: string | null
    updatesChannel?: string | null
    logsChannel?: string | null
    logLevel?: $Enums.LogLevel
    inviteLink?: string | null
    inviteCode?: string | null
    lastOpened?: Date | string | null
    cleoPersonalityName?: string | null
    cleoPersonalityId?: string | null
    premiumUser?: UsersCreateNestedOneWithoutPremiumServersInput
    AutomodConfig?: AutomodConfigCreateNestedManyWithoutGuildInput
  }

  export type ServersUncheckedCreateWithoutServerSubscriptionsInput = {
    id: string
    name: string
    ownerId: string
    icon?: string | null
    isPremium?: boolean
    premiumAddedBy?: string | null
    aiEnabled?: boolean
    welcomeChannel?: string | null
    announcementChannel?: string | null
    updatesChannel?: string | null
    logsChannel?: string | null
    logLevel?: $Enums.LogLevel
    inviteLink?: string | null
    inviteCode?: string | null
    lastOpened?: Date | string | null
    cleoPersonalityName?: string | null
    cleoPersonalityId?: string | null
    AutomodConfig?: AutomodConfigUncheckedCreateNestedManyWithoutGuildInput
  }

  export type ServersCreateOrConnectWithoutServerSubscriptionsInput = {
    where: ServersWhereUniqueInput
    create: XOR<ServersCreateWithoutServerSubscriptionsInput, ServersUncheckedCreateWithoutServerSubscriptionsInput>
  }

  export type ServersUpsertWithoutServerSubscriptionsInput = {
    update: XOR<ServersUpdateWithoutServerSubscriptionsInput, ServersUncheckedUpdateWithoutServerSubscriptionsInput>
    create: XOR<ServersCreateWithoutServerSubscriptionsInput, ServersUncheckedCreateWithoutServerSubscriptionsInput>
    where?: ServersWhereInput
  }

  export type ServersUpdateToOneWithWhereWithoutServerSubscriptionsInput = {
    where?: ServersWhereInput
    data: XOR<ServersUpdateWithoutServerSubscriptionsInput, ServersUncheckedUpdateWithoutServerSubscriptionsInput>
  }

  export type ServersUpdateWithoutServerSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    aiEnabled?: BoolFieldUpdateOperationsInput | boolean
    welcomeChannel?: NullableStringFieldUpdateOperationsInput | string | null
    announcementChannel?: NullableStringFieldUpdateOperationsInput | string | null
    updatesChannel?: NullableStringFieldUpdateOperationsInput | string | null
    logsChannel?: NullableStringFieldUpdateOperationsInput | string | null
    logLevel?: EnumLogLevelFieldUpdateOperationsInput | $Enums.LogLevel
    inviteLink?: NullableStringFieldUpdateOperationsInput | string | null
    inviteCode?: NullableStringFieldUpdateOperationsInput | string | null
    lastOpened?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cleoPersonalityName?: NullableStringFieldUpdateOperationsInput | string | null
    cleoPersonalityId?: NullableStringFieldUpdateOperationsInput | string | null
    premiumUser?: UsersUpdateOneWithoutPremiumServersNestedInput
    AutomodConfig?: AutomodConfigUpdateManyWithoutGuildNestedInput
  }

  export type ServersUncheckedUpdateWithoutServerSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    premiumAddedBy?: NullableStringFieldUpdateOperationsInput | string | null
    aiEnabled?: BoolFieldUpdateOperationsInput | boolean
    welcomeChannel?: NullableStringFieldUpdateOperationsInput | string | null
    announcementChannel?: NullableStringFieldUpdateOperationsInput | string | null
    updatesChannel?: NullableStringFieldUpdateOperationsInput | string | null
    logsChannel?: NullableStringFieldUpdateOperationsInput | string | null
    logLevel?: EnumLogLevelFieldUpdateOperationsInput | $Enums.LogLevel
    inviteLink?: NullableStringFieldUpdateOperationsInput | string | null
    inviteCode?: NullableStringFieldUpdateOperationsInput | string | null
    lastOpened?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cleoPersonalityName?: NullableStringFieldUpdateOperationsInput | string | null
    cleoPersonalityId?: NullableStringFieldUpdateOperationsInput | string | null
    AutomodConfig?: AutomodConfigUncheckedUpdateManyWithoutGuildNestedInput
  }

  export type PricesCreateWithoutProductInput = {
    id: string
    amount: number
    default?: boolean
  }

  export type PricesUncheckedCreateWithoutProductInput = {
    id: string
    amount: number
    default?: boolean
  }

  export type PricesCreateOrConnectWithoutProductInput = {
    where: PricesWhereUniqueInput
    create: XOR<PricesCreateWithoutProductInput, PricesUncheckedCreateWithoutProductInput>
  }

  export type PricesCreateManyProductInputEnvelope = {
    data: PricesCreateManyProductInput | PricesCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type PricesUpsertWithWhereUniqueWithoutProductInput = {
    where: PricesWhereUniqueInput
    update: XOR<PricesUpdateWithoutProductInput, PricesUncheckedUpdateWithoutProductInput>
    create: XOR<PricesCreateWithoutProductInput, PricesUncheckedCreateWithoutProductInput>
  }

  export type PricesUpdateWithWhereUniqueWithoutProductInput = {
    where: PricesWhereUniqueInput
    data: XOR<PricesUpdateWithoutProductInput, PricesUncheckedUpdateWithoutProductInput>
  }

  export type PricesUpdateManyWithWhereWithoutProductInput = {
    where: PricesScalarWhereInput
    data: XOR<PricesUpdateManyMutationInput, PricesUncheckedUpdateManyWithoutProductInput>
  }

  export type PricesScalarWhereInput = {
    AND?: PricesScalarWhereInput | PricesScalarWhereInput[]
    OR?: PricesScalarWhereInput[]
    NOT?: PricesScalarWhereInput | PricesScalarWhereInput[]
    id?: StringFilter<"Prices"> | string
    amount?: IntFilter<"Prices"> | number
    default?: BoolFilter<"Prices"> | boolean
    productId?: StringFilter<"Prices"> | string
  }

  export type ProductsCreateWithoutPricesInput = {
    id: string
    name: string
    type: $Enums.ProductType
  }

  export type ProductsUncheckedCreateWithoutPricesInput = {
    id: string
    name: string
    type: $Enums.ProductType
  }

  export type ProductsCreateOrConnectWithoutPricesInput = {
    where: ProductsWhereUniqueInput
    create: XOR<ProductsCreateWithoutPricesInput, ProductsUncheckedCreateWithoutPricesInput>
  }

  export type ProductsUpsertWithoutPricesInput = {
    update: XOR<ProductsUpdateWithoutPricesInput, ProductsUncheckedUpdateWithoutPricesInput>
    create: XOR<ProductsCreateWithoutPricesInput, ProductsUncheckedCreateWithoutPricesInput>
    where?: ProductsWhereInput
  }

  export type ProductsUpdateToOneWithWhereWithoutPricesInput = {
    where?: ProductsWhereInput
    data: XOR<ProductsUpdateWithoutPricesInput, ProductsUncheckedUpdateWithoutPricesInput>
  }

  export type ProductsUpdateWithoutPricesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumProductTypeFieldUpdateOperationsInput | $Enums.ProductType
  }

  export type ProductsUncheckedUpdateWithoutPricesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumProductTypeFieldUpdateOperationsInput | $Enums.ProductType
  }

  export type ServersCreateWithoutAutomodConfigInput = {
    id: string
    name: string
    ownerId: string
    icon?: string | null
    isPremium?: boolean
    aiEnabled?: boolean
    welcomeChannel?: string | null
    announcementChannel?: string | null
    updatesChannel?: string | null
    logsChannel?: string | null
    logLevel?: $Enums.LogLevel
    inviteLink?: string | null
    inviteCode?: string | null
    lastOpened?: Date | string | null
    cleoPersonalityName?: string | null
    cleoPersonalityId?: string | null
    premiumUser?: UsersCreateNestedOneWithoutPremiumServersInput
    ServerSubscriptions?: ServerSubscriptionsCreateNestedManyWithoutServerInput
  }

  export type ServersUncheckedCreateWithoutAutomodConfigInput = {
    id: string
    name: string
    ownerId: string
    icon?: string | null
    isPremium?: boolean
    premiumAddedBy?: string | null
    aiEnabled?: boolean
    welcomeChannel?: string | null
    announcementChannel?: string | null
    updatesChannel?: string | null
    logsChannel?: string | null
    logLevel?: $Enums.LogLevel
    inviteLink?: string | null
    inviteCode?: string | null
    lastOpened?: Date | string | null
    cleoPersonalityName?: string | null
    cleoPersonalityId?: string | null
    ServerSubscriptions?: ServerSubscriptionsUncheckedCreateNestedManyWithoutServerInput
  }

  export type ServersCreateOrConnectWithoutAutomodConfigInput = {
    where: ServersWhereUniqueInput
    create: XOR<ServersCreateWithoutAutomodConfigInput, ServersUncheckedCreateWithoutAutomodConfigInput>
  }

  export type ServersUpsertWithoutAutomodConfigInput = {
    update: XOR<ServersUpdateWithoutAutomodConfigInput, ServersUncheckedUpdateWithoutAutomodConfigInput>
    create: XOR<ServersCreateWithoutAutomodConfigInput, ServersUncheckedCreateWithoutAutomodConfigInput>
    where?: ServersWhereInput
  }

  export type ServersUpdateToOneWithWhereWithoutAutomodConfigInput = {
    where?: ServersWhereInput
    data: XOR<ServersUpdateWithoutAutomodConfigInput, ServersUncheckedUpdateWithoutAutomodConfigInput>
  }

  export type ServersUpdateWithoutAutomodConfigInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    aiEnabled?: BoolFieldUpdateOperationsInput | boolean
    welcomeChannel?: NullableStringFieldUpdateOperationsInput | string | null
    announcementChannel?: NullableStringFieldUpdateOperationsInput | string | null
    updatesChannel?: NullableStringFieldUpdateOperationsInput | string | null
    logsChannel?: NullableStringFieldUpdateOperationsInput | string | null
    logLevel?: EnumLogLevelFieldUpdateOperationsInput | $Enums.LogLevel
    inviteLink?: NullableStringFieldUpdateOperationsInput | string | null
    inviteCode?: NullableStringFieldUpdateOperationsInput | string | null
    lastOpened?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cleoPersonalityName?: NullableStringFieldUpdateOperationsInput | string | null
    cleoPersonalityId?: NullableStringFieldUpdateOperationsInput | string | null
    premiumUser?: UsersUpdateOneWithoutPremiumServersNestedInput
    ServerSubscriptions?: ServerSubscriptionsUpdateManyWithoutServerNestedInput
  }

  export type ServersUncheckedUpdateWithoutAutomodConfigInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    premiumAddedBy?: NullableStringFieldUpdateOperationsInput | string | null
    aiEnabled?: BoolFieldUpdateOperationsInput | boolean
    welcomeChannel?: NullableStringFieldUpdateOperationsInput | string | null
    announcementChannel?: NullableStringFieldUpdateOperationsInput | string | null
    updatesChannel?: NullableStringFieldUpdateOperationsInput | string | null
    logsChannel?: NullableStringFieldUpdateOperationsInput | string | null
    logLevel?: EnumLogLevelFieldUpdateOperationsInput | $Enums.LogLevel
    inviteLink?: NullableStringFieldUpdateOperationsInput | string | null
    inviteCode?: NullableStringFieldUpdateOperationsInput | string | null
    lastOpened?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cleoPersonalityName?: NullableStringFieldUpdateOperationsInput | string | null
    cleoPersonalityId?: NullableStringFieldUpdateOperationsInput | string | null
    ServerSubscriptions?: ServerSubscriptionsUncheckedUpdateManyWithoutServerNestedInput
  }

  export type SessionCreateWithoutUserInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountCreateWithoutUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    token?: StringFilter<"Session"> | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
  }

  export type UserCreateWithoutSessionsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginMethod?: string | null
    username?: string | null
    locale?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginMethod?: string | null
    username?: string | null
    locale?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginMethod?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    locale?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginMethod?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    locale?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutAccountsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginMethod?: string | null
    username?: string | null
    locale?: string | null
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginMethod?: string | null
    username?: string | null
    locale?: string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginMethod?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    locale?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginMethod?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    locale?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ServersCreateManyPremiumUserInput = {
    id: string
    name: string
    ownerId: string
    icon?: string | null
    isPremium?: boolean
    aiEnabled?: boolean
    welcomeChannel?: string | null
    announcementChannel?: string | null
    updatesChannel?: string | null
    logsChannel?: string | null
    logLevel?: $Enums.LogLevel
    inviteLink?: string | null
    inviteCode?: string | null
    lastOpened?: Date | string | null
    cleoPersonalityName?: string | null
    cleoPersonalityId?: string | null
  }

  export type ServersUpdateWithoutPremiumUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    aiEnabled?: BoolFieldUpdateOperationsInput | boolean
    welcomeChannel?: NullableStringFieldUpdateOperationsInput | string | null
    announcementChannel?: NullableStringFieldUpdateOperationsInput | string | null
    updatesChannel?: NullableStringFieldUpdateOperationsInput | string | null
    logsChannel?: NullableStringFieldUpdateOperationsInput | string | null
    logLevel?: EnumLogLevelFieldUpdateOperationsInput | $Enums.LogLevel
    inviteLink?: NullableStringFieldUpdateOperationsInput | string | null
    inviteCode?: NullableStringFieldUpdateOperationsInput | string | null
    lastOpened?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cleoPersonalityName?: NullableStringFieldUpdateOperationsInput | string | null
    cleoPersonalityId?: NullableStringFieldUpdateOperationsInput | string | null
    AutomodConfig?: AutomodConfigUpdateManyWithoutGuildNestedInput
    ServerSubscriptions?: ServerSubscriptionsUpdateManyWithoutServerNestedInput
  }

  export type ServersUncheckedUpdateWithoutPremiumUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    aiEnabled?: BoolFieldUpdateOperationsInput | boolean
    welcomeChannel?: NullableStringFieldUpdateOperationsInput | string | null
    announcementChannel?: NullableStringFieldUpdateOperationsInput | string | null
    updatesChannel?: NullableStringFieldUpdateOperationsInput | string | null
    logsChannel?: NullableStringFieldUpdateOperationsInput | string | null
    logLevel?: EnumLogLevelFieldUpdateOperationsInput | $Enums.LogLevel
    inviteLink?: NullableStringFieldUpdateOperationsInput | string | null
    inviteCode?: NullableStringFieldUpdateOperationsInput | string | null
    lastOpened?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cleoPersonalityName?: NullableStringFieldUpdateOperationsInput | string | null
    cleoPersonalityId?: NullableStringFieldUpdateOperationsInput | string | null
    AutomodConfig?: AutomodConfigUncheckedUpdateManyWithoutGuildNestedInput
    ServerSubscriptions?: ServerSubscriptionsUncheckedUpdateManyWithoutServerNestedInput
  }

  export type ServersUncheckedUpdateManyWithoutPremiumUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    aiEnabled?: BoolFieldUpdateOperationsInput | boolean
    welcomeChannel?: NullableStringFieldUpdateOperationsInput | string | null
    announcementChannel?: NullableStringFieldUpdateOperationsInput | string | null
    updatesChannel?: NullableStringFieldUpdateOperationsInput | string | null
    logsChannel?: NullableStringFieldUpdateOperationsInput | string | null
    logLevel?: EnumLogLevelFieldUpdateOperationsInput | $Enums.LogLevel
    inviteLink?: NullableStringFieldUpdateOperationsInput | string | null
    inviteCode?: NullableStringFieldUpdateOperationsInput | string | null
    lastOpened?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cleoPersonalityName?: NullableStringFieldUpdateOperationsInput | string | null
    cleoPersonalityId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AutomodConfigCreateManyGuildInput = {
    id?: string
    active?: boolean
    profanity?: boolean
    matureContent?: boolean
    links?: boolean
    ignoredChannels?: AutomodConfigCreateignoredChannelsInput | string[]
    approvedLinks?: AutomodConfigCreateapprovedLinksInput | string[]
  }

  export type ServerSubscriptionsCreateManyServerInput = {
    startDate?: Date | string
    endDate?: Date | string
    source: $Enums.Sources
    subscriptionId: string
  }

  export type AutomodConfigUpdateWithoutGuildInput = {
    id?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    profanity?: BoolFieldUpdateOperationsInput | boolean
    matureContent?: BoolFieldUpdateOperationsInput | boolean
    links?: BoolFieldUpdateOperationsInput | boolean
    ignoredChannels?: AutomodConfigUpdateignoredChannelsInput | string[]
    approvedLinks?: AutomodConfigUpdateapprovedLinksInput | string[]
  }

  export type AutomodConfigUncheckedUpdateWithoutGuildInput = {
    id?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    profanity?: BoolFieldUpdateOperationsInput | boolean
    matureContent?: BoolFieldUpdateOperationsInput | boolean
    links?: BoolFieldUpdateOperationsInput | boolean
    ignoredChannels?: AutomodConfigUpdateignoredChannelsInput | string[]
    approvedLinks?: AutomodConfigUpdateapprovedLinksInput | string[]
  }

  export type AutomodConfigUncheckedUpdateManyWithoutGuildInput = {
    id?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    profanity?: BoolFieldUpdateOperationsInput | boolean
    matureContent?: BoolFieldUpdateOperationsInput | boolean
    links?: BoolFieldUpdateOperationsInput | boolean
    ignoredChannels?: AutomodConfigUpdateignoredChannelsInput | string[]
    approvedLinks?: AutomodConfigUpdateapprovedLinksInput | string[]
  }

  export type ServerSubscriptionsUpdateWithoutServerInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: EnumSourcesFieldUpdateOperationsInput | $Enums.Sources
    subscriptionId?: StringFieldUpdateOperationsInput | string
  }

  export type ServerSubscriptionsUncheckedUpdateWithoutServerInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: EnumSourcesFieldUpdateOperationsInput | $Enums.Sources
    subscriptionId?: StringFieldUpdateOperationsInput | string
  }

  export type ServerSubscriptionsUncheckedUpdateManyWithoutServerInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: EnumSourcesFieldUpdateOperationsInput | $Enums.Sources
    subscriptionId?: StringFieldUpdateOperationsInput | string
  }

  export type PricesCreateManyProductInput = {
    id: string
    amount: number
    default?: boolean
  }

  export type PricesUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    default?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PricesUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    default?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PricesUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    default?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SessionCreateManyUserInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type AccountCreateManyUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}