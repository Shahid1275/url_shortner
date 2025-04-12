
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
 * Model api_key
 * 
 */
export type api_key = $Result.DefaultSelection<Prisma.$api_keyPayload>
/**
 * Model audit_log
 * 
 */
export type audit_log = $Result.DefaultSelection<Prisma.$audit_logPayload>
/**
 * Model logo
 * 
 */
export type logo = $Result.DefaultSelection<Prisma.$logoPayload>
/**
 * Model url
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type url = $Result.DefaultSelection<Prisma.$urlPayload>
/**
 * Model url_click
 * 
 */
export type url_click = $Result.DefaultSelection<Prisma.$url_clickPayload>
/**
 * Model url_tag
 * 
 */
export type url_tag = $Result.DefaultSelection<Prisma.$url_tagPayload>
/**
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>
/**
 * Model user_role
 * 
 */
export type user_role = $Result.DefaultSelection<Prisma.$user_rolePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Api_keys
 * const api_keys = await prisma.api_key.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Api_keys
   * const api_keys = await prisma.api_key.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.api_key`: Exposes CRUD operations for the **api_key** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Api_keys
    * const api_keys = await prisma.api_key.findMany()
    * ```
    */
  get api_key(): Prisma.api_keyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.audit_log`: Exposes CRUD operations for the **audit_log** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Audit_logs
    * const audit_logs = await prisma.audit_log.findMany()
    * ```
    */
  get audit_log(): Prisma.audit_logDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.logo`: Exposes CRUD operations for the **logo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Logos
    * const logos = await prisma.logo.findMany()
    * ```
    */
  get logo(): Prisma.logoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.url`: Exposes CRUD operations for the **url** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Urls
    * const urls = await prisma.url.findMany()
    * ```
    */
  get url(): Prisma.urlDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.url_click`: Exposes CRUD operations for the **url_click** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Url_clicks
    * const url_clicks = await prisma.url_click.findMany()
    * ```
    */
  get url_click(): Prisma.url_clickDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.url_tag`: Exposes CRUD operations for the **url_tag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Url_tags
    * const url_tags = await prisma.url_tag.findMany()
    * ```
    */
  get url_tag(): Prisma.url_tagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user_role`: Exposes CRUD operations for the **user_role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_roles
    * const user_roles = await prisma.user_role.findMany()
    * ```
    */
  get user_role(): Prisma.user_roleDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    api_key: 'api_key',
    audit_log: 'audit_log',
    logo: 'logo',
    url: 'url',
    url_click: 'url_click',
    url_tag: 'url_tag',
    user: 'user',
    user_role: 'user_role'
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
      modelProps: "api_key" | "audit_log" | "logo" | "url" | "url_click" | "url_tag" | "user" | "user_role"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      api_key: {
        payload: Prisma.$api_keyPayload<ExtArgs>
        fields: Prisma.api_keyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.api_keyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$api_keyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.api_keyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$api_keyPayload>
          }
          findFirst: {
            args: Prisma.api_keyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$api_keyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.api_keyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$api_keyPayload>
          }
          findMany: {
            args: Prisma.api_keyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$api_keyPayload>[]
          }
          create: {
            args: Prisma.api_keyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$api_keyPayload>
          }
          createMany: {
            args: Prisma.api_keyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.api_keyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$api_keyPayload>[]
          }
          delete: {
            args: Prisma.api_keyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$api_keyPayload>
          }
          update: {
            args: Prisma.api_keyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$api_keyPayload>
          }
          deleteMany: {
            args: Prisma.api_keyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.api_keyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.api_keyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$api_keyPayload>[]
          }
          upsert: {
            args: Prisma.api_keyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$api_keyPayload>
          }
          aggregate: {
            args: Prisma.Api_keyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApi_key>
          }
          groupBy: {
            args: Prisma.api_keyGroupByArgs<ExtArgs>
            result: $Utils.Optional<Api_keyGroupByOutputType>[]
          }
          count: {
            args: Prisma.api_keyCountArgs<ExtArgs>
            result: $Utils.Optional<Api_keyCountAggregateOutputType> | number
          }
        }
      }
      audit_log: {
        payload: Prisma.$audit_logPayload<ExtArgs>
        fields: Prisma.audit_logFieldRefs
        operations: {
          findUnique: {
            args: Prisma.audit_logFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$audit_logPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.audit_logFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$audit_logPayload>
          }
          findFirst: {
            args: Prisma.audit_logFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$audit_logPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.audit_logFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$audit_logPayload>
          }
          findMany: {
            args: Prisma.audit_logFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$audit_logPayload>[]
          }
          create: {
            args: Prisma.audit_logCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$audit_logPayload>
          }
          createMany: {
            args: Prisma.audit_logCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.audit_logCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$audit_logPayload>[]
          }
          delete: {
            args: Prisma.audit_logDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$audit_logPayload>
          }
          update: {
            args: Prisma.audit_logUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$audit_logPayload>
          }
          deleteMany: {
            args: Prisma.audit_logDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.audit_logUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.audit_logUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$audit_logPayload>[]
          }
          upsert: {
            args: Prisma.audit_logUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$audit_logPayload>
          }
          aggregate: {
            args: Prisma.Audit_logAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAudit_log>
          }
          groupBy: {
            args: Prisma.audit_logGroupByArgs<ExtArgs>
            result: $Utils.Optional<Audit_logGroupByOutputType>[]
          }
          count: {
            args: Prisma.audit_logCountArgs<ExtArgs>
            result: $Utils.Optional<Audit_logCountAggregateOutputType> | number
          }
        }
      }
      logo: {
        payload: Prisma.$logoPayload<ExtArgs>
        fields: Prisma.logoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.logoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.logoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logoPayload>
          }
          findFirst: {
            args: Prisma.logoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.logoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logoPayload>
          }
          findMany: {
            args: Prisma.logoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logoPayload>[]
          }
          create: {
            args: Prisma.logoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logoPayload>
          }
          createMany: {
            args: Prisma.logoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.logoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logoPayload>[]
          }
          delete: {
            args: Prisma.logoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logoPayload>
          }
          update: {
            args: Prisma.logoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logoPayload>
          }
          deleteMany: {
            args: Prisma.logoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.logoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.logoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logoPayload>[]
          }
          upsert: {
            args: Prisma.logoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logoPayload>
          }
          aggregate: {
            args: Prisma.LogoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLogo>
          }
          groupBy: {
            args: Prisma.logoGroupByArgs<ExtArgs>
            result: $Utils.Optional<LogoGroupByOutputType>[]
          }
          count: {
            args: Prisma.logoCountArgs<ExtArgs>
            result: $Utils.Optional<LogoCountAggregateOutputType> | number
          }
        }
      }
      url: {
        payload: Prisma.$urlPayload<ExtArgs>
        fields: Prisma.urlFieldRefs
        operations: {
          findUnique: {
            args: Prisma.urlFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$urlPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.urlFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$urlPayload>
          }
          findFirst: {
            args: Prisma.urlFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$urlPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.urlFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$urlPayload>
          }
          findMany: {
            args: Prisma.urlFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$urlPayload>[]
          }
          create: {
            args: Prisma.urlCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$urlPayload>
          }
          createMany: {
            args: Prisma.urlCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.urlCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$urlPayload>[]
          }
          delete: {
            args: Prisma.urlDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$urlPayload>
          }
          update: {
            args: Prisma.urlUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$urlPayload>
          }
          deleteMany: {
            args: Prisma.urlDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.urlUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.urlUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$urlPayload>[]
          }
          upsert: {
            args: Prisma.urlUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$urlPayload>
          }
          aggregate: {
            args: Prisma.UrlAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUrl>
          }
          groupBy: {
            args: Prisma.urlGroupByArgs<ExtArgs>
            result: $Utils.Optional<UrlGroupByOutputType>[]
          }
          count: {
            args: Prisma.urlCountArgs<ExtArgs>
            result: $Utils.Optional<UrlCountAggregateOutputType> | number
          }
        }
      }
      url_click: {
        payload: Prisma.$url_clickPayload<ExtArgs>
        fields: Prisma.url_clickFieldRefs
        operations: {
          findUnique: {
            args: Prisma.url_clickFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$url_clickPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.url_clickFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$url_clickPayload>
          }
          findFirst: {
            args: Prisma.url_clickFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$url_clickPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.url_clickFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$url_clickPayload>
          }
          findMany: {
            args: Prisma.url_clickFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$url_clickPayload>[]
          }
          create: {
            args: Prisma.url_clickCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$url_clickPayload>
          }
          createMany: {
            args: Prisma.url_clickCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.url_clickCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$url_clickPayload>[]
          }
          delete: {
            args: Prisma.url_clickDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$url_clickPayload>
          }
          update: {
            args: Prisma.url_clickUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$url_clickPayload>
          }
          deleteMany: {
            args: Prisma.url_clickDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.url_clickUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.url_clickUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$url_clickPayload>[]
          }
          upsert: {
            args: Prisma.url_clickUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$url_clickPayload>
          }
          aggregate: {
            args: Prisma.Url_clickAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUrl_click>
          }
          groupBy: {
            args: Prisma.url_clickGroupByArgs<ExtArgs>
            result: $Utils.Optional<Url_clickGroupByOutputType>[]
          }
          count: {
            args: Prisma.url_clickCountArgs<ExtArgs>
            result: $Utils.Optional<Url_clickCountAggregateOutputType> | number
          }
        }
      }
      url_tag: {
        payload: Prisma.$url_tagPayload<ExtArgs>
        fields: Prisma.url_tagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.url_tagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$url_tagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.url_tagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$url_tagPayload>
          }
          findFirst: {
            args: Prisma.url_tagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$url_tagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.url_tagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$url_tagPayload>
          }
          findMany: {
            args: Prisma.url_tagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$url_tagPayload>[]
          }
          create: {
            args: Prisma.url_tagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$url_tagPayload>
          }
          createMany: {
            args: Prisma.url_tagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.url_tagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$url_tagPayload>[]
          }
          delete: {
            args: Prisma.url_tagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$url_tagPayload>
          }
          update: {
            args: Prisma.url_tagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$url_tagPayload>
          }
          deleteMany: {
            args: Prisma.url_tagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.url_tagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.url_tagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$url_tagPayload>[]
          }
          upsert: {
            args: Prisma.url_tagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$url_tagPayload>
          }
          aggregate: {
            args: Prisma.Url_tagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUrl_tag>
          }
          groupBy: {
            args: Prisma.url_tagGroupByArgs<ExtArgs>
            result: $Utils.Optional<Url_tagGroupByOutputType>[]
          }
          count: {
            args: Prisma.url_tagCountArgs<ExtArgs>
            result: $Utils.Optional<Url_tagCountAggregateOutputType> | number
          }
        }
      }
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.userCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.userUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      user_role: {
        payload: Prisma.$user_rolePayload<ExtArgs>
        fields: Prisma.user_roleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_roleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_rolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_roleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_rolePayload>
          }
          findFirst: {
            args: Prisma.user_roleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_rolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_roleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_rolePayload>
          }
          findMany: {
            args: Prisma.user_roleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_rolePayload>[]
          }
          create: {
            args: Prisma.user_roleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_rolePayload>
          }
          createMany: {
            args: Prisma.user_roleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.user_roleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_rolePayload>[]
          }
          delete: {
            args: Prisma.user_roleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_rolePayload>
          }
          update: {
            args: Prisma.user_roleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_rolePayload>
          }
          deleteMany: {
            args: Prisma.user_roleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.user_roleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.user_roleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_rolePayload>[]
          }
          upsert: {
            args: Prisma.user_roleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_rolePayload>
          }
          aggregate: {
            args: Prisma.User_roleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_role>
          }
          groupBy: {
            args: Prisma.user_roleGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_roleGroupByOutputType>[]
          }
          count: {
            args: Prisma.user_roleCountArgs<ExtArgs>
            result: $Utils.Optional<User_roleCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    api_key?: api_keyOmit
    audit_log?: audit_logOmit
    logo?: logoOmit
    url?: urlOmit
    url_click?: url_clickOmit
    url_tag?: url_tagOmit
    user?: userOmit
    user_role?: user_roleOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type LogoCountOutputType
   */

  export type LogoCountOutputType = {
    url: number
  }

  export type LogoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    url?: boolean | LogoCountOutputTypeCountUrlArgs
  }

  // Custom InputTypes
  /**
   * LogoCountOutputType without action
   */
  export type LogoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogoCountOutputType
     */
    select?: LogoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LogoCountOutputType without action
   */
  export type LogoCountOutputTypeCountUrlArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: urlWhereInput
  }


  /**
   * Count Type UrlCountOutputType
   */

  export type UrlCountOutputType = {
    audit_log: number
    url_click: number
  }

  export type UrlCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    audit_log?: boolean | UrlCountOutputTypeCountAudit_logArgs
    url_click?: boolean | UrlCountOutputTypeCountUrl_clickArgs
  }

  // Custom InputTypes
  /**
   * UrlCountOutputType without action
   */
  export type UrlCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UrlCountOutputType
     */
    select?: UrlCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UrlCountOutputType without action
   */
  export type UrlCountOutputTypeCountAudit_logArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: audit_logWhereInput
  }

  /**
   * UrlCountOutputType without action
   */
  export type UrlCountOutputTypeCountUrl_clickArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: url_clickWhereInput
  }


  /**
   * Count Type Url_tagCountOutputType
   */

  export type Url_tagCountOutputType = {
    url: number
  }

  export type Url_tagCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    url?: boolean | Url_tagCountOutputTypeCountUrlArgs
  }

  // Custom InputTypes
  /**
   * Url_tagCountOutputType without action
   */
  export type Url_tagCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Url_tagCountOutputType
     */
    select?: Url_tagCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Url_tagCountOutputType without action
   */
  export type Url_tagCountOutputTypeCountUrlArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: urlWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    api_key: number
    audit_log: number
    logo: number
    url: number
    url_tag: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    api_key?: boolean | UserCountOutputTypeCountApi_keyArgs
    audit_log?: boolean | UserCountOutputTypeCountAudit_logArgs
    logo?: boolean | UserCountOutputTypeCountLogoArgs
    url?: boolean | UserCountOutputTypeCountUrlArgs
    url_tag?: boolean | UserCountOutputTypeCountUrl_tagArgs
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
  export type UserCountOutputTypeCountApi_keyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: api_keyWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAudit_logArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: audit_logWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLogoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: logoWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUrlArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: urlWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUrl_tagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: url_tagWhereInput
  }


  /**
   * Count Type User_roleCountOutputType
   */

  export type User_roleCountOutputType = {
    user: number
  }

  export type User_roleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | User_roleCountOutputTypeCountUserArgs
  }

  // Custom InputTypes
  /**
   * User_roleCountOutputType without action
   */
  export type User_roleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_roleCountOutputType
     */
    select?: User_roleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * User_roleCountOutputType without action
   */
  export type User_roleCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
  }


  /**
   * Models
   */

  /**
   * Model api_key
   */

  export type AggregateApi_key = {
    _count: Api_keyCountAggregateOutputType | null
    _avg: Api_keyAvgAggregateOutputType | null
    _sum: Api_keySumAggregateOutputType | null
    _min: Api_keyMinAggregateOutputType | null
    _max: Api_keyMaxAggregateOutputType | null
  }

  export type Api_keyAvgAggregateOutputType = {
    api_key_id: number | null
  }

  export type Api_keySumAggregateOutputType = {
    api_key_id: number | null
  }

  export type Api_keyMinAggregateOutputType = {
    api_key_id: number | null
    user_id: string | null
    api_key: string | null
    created_at: Date | null
    expires_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    is_deleted: boolean | null
  }

  export type Api_keyMaxAggregateOutputType = {
    api_key_id: number | null
    user_id: string | null
    api_key: string | null
    created_at: Date | null
    expires_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    is_deleted: boolean | null
  }

  export type Api_keyCountAggregateOutputType = {
    api_key_id: number
    user_id: number
    api_key: number
    created_at: number
    expires_at: number
    updated_at: number
    deleted_at: number
    is_deleted: number
    _all: number
  }


  export type Api_keyAvgAggregateInputType = {
    api_key_id?: true
  }

  export type Api_keySumAggregateInputType = {
    api_key_id?: true
  }

  export type Api_keyMinAggregateInputType = {
    api_key_id?: true
    user_id?: true
    api_key?: true
    created_at?: true
    expires_at?: true
    updated_at?: true
    deleted_at?: true
    is_deleted?: true
  }

  export type Api_keyMaxAggregateInputType = {
    api_key_id?: true
    user_id?: true
    api_key?: true
    created_at?: true
    expires_at?: true
    updated_at?: true
    deleted_at?: true
    is_deleted?: true
  }

  export type Api_keyCountAggregateInputType = {
    api_key_id?: true
    user_id?: true
    api_key?: true
    created_at?: true
    expires_at?: true
    updated_at?: true
    deleted_at?: true
    is_deleted?: true
    _all?: true
  }

  export type Api_keyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which api_key to aggregate.
     */
    where?: api_keyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of api_keys to fetch.
     */
    orderBy?: api_keyOrderByWithRelationInput | api_keyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: api_keyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` api_keys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` api_keys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned api_keys
    **/
    _count?: true | Api_keyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Api_keyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Api_keySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Api_keyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Api_keyMaxAggregateInputType
  }

  export type GetApi_keyAggregateType<T extends Api_keyAggregateArgs> = {
        [P in keyof T & keyof AggregateApi_key]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApi_key[P]>
      : GetScalarType<T[P], AggregateApi_key[P]>
  }




  export type api_keyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: api_keyWhereInput
    orderBy?: api_keyOrderByWithAggregationInput | api_keyOrderByWithAggregationInput[]
    by: Api_keyScalarFieldEnum[] | Api_keyScalarFieldEnum
    having?: api_keyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Api_keyCountAggregateInputType | true
    _avg?: Api_keyAvgAggregateInputType
    _sum?: Api_keySumAggregateInputType
    _min?: Api_keyMinAggregateInputType
    _max?: Api_keyMaxAggregateInputType
  }

  export type Api_keyGroupByOutputType = {
    api_key_id: number
    user_id: string
    api_key: string
    created_at: Date
    expires_at: Date | null
    updated_at: Date
    deleted_at: Date | null
    is_deleted: boolean
    _count: Api_keyCountAggregateOutputType | null
    _avg: Api_keyAvgAggregateOutputType | null
    _sum: Api_keySumAggregateOutputType | null
    _min: Api_keyMinAggregateOutputType | null
    _max: Api_keyMaxAggregateOutputType | null
  }

  type GetApi_keyGroupByPayload<T extends api_keyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Api_keyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Api_keyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Api_keyGroupByOutputType[P]>
            : GetScalarType<T[P], Api_keyGroupByOutputType[P]>
        }
      >
    >


  export type api_keySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    api_key_id?: boolean
    user_id?: boolean
    api_key?: boolean
    created_at?: boolean
    expires_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    is_deleted?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["api_key"]>

  export type api_keySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    api_key_id?: boolean
    user_id?: boolean
    api_key?: boolean
    created_at?: boolean
    expires_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    is_deleted?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["api_key"]>

  export type api_keySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    api_key_id?: boolean
    user_id?: boolean
    api_key?: boolean
    created_at?: boolean
    expires_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    is_deleted?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["api_key"]>

  export type api_keySelectScalar = {
    api_key_id?: boolean
    user_id?: boolean
    api_key?: boolean
    created_at?: boolean
    expires_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    is_deleted?: boolean
  }

  export type api_keyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"api_key_id" | "user_id" | "api_key" | "created_at" | "expires_at" | "updated_at" | "deleted_at" | "is_deleted", ExtArgs["result"]["api_key"]>
  export type api_keyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type api_keyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type api_keyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $api_keyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "api_key"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      api_key_id: number
      user_id: string
      api_key: string
      created_at: Date
      expires_at: Date | null
      updated_at: Date
      deleted_at: Date | null
      is_deleted: boolean
    }, ExtArgs["result"]["api_key"]>
    composites: {}
  }

  type api_keyGetPayload<S extends boolean | null | undefined | api_keyDefaultArgs> = $Result.GetResult<Prisma.$api_keyPayload, S>

  type api_keyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<api_keyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Api_keyCountAggregateInputType | true
    }

  export interface api_keyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['api_key'], meta: { name: 'api_key' } }
    /**
     * Find zero or one Api_key that matches the filter.
     * @param {api_keyFindUniqueArgs} args - Arguments to find a Api_key
     * @example
     * // Get one Api_key
     * const api_key = await prisma.api_key.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends api_keyFindUniqueArgs>(args: SelectSubset<T, api_keyFindUniqueArgs<ExtArgs>>): Prisma__api_keyClient<$Result.GetResult<Prisma.$api_keyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Api_key that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {api_keyFindUniqueOrThrowArgs} args - Arguments to find a Api_key
     * @example
     * // Get one Api_key
     * const api_key = await prisma.api_key.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends api_keyFindUniqueOrThrowArgs>(args: SelectSubset<T, api_keyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__api_keyClient<$Result.GetResult<Prisma.$api_keyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Api_key that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {api_keyFindFirstArgs} args - Arguments to find a Api_key
     * @example
     * // Get one Api_key
     * const api_key = await prisma.api_key.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends api_keyFindFirstArgs>(args?: SelectSubset<T, api_keyFindFirstArgs<ExtArgs>>): Prisma__api_keyClient<$Result.GetResult<Prisma.$api_keyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Api_key that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {api_keyFindFirstOrThrowArgs} args - Arguments to find a Api_key
     * @example
     * // Get one Api_key
     * const api_key = await prisma.api_key.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends api_keyFindFirstOrThrowArgs>(args?: SelectSubset<T, api_keyFindFirstOrThrowArgs<ExtArgs>>): Prisma__api_keyClient<$Result.GetResult<Prisma.$api_keyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Api_keys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {api_keyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Api_keys
     * const api_keys = await prisma.api_key.findMany()
     * 
     * // Get first 10 Api_keys
     * const api_keys = await prisma.api_key.findMany({ take: 10 })
     * 
     * // Only select the `api_key_id`
     * const api_keyWithApi_key_idOnly = await prisma.api_key.findMany({ select: { api_key_id: true } })
     * 
     */
    findMany<T extends api_keyFindManyArgs>(args?: SelectSubset<T, api_keyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$api_keyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Api_key.
     * @param {api_keyCreateArgs} args - Arguments to create a Api_key.
     * @example
     * // Create one Api_key
     * const Api_key = await prisma.api_key.create({
     *   data: {
     *     // ... data to create a Api_key
     *   }
     * })
     * 
     */
    create<T extends api_keyCreateArgs>(args: SelectSubset<T, api_keyCreateArgs<ExtArgs>>): Prisma__api_keyClient<$Result.GetResult<Prisma.$api_keyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Api_keys.
     * @param {api_keyCreateManyArgs} args - Arguments to create many Api_keys.
     * @example
     * // Create many Api_keys
     * const api_key = await prisma.api_key.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends api_keyCreateManyArgs>(args?: SelectSubset<T, api_keyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Api_keys and returns the data saved in the database.
     * @param {api_keyCreateManyAndReturnArgs} args - Arguments to create many Api_keys.
     * @example
     * // Create many Api_keys
     * const api_key = await prisma.api_key.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Api_keys and only return the `api_key_id`
     * const api_keyWithApi_key_idOnly = await prisma.api_key.createManyAndReturn({
     *   select: { api_key_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends api_keyCreateManyAndReturnArgs>(args?: SelectSubset<T, api_keyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$api_keyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Api_key.
     * @param {api_keyDeleteArgs} args - Arguments to delete one Api_key.
     * @example
     * // Delete one Api_key
     * const Api_key = await prisma.api_key.delete({
     *   where: {
     *     // ... filter to delete one Api_key
     *   }
     * })
     * 
     */
    delete<T extends api_keyDeleteArgs>(args: SelectSubset<T, api_keyDeleteArgs<ExtArgs>>): Prisma__api_keyClient<$Result.GetResult<Prisma.$api_keyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Api_key.
     * @param {api_keyUpdateArgs} args - Arguments to update one Api_key.
     * @example
     * // Update one Api_key
     * const api_key = await prisma.api_key.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends api_keyUpdateArgs>(args: SelectSubset<T, api_keyUpdateArgs<ExtArgs>>): Prisma__api_keyClient<$Result.GetResult<Prisma.$api_keyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Api_keys.
     * @param {api_keyDeleteManyArgs} args - Arguments to filter Api_keys to delete.
     * @example
     * // Delete a few Api_keys
     * const { count } = await prisma.api_key.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends api_keyDeleteManyArgs>(args?: SelectSubset<T, api_keyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Api_keys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {api_keyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Api_keys
     * const api_key = await prisma.api_key.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends api_keyUpdateManyArgs>(args: SelectSubset<T, api_keyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Api_keys and returns the data updated in the database.
     * @param {api_keyUpdateManyAndReturnArgs} args - Arguments to update many Api_keys.
     * @example
     * // Update many Api_keys
     * const api_key = await prisma.api_key.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Api_keys and only return the `api_key_id`
     * const api_keyWithApi_key_idOnly = await prisma.api_key.updateManyAndReturn({
     *   select: { api_key_id: true },
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
    updateManyAndReturn<T extends api_keyUpdateManyAndReturnArgs>(args: SelectSubset<T, api_keyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$api_keyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Api_key.
     * @param {api_keyUpsertArgs} args - Arguments to update or create a Api_key.
     * @example
     * // Update or create a Api_key
     * const api_key = await prisma.api_key.upsert({
     *   create: {
     *     // ... data to create a Api_key
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Api_key we want to update
     *   }
     * })
     */
    upsert<T extends api_keyUpsertArgs>(args: SelectSubset<T, api_keyUpsertArgs<ExtArgs>>): Prisma__api_keyClient<$Result.GetResult<Prisma.$api_keyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Api_keys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {api_keyCountArgs} args - Arguments to filter Api_keys to count.
     * @example
     * // Count the number of Api_keys
     * const count = await prisma.api_key.count({
     *   where: {
     *     // ... the filter for the Api_keys we want to count
     *   }
     * })
    **/
    count<T extends api_keyCountArgs>(
      args?: Subset<T, api_keyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Api_keyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Api_key.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Api_keyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Api_keyAggregateArgs>(args: Subset<T, Api_keyAggregateArgs>): Prisma.PrismaPromise<GetApi_keyAggregateType<T>>

    /**
     * Group by Api_key.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {api_keyGroupByArgs} args - Group by arguments.
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
      T extends api_keyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: api_keyGroupByArgs['orderBy'] }
        : { orderBy?: api_keyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, api_keyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApi_keyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the api_key model
   */
  readonly fields: api_keyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for api_key.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__api_keyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the api_key model
   */
  interface api_keyFieldRefs {
    readonly api_key_id: FieldRef<"api_key", 'Int'>
    readonly user_id: FieldRef<"api_key", 'String'>
    readonly api_key: FieldRef<"api_key", 'String'>
    readonly created_at: FieldRef<"api_key", 'DateTime'>
    readonly expires_at: FieldRef<"api_key", 'DateTime'>
    readonly updated_at: FieldRef<"api_key", 'DateTime'>
    readonly deleted_at: FieldRef<"api_key", 'DateTime'>
    readonly is_deleted: FieldRef<"api_key", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * api_key findUnique
   */
  export type api_keyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api_key
     */
    select?: api_keySelect<ExtArgs> | null
    /**
     * Omit specific fields from the api_key
     */
    omit?: api_keyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: api_keyInclude<ExtArgs> | null
    /**
     * Filter, which api_key to fetch.
     */
    where: api_keyWhereUniqueInput
  }

  /**
   * api_key findUniqueOrThrow
   */
  export type api_keyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api_key
     */
    select?: api_keySelect<ExtArgs> | null
    /**
     * Omit specific fields from the api_key
     */
    omit?: api_keyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: api_keyInclude<ExtArgs> | null
    /**
     * Filter, which api_key to fetch.
     */
    where: api_keyWhereUniqueInput
  }

  /**
   * api_key findFirst
   */
  export type api_keyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api_key
     */
    select?: api_keySelect<ExtArgs> | null
    /**
     * Omit specific fields from the api_key
     */
    omit?: api_keyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: api_keyInclude<ExtArgs> | null
    /**
     * Filter, which api_key to fetch.
     */
    where?: api_keyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of api_keys to fetch.
     */
    orderBy?: api_keyOrderByWithRelationInput | api_keyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for api_keys.
     */
    cursor?: api_keyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` api_keys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` api_keys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of api_keys.
     */
    distinct?: Api_keyScalarFieldEnum | Api_keyScalarFieldEnum[]
  }

  /**
   * api_key findFirstOrThrow
   */
  export type api_keyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api_key
     */
    select?: api_keySelect<ExtArgs> | null
    /**
     * Omit specific fields from the api_key
     */
    omit?: api_keyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: api_keyInclude<ExtArgs> | null
    /**
     * Filter, which api_key to fetch.
     */
    where?: api_keyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of api_keys to fetch.
     */
    orderBy?: api_keyOrderByWithRelationInput | api_keyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for api_keys.
     */
    cursor?: api_keyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` api_keys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` api_keys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of api_keys.
     */
    distinct?: Api_keyScalarFieldEnum | Api_keyScalarFieldEnum[]
  }

  /**
   * api_key findMany
   */
  export type api_keyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api_key
     */
    select?: api_keySelect<ExtArgs> | null
    /**
     * Omit specific fields from the api_key
     */
    omit?: api_keyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: api_keyInclude<ExtArgs> | null
    /**
     * Filter, which api_keys to fetch.
     */
    where?: api_keyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of api_keys to fetch.
     */
    orderBy?: api_keyOrderByWithRelationInput | api_keyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing api_keys.
     */
    cursor?: api_keyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` api_keys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` api_keys.
     */
    skip?: number
    distinct?: Api_keyScalarFieldEnum | Api_keyScalarFieldEnum[]
  }

  /**
   * api_key create
   */
  export type api_keyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api_key
     */
    select?: api_keySelect<ExtArgs> | null
    /**
     * Omit specific fields from the api_key
     */
    omit?: api_keyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: api_keyInclude<ExtArgs> | null
    /**
     * The data needed to create a api_key.
     */
    data: XOR<api_keyCreateInput, api_keyUncheckedCreateInput>
  }

  /**
   * api_key createMany
   */
  export type api_keyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many api_keys.
     */
    data: api_keyCreateManyInput | api_keyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * api_key createManyAndReturn
   */
  export type api_keyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api_key
     */
    select?: api_keySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the api_key
     */
    omit?: api_keyOmit<ExtArgs> | null
    /**
     * The data used to create many api_keys.
     */
    data: api_keyCreateManyInput | api_keyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: api_keyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * api_key update
   */
  export type api_keyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api_key
     */
    select?: api_keySelect<ExtArgs> | null
    /**
     * Omit specific fields from the api_key
     */
    omit?: api_keyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: api_keyInclude<ExtArgs> | null
    /**
     * The data needed to update a api_key.
     */
    data: XOR<api_keyUpdateInput, api_keyUncheckedUpdateInput>
    /**
     * Choose, which api_key to update.
     */
    where: api_keyWhereUniqueInput
  }

  /**
   * api_key updateMany
   */
  export type api_keyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update api_keys.
     */
    data: XOR<api_keyUpdateManyMutationInput, api_keyUncheckedUpdateManyInput>
    /**
     * Filter which api_keys to update
     */
    where?: api_keyWhereInput
    /**
     * Limit how many api_keys to update.
     */
    limit?: number
  }

  /**
   * api_key updateManyAndReturn
   */
  export type api_keyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api_key
     */
    select?: api_keySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the api_key
     */
    omit?: api_keyOmit<ExtArgs> | null
    /**
     * The data used to update api_keys.
     */
    data: XOR<api_keyUpdateManyMutationInput, api_keyUncheckedUpdateManyInput>
    /**
     * Filter which api_keys to update
     */
    where?: api_keyWhereInput
    /**
     * Limit how many api_keys to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: api_keyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * api_key upsert
   */
  export type api_keyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api_key
     */
    select?: api_keySelect<ExtArgs> | null
    /**
     * Omit specific fields from the api_key
     */
    omit?: api_keyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: api_keyInclude<ExtArgs> | null
    /**
     * The filter to search for the api_key to update in case it exists.
     */
    where: api_keyWhereUniqueInput
    /**
     * In case the api_key found by the `where` argument doesn't exist, create a new api_key with this data.
     */
    create: XOR<api_keyCreateInput, api_keyUncheckedCreateInput>
    /**
     * In case the api_key was found with the provided `where` argument, update it with this data.
     */
    update: XOR<api_keyUpdateInput, api_keyUncheckedUpdateInput>
  }

  /**
   * api_key delete
   */
  export type api_keyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api_key
     */
    select?: api_keySelect<ExtArgs> | null
    /**
     * Omit specific fields from the api_key
     */
    omit?: api_keyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: api_keyInclude<ExtArgs> | null
    /**
     * Filter which api_key to delete.
     */
    where: api_keyWhereUniqueInput
  }

  /**
   * api_key deleteMany
   */
  export type api_keyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which api_keys to delete
     */
    where?: api_keyWhereInput
    /**
     * Limit how many api_keys to delete.
     */
    limit?: number
  }

  /**
   * api_key without action
   */
  export type api_keyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api_key
     */
    select?: api_keySelect<ExtArgs> | null
    /**
     * Omit specific fields from the api_key
     */
    omit?: api_keyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: api_keyInclude<ExtArgs> | null
  }


  /**
   * Model audit_log
   */

  export type AggregateAudit_log = {
    _count: Audit_logCountAggregateOutputType | null
    _avg: Audit_logAvgAggregateOutputType | null
    _sum: Audit_logSumAggregateOutputType | null
    _min: Audit_logMinAggregateOutputType | null
    _max: Audit_logMaxAggregateOutputType | null
  }

  export type Audit_logAvgAggregateOutputType = {
    audit_id: number | null
  }

  export type Audit_logSumAggregateOutputType = {
    audit_id: number | null
  }

  export type Audit_logMinAggregateOutputType = {
    audit_id: number | null
    url_id: string | null
    action: string | null
    changed_by: string | null
    change_date: Date | null
    details: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    is_deleted: boolean | null
  }

  export type Audit_logMaxAggregateOutputType = {
    audit_id: number | null
    url_id: string | null
    action: string | null
    changed_by: string | null
    change_date: Date | null
    details: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    is_deleted: boolean | null
  }

  export type Audit_logCountAggregateOutputType = {
    audit_id: number
    url_id: number
    action: number
    changed_by: number
    change_date: number
    details: number
    created_at: number
    updated_at: number
    deleted_at: number
    is_deleted: number
    _all: number
  }


  export type Audit_logAvgAggregateInputType = {
    audit_id?: true
  }

  export type Audit_logSumAggregateInputType = {
    audit_id?: true
  }

  export type Audit_logMinAggregateInputType = {
    audit_id?: true
    url_id?: true
    action?: true
    changed_by?: true
    change_date?: true
    details?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    is_deleted?: true
  }

  export type Audit_logMaxAggregateInputType = {
    audit_id?: true
    url_id?: true
    action?: true
    changed_by?: true
    change_date?: true
    details?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    is_deleted?: true
  }

  export type Audit_logCountAggregateInputType = {
    audit_id?: true
    url_id?: true
    action?: true
    changed_by?: true
    change_date?: true
    details?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    is_deleted?: true
    _all?: true
  }

  export type Audit_logAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which audit_log to aggregate.
     */
    where?: audit_logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of audit_logs to fetch.
     */
    orderBy?: audit_logOrderByWithRelationInput | audit_logOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: audit_logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` audit_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` audit_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned audit_logs
    **/
    _count?: true | Audit_logCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Audit_logAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Audit_logSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Audit_logMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Audit_logMaxAggregateInputType
  }

  export type GetAudit_logAggregateType<T extends Audit_logAggregateArgs> = {
        [P in keyof T & keyof AggregateAudit_log]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAudit_log[P]>
      : GetScalarType<T[P], AggregateAudit_log[P]>
  }




  export type audit_logGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: audit_logWhereInput
    orderBy?: audit_logOrderByWithAggregationInput | audit_logOrderByWithAggregationInput[]
    by: Audit_logScalarFieldEnum[] | Audit_logScalarFieldEnum
    having?: audit_logScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Audit_logCountAggregateInputType | true
    _avg?: Audit_logAvgAggregateInputType
    _sum?: Audit_logSumAggregateInputType
    _min?: Audit_logMinAggregateInputType
    _max?: Audit_logMaxAggregateInputType
  }

  export type Audit_logGroupByOutputType = {
    audit_id: number
    url_id: string
    action: string
    changed_by: string
    change_date: Date
    details: string | null
    created_at: Date
    updated_at: Date
    deleted_at: Date | null
    is_deleted: boolean
    _count: Audit_logCountAggregateOutputType | null
    _avg: Audit_logAvgAggregateOutputType | null
    _sum: Audit_logSumAggregateOutputType | null
    _min: Audit_logMinAggregateOutputType | null
    _max: Audit_logMaxAggregateOutputType | null
  }

  type GetAudit_logGroupByPayload<T extends audit_logGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Audit_logGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Audit_logGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Audit_logGroupByOutputType[P]>
            : GetScalarType<T[P], Audit_logGroupByOutputType[P]>
        }
      >
    >


  export type audit_logSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    audit_id?: boolean
    url_id?: boolean
    action?: boolean
    changed_by?: boolean
    change_date?: boolean
    details?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    is_deleted?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    url?: boolean | urlDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["audit_log"]>

  export type audit_logSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    audit_id?: boolean
    url_id?: boolean
    action?: boolean
    changed_by?: boolean
    change_date?: boolean
    details?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    is_deleted?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    url?: boolean | urlDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["audit_log"]>

  export type audit_logSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    audit_id?: boolean
    url_id?: boolean
    action?: boolean
    changed_by?: boolean
    change_date?: boolean
    details?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    is_deleted?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    url?: boolean | urlDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["audit_log"]>

  export type audit_logSelectScalar = {
    audit_id?: boolean
    url_id?: boolean
    action?: boolean
    changed_by?: boolean
    change_date?: boolean
    details?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    is_deleted?: boolean
  }

  export type audit_logOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"audit_id" | "url_id" | "action" | "changed_by" | "change_date" | "details" | "created_at" | "updated_at" | "deleted_at" | "is_deleted", ExtArgs["result"]["audit_log"]>
  export type audit_logInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    url?: boolean | urlDefaultArgs<ExtArgs>
  }
  export type audit_logIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    url?: boolean | urlDefaultArgs<ExtArgs>
  }
  export type audit_logIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    url?: boolean | urlDefaultArgs<ExtArgs>
  }

  export type $audit_logPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "audit_log"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
      url: Prisma.$urlPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      audit_id: number
      url_id: string
      action: string
      changed_by: string
      change_date: Date
      details: string | null
      created_at: Date
      updated_at: Date
      deleted_at: Date | null
      is_deleted: boolean
    }, ExtArgs["result"]["audit_log"]>
    composites: {}
  }

  type audit_logGetPayload<S extends boolean | null | undefined | audit_logDefaultArgs> = $Result.GetResult<Prisma.$audit_logPayload, S>

  type audit_logCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<audit_logFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Audit_logCountAggregateInputType | true
    }

  export interface audit_logDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['audit_log'], meta: { name: 'audit_log' } }
    /**
     * Find zero or one Audit_log that matches the filter.
     * @param {audit_logFindUniqueArgs} args - Arguments to find a Audit_log
     * @example
     * // Get one Audit_log
     * const audit_log = await prisma.audit_log.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends audit_logFindUniqueArgs>(args: SelectSubset<T, audit_logFindUniqueArgs<ExtArgs>>): Prisma__audit_logClient<$Result.GetResult<Prisma.$audit_logPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Audit_log that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {audit_logFindUniqueOrThrowArgs} args - Arguments to find a Audit_log
     * @example
     * // Get one Audit_log
     * const audit_log = await prisma.audit_log.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends audit_logFindUniqueOrThrowArgs>(args: SelectSubset<T, audit_logFindUniqueOrThrowArgs<ExtArgs>>): Prisma__audit_logClient<$Result.GetResult<Prisma.$audit_logPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Audit_log that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {audit_logFindFirstArgs} args - Arguments to find a Audit_log
     * @example
     * // Get one Audit_log
     * const audit_log = await prisma.audit_log.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends audit_logFindFirstArgs>(args?: SelectSubset<T, audit_logFindFirstArgs<ExtArgs>>): Prisma__audit_logClient<$Result.GetResult<Prisma.$audit_logPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Audit_log that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {audit_logFindFirstOrThrowArgs} args - Arguments to find a Audit_log
     * @example
     * // Get one Audit_log
     * const audit_log = await prisma.audit_log.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends audit_logFindFirstOrThrowArgs>(args?: SelectSubset<T, audit_logFindFirstOrThrowArgs<ExtArgs>>): Prisma__audit_logClient<$Result.GetResult<Prisma.$audit_logPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Audit_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {audit_logFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Audit_logs
     * const audit_logs = await prisma.audit_log.findMany()
     * 
     * // Get first 10 Audit_logs
     * const audit_logs = await prisma.audit_log.findMany({ take: 10 })
     * 
     * // Only select the `audit_id`
     * const audit_logWithAudit_idOnly = await prisma.audit_log.findMany({ select: { audit_id: true } })
     * 
     */
    findMany<T extends audit_logFindManyArgs>(args?: SelectSubset<T, audit_logFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$audit_logPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Audit_log.
     * @param {audit_logCreateArgs} args - Arguments to create a Audit_log.
     * @example
     * // Create one Audit_log
     * const Audit_log = await prisma.audit_log.create({
     *   data: {
     *     // ... data to create a Audit_log
     *   }
     * })
     * 
     */
    create<T extends audit_logCreateArgs>(args: SelectSubset<T, audit_logCreateArgs<ExtArgs>>): Prisma__audit_logClient<$Result.GetResult<Prisma.$audit_logPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Audit_logs.
     * @param {audit_logCreateManyArgs} args - Arguments to create many Audit_logs.
     * @example
     * // Create many Audit_logs
     * const audit_log = await prisma.audit_log.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends audit_logCreateManyArgs>(args?: SelectSubset<T, audit_logCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Audit_logs and returns the data saved in the database.
     * @param {audit_logCreateManyAndReturnArgs} args - Arguments to create many Audit_logs.
     * @example
     * // Create many Audit_logs
     * const audit_log = await prisma.audit_log.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Audit_logs and only return the `audit_id`
     * const audit_logWithAudit_idOnly = await prisma.audit_log.createManyAndReturn({
     *   select: { audit_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends audit_logCreateManyAndReturnArgs>(args?: SelectSubset<T, audit_logCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$audit_logPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Audit_log.
     * @param {audit_logDeleteArgs} args - Arguments to delete one Audit_log.
     * @example
     * // Delete one Audit_log
     * const Audit_log = await prisma.audit_log.delete({
     *   where: {
     *     // ... filter to delete one Audit_log
     *   }
     * })
     * 
     */
    delete<T extends audit_logDeleteArgs>(args: SelectSubset<T, audit_logDeleteArgs<ExtArgs>>): Prisma__audit_logClient<$Result.GetResult<Prisma.$audit_logPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Audit_log.
     * @param {audit_logUpdateArgs} args - Arguments to update one Audit_log.
     * @example
     * // Update one Audit_log
     * const audit_log = await prisma.audit_log.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends audit_logUpdateArgs>(args: SelectSubset<T, audit_logUpdateArgs<ExtArgs>>): Prisma__audit_logClient<$Result.GetResult<Prisma.$audit_logPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Audit_logs.
     * @param {audit_logDeleteManyArgs} args - Arguments to filter Audit_logs to delete.
     * @example
     * // Delete a few Audit_logs
     * const { count } = await prisma.audit_log.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends audit_logDeleteManyArgs>(args?: SelectSubset<T, audit_logDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Audit_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {audit_logUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Audit_logs
     * const audit_log = await prisma.audit_log.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends audit_logUpdateManyArgs>(args: SelectSubset<T, audit_logUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Audit_logs and returns the data updated in the database.
     * @param {audit_logUpdateManyAndReturnArgs} args - Arguments to update many Audit_logs.
     * @example
     * // Update many Audit_logs
     * const audit_log = await prisma.audit_log.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Audit_logs and only return the `audit_id`
     * const audit_logWithAudit_idOnly = await prisma.audit_log.updateManyAndReturn({
     *   select: { audit_id: true },
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
    updateManyAndReturn<T extends audit_logUpdateManyAndReturnArgs>(args: SelectSubset<T, audit_logUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$audit_logPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Audit_log.
     * @param {audit_logUpsertArgs} args - Arguments to update or create a Audit_log.
     * @example
     * // Update or create a Audit_log
     * const audit_log = await prisma.audit_log.upsert({
     *   create: {
     *     // ... data to create a Audit_log
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Audit_log we want to update
     *   }
     * })
     */
    upsert<T extends audit_logUpsertArgs>(args: SelectSubset<T, audit_logUpsertArgs<ExtArgs>>): Prisma__audit_logClient<$Result.GetResult<Prisma.$audit_logPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Audit_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {audit_logCountArgs} args - Arguments to filter Audit_logs to count.
     * @example
     * // Count the number of Audit_logs
     * const count = await prisma.audit_log.count({
     *   where: {
     *     // ... the filter for the Audit_logs we want to count
     *   }
     * })
    **/
    count<T extends audit_logCountArgs>(
      args?: Subset<T, audit_logCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Audit_logCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Audit_log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Audit_logAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Audit_logAggregateArgs>(args: Subset<T, Audit_logAggregateArgs>): Prisma.PrismaPromise<GetAudit_logAggregateType<T>>

    /**
     * Group by Audit_log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {audit_logGroupByArgs} args - Group by arguments.
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
      T extends audit_logGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: audit_logGroupByArgs['orderBy'] }
        : { orderBy?: audit_logGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, audit_logGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAudit_logGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the audit_log model
   */
  readonly fields: audit_logFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for audit_log.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__audit_logClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    url<T extends urlDefaultArgs<ExtArgs> = {}>(args?: Subset<T, urlDefaultArgs<ExtArgs>>): Prisma__urlClient<$Result.GetResult<Prisma.$urlPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the audit_log model
   */
  interface audit_logFieldRefs {
    readonly audit_id: FieldRef<"audit_log", 'Int'>
    readonly url_id: FieldRef<"audit_log", 'String'>
    readonly action: FieldRef<"audit_log", 'String'>
    readonly changed_by: FieldRef<"audit_log", 'String'>
    readonly change_date: FieldRef<"audit_log", 'DateTime'>
    readonly details: FieldRef<"audit_log", 'String'>
    readonly created_at: FieldRef<"audit_log", 'DateTime'>
    readonly updated_at: FieldRef<"audit_log", 'DateTime'>
    readonly deleted_at: FieldRef<"audit_log", 'DateTime'>
    readonly is_deleted: FieldRef<"audit_log", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * audit_log findUnique
   */
  export type audit_logFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_log
     */
    select?: audit_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit_log
     */
    omit?: audit_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: audit_logInclude<ExtArgs> | null
    /**
     * Filter, which audit_log to fetch.
     */
    where: audit_logWhereUniqueInput
  }

  /**
   * audit_log findUniqueOrThrow
   */
  export type audit_logFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_log
     */
    select?: audit_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit_log
     */
    omit?: audit_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: audit_logInclude<ExtArgs> | null
    /**
     * Filter, which audit_log to fetch.
     */
    where: audit_logWhereUniqueInput
  }

  /**
   * audit_log findFirst
   */
  export type audit_logFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_log
     */
    select?: audit_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit_log
     */
    omit?: audit_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: audit_logInclude<ExtArgs> | null
    /**
     * Filter, which audit_log to fetch.
     */
    where?: audit_logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of audit_logs to fetch.
     */
    orderBy?: audit_logOrderByWithRelationInput | audit_logOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for audit_logs.
     */
    cursor?: audit_logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` audit_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` audit_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of audit_logs.
     */
    distinct?: Audit_logScalarFieldEnum | Audit_logScalarFieldEnum[]
  }

  /**
   * audit_log findFirstOrThrow
   */
  export type audit_logFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_log
     */
    select?: audit_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit_log
     */
    omit?: audit_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: audit_logInclude<ExtArgs> | null
    /**
     * Filter, which audit_log to fetch.
     */
    where?: audit_logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of audit_logs to fetch.
     */
    orderBy?: audit_logOrderByWithRelationInput | audit_logOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for audit_logs.
     */
    cursor?: audit_logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` audit_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` audit_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of audit_logs.
     */
    distinct?: Audit_logScalarFieldEnum | Audit_logScalarFieldEnum[]
  }

  /**
   * audit_log findMany
   */
  export type audit_logFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_log
     */
    select?: audit_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit_log
     */
    omit?: audit_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: audit_logInclude<ExtArgs> | null
    /**
     * Filter, which audit_logs to fetch.
     */
    where?: audit_logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of audit_logs to fetch.
     */
    orderBy?: audit_logOrderByWithRelationInput | audit_logOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing audit_logs.
     */
    cursor?: audit_logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` audit_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` audit_logs.
     */
    skip?: number
    distinct?: Audit_logScalarFieldEnum | Audit_logScalarFieldEnum[]
  }

  /**
   * audit_log create
   */
  export type audit_logCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_log
     */
    select?: audit_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit_log
     */
    omit?: audit_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: audit_logInclude<ExtArgs> | null
    /**
     * The data needed to create a audit_log.
     */
    data: XOR<audit_logCreateInput, audit_logUncheckedCreateInput>
  }

  /**
   * audit_log createMany
   */
  export type audit_logCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many audit_logs.
     */
    data: audit_logCreateManyInput | audit_logCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * audit_log createManyAndReturn
   */
  export type audit_logCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_log
     */
    select?: audit_logSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the audit_log
     */
    omit?: audit_logOmit<ExtArgs> | null
    /**
     * The data used to create many audit_logs.
     */
    data: audit_logCreateManyInput | audit_logCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: audit_logIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * audit_log update
   */
  export type audit_logUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_log
     */
    select?: audit_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit_log
     */
    omit?: audit_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: audit_logInclude<ExtArgs> | null
    /**
     * The data needed to update a audit_log.
     */
    data: XOR<audit_logUpdateInput, audit_logUncheckedUpdateInput>
    /**
     * Choose, which audit_log to update.
     */
    where: audit_logWhereUniqueInput
  }

  /**
   * audit_log updateMany
   */
  export type audit_logUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update audit_logs.
     */
    data: XOR<audit_logUpdateManyMutationInput, audit_logUncheckedUpdateManyInput>
    /**
     * Filter which audit_logs to update
     */
    where?: audit_logWhereInput
    /**
     * Limit how many audit_logs to update.
     */
    limit?: number
  }

  /**
   * audit_log updateManyAndReturn
   */
  export type audit_logUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_log
     */
    select?: audit_logSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the audit_log
     */
    omit?: audit_logOmit<ExtArgs> | null
    /**
     * The data used to update audit_logs.
     */
    data: XOR<audit_logUpdateManyMutationInput, audit_logUncheckedUpdateManyInput>
    /**
     * Filter which audit_logs to update
     */
    where?: audit_logWhereInput
    /**
     * Limit how many audit_logs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: audit_logIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * audit_log upsert
   */
  export type audit_logUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_log
     */
    select?: audit_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit_log
     */
    omit?: audit_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: audit_logInclude<ExtArgs> | null
    /**
     * The filter to search for the audit_log to update in case it exists.
     */
    where: audit_logWhereUniqueInput
    /**
     * In case the audit_log found by the `where` argument doesn't exist, create a new audit_log with this data.
     */
    create: XOR<audit_logCreateInput, audit_logUncheckedCreateInput>
    /**
     * In case the audit_log was found with the provided `where` argument, update it with this data.
     */
    update: XOR<audit_logUpdateInput, audit_logUncheckedUpdateInput>
  }

  /**
   * audit_log delete
   */
  export type audit_logDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_log
     */
    select?: audit_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit_log
     */
    omit?: audit_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: audit_logInclude<ExtArgs> | null
    /**
     * Filter which audit_log to delete.
     */
    where: audit_logWhereUniqueInput
  }

  /**
   * audit_log deleteMany
   */
  export type audit_logDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which audit_logs to delete
     */
    where?: audit_logWhereInput
    /**
     * Limit how many audit_logs to delete.
     */
    limit?: number
  }

  /**
   * audit_log without action
   */
  export type audit_logDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_log
     */
    select?: audit_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit_log
     */
    omit?: audit_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: audit_logInclude<ExtArgs> | null
  }


  /**
   * Model logo
   */

  export type AggregateLogo = {
    _count: LogoCountAggregateOutputType | null
    _avg: LogoAvgAggregateOutputType | null
    _sum: LogoSumAggregateOutputType | null
    _min: LogoMinAggregateOutputType | null
    _max: LogoMaxAggregateOutputType | null
  }

  export type LogoAvgAggregateOutputType = {
    logo_id: number | null
  }

  export type LogoSumAggregateOutputType = {
    logo_id: number | null
  }

  export type LogoMinAggregateOutputType = {
    logo_id: number | null
    user_id: string | null
    logo_path: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    is_deleted: boolean | null
  }

  export type LogoMaxAggregateOutputType = {
    logo_id: number | null
    user_id: string | null
    logo_path: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    is_deleted: boolean | null
  }

  export type LogoCountAggregateOutputType = {
    logo_id: number
    user_id: number
    logo_path: number
    created_at: number
    updated_at: number
    deleted_at: number
    is_deleted: number
    _all: number
  }


  export type LogoAvgAggregateInputType = {
    logo_id?: true
  }

  export type LogoSumAggregateInputType = {
    logo_id?: true
  }

  export type LogoMinAggregateInputType = {
    logo_id?: true
    user_id?: true
    logo_path?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    is_deleted?: true
  }

  export type LogoMaxAggregateInputType = {
    logo_id?: true
    user_id?: true
    logo_path?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    is_deleted?: true
  }

  export type LogoCountAggregateInputType = {
    logo_id?: true
    user_id?: true
    logo_path?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    is_deleted?: true
    _all?: true
  }

  export type LogoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which logo to aggregate.
     */
    where?: logoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of logos to fetch.
     */
    orderBy?: logoOrderByWithRelationInput | logoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: logoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` logos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` logos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned logos
    **/
    _count?: true | LogoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LogoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LogoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LogoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LogoMaxAggregateInputType
  }

  export type GetLogoAggregateType<T extends LogoAggregateArgs> = {
        [P in keyof T & keyof AggregateLogo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLogo[P]>
      : GetScalarType<T[P], AggregateLogo[P]>
  }




  export type logoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: logoWhereInput
    orderBy?: logoOrderByWithAggregationInput | logoOrderByWithAggregationInput[]
    by: LogoScalarFieldEnum[] | LogoScalarFieldEnum
    having?: logoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LogoCountAggregateInputType | true
    _avg?: LogoAvgAggregateInputType
    _sum?: LogoSumAggregateInputType
    _min?: LogoMinAggregateInputType
    _max?: LogoMaxAggregateInputType
  }

  export type LogoGroupByOutputType = {
    logo_id: number
    user_id: string
    logo_path: string
    created_at: Date
    updated_at: Date | null
    deleted_at: Date | null
    is_deleted: boolean
    _count: LogoCountAggregateOutputType | null
    _avg: LogoAvgAggregateOutputType | null
    _sum: LogoSumAggregateOutputType | null
    _min: LogoMinAggregateOutputType | null
    _max: LogoMaxAggregateOutputType | null
  }

  type GetLogoGroupByPayload<T extends logoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LogoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LogoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LogoGroupByOutputType[P]>
            : GetScalarType<T[P], LogoGroupByOutputType[P]>
        }
      >
    >


  export type logoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    logo_id?: boolean
    user_id?: boolean
    logo_path?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    is_deleted?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    url?: boolean | logo$urlArgs<ExtArgs>
    _count?: boolean | LogoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["logo"]>

  export type logoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    logo_id?: boolean
    user_id?: boolean
    logo_path?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    is_deleted?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["logo"]>

  export type logoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    logo_id?: boolean
    user_id?: boolean
    logo_path?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    is_deleted?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["logo"]>

  export type logoSelectScalar = {
    logo_id?: boolean
    user_id?: boolean
    logo_path?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    is_deleted?: boolean
  }

  export type logoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"logo_id" | "user_id" | "logo_path" | "created_at" | "updated_at" | "deleted_at" | "is_deleted", ExtArgs["result"]["logo"]>
  export type logoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    url?: boolean | logo$urlArgs<ExtArgs>
    _count?: boolean | LogoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type logoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type logoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $logoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "logo"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
      url: Prisma.$urlPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      logo_id: number
      user_id: string
      logo_path: string
      created_at: Date
      updated_at: Date | null
      deleted_at: Date | null
      is_deleted: boolean
    }, ExtArgs["result"]["logo"]>
    composites: {}
  }

  type logoGetPayload<S extends boolean | null | undefined | logoDefaultArgs> = $Result.GetResult<Prisma.$logoPayload, S>

  type logoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<logoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LogoCountAggregateInputType | true
    }

  export interface logoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['logo'], meta: { name: 'logo' } }
    /**
     * Find zero or one Logo that matches the filter.
     * @param {logoFindUniqueArgs} args - Arguments to find a Logo
     * @example
     * // Get one Logo
     * const logo = await prisma.logo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends logoFindUniqueArgs>(args: SelectSubset<T, logoFindUniqueArgs<ExtArgs>>): Prisma__logoClient<$Result.GetResult<Prisma.$logoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Logo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {logoFindUniqueOrThrowArgs} args - Arguments to find a Logo
     * @example
     * // Get one Logo
     * const logo = await prisma.logo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends logoFindUniqueOrThrowArgs>(args: SelectSubset<T, logoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__logoClient<$Result.GetResult<Prisma.$logoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Logo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logoFindFirstArgs} args - Arguments to find a Logo
     * @example
     * // Get one Logo
     * const logo = await prisma.logo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends logoFindFirstArgs>(args?: SelectSubset<T, logoFindFirstArgs<ExtArgs>>): Prisma__logoClient<$Result.GetResult<Prisma.$logoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Logo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logoFindFirstOrThrowArgs} args - Arguments to find a Logo
     * @example
     * // Get one Logo
     * const logo = await prisma.logo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends logoFindFirstOrThrowArgs>(args?: SelectSubset<T, logoFindFirstOrThrowArgs<ExtArgs>>): Prisma__logoClient<$Result.GetResult<Prisma.$logoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Logos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Logos
     * const logos = await prisma.logo.findMany()
     * 
     * // Get first 10 Logos
     * const logos = await prisma.logo.findMany({ take: 10 })
     * 
     * // Only select the `logo_id`
     * const logoWithLogo_idOnly = await prisma.logo.findMany({ select: { logo_id: true } })
     * 
     */
    findMany<T extends logoFindManyArgs>(args?: SelectSubset<T, logoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$logoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Logo.
     * @param {logoCreateArgs} args - Arguments to create a Logo.
     * @example
     * // Create one Logo
     * const Logo = await prisma.logo.create({
     *   data: {
     *     // ... data to create a Logo
     *   }
     * })
     * 
     */
    create<T extends logoCreateArgs>(args: SelectSubset<T, logoCreateArgs<ExtArgs>>): Prisma__logoClient<$Result.GetResult<Prisma.$logoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Logos.
     * @param {logoCreateManyArgs} args - Arguments to create many Logos.
     * @example
     * // Create many Logos
     * const logo = await prisma.logo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends logoCreateManyArgs>(args?: SelectSubset<T, logoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Logos and returns the data saved in the database.
     * @param {logoCreateManyAndReturnArgs} args - Arguments to create many Logos.
     * @example
     * // Create many Logos
     * const logo = await prisma.logo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Logos and only return the `logo_id`
     * const logoWithLogo_idOnly = await prisma.logo.createManyAndReturn({
     *   select: { logo_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends logoCreateManyAndReturnArgs>(args?: SelectSubset<T, logoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$logoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Logo.
     * @param {logoDeleteArgs} args - Arguments to delete one Logo.
     * @example
     * // Delete one Logo
     * const Logo = await prisma.logo.delete({
     *   where: {
     *     // ... filter to delete one Logo
     *   }
     * })
     * 
     */
    delete<T extends logoDeleteArgs>(args: SelectSubset<T, logoDeleteArgs<ExtArgs>>): Prisma__logoClient<$Result.GetResult<Prisma.$logoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Logo.
     * @param {logoUpdateArgs} args - Arguments to update one Logo.
     * @example
     * // Update one Logo
     * const logo = await prisma.logo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends logoUpdateArgs>(args: SelectSubset<T, logoUpdateArgs<ExtArgs>>): Prisma__logoClient<$Result.GetResult<Prisma.$logoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Logos.
     * @param {logoDeleteManyArgs} args - Arguments to filter Logos to delete.
     * @example
     * // Delete a few Logos
     * const { count } = await prisma.logo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends logoDeleteManyArgs>(args?: SelectSubset<T, logoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Logos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Logos
     * const logo = await prisma.logo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends logoUpdateManyArgs>(args: SelectSubset<T, logoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Logos and returns the data updated in the database.
     * @param {logoUpdateManyAndReturnArgs} args - Arguments to update many Logos.
     * @example
     * // Update many Logos
     * const logo = await prisma.logo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Logos and only return the `logo_id`
     * const logoWithLogo_idOnly = await prisma.logo.updateManyAndReturn({
     *   select: { logo_id: true },
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
    updateManyAndReturn<T extends logoUpdateManyAndReturnArgs>(args: SelectSubset<T, logoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$logoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Logo.
     * @param {logoUpsertArgs} args - Arguments to update or create a Logo.
     * @example
     * // Update or create a Logo
     * const logo = await prisma.logo.upsert({
     *   create: {
     *     // ... data to create a Logo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Logo we want to update
     *   }
     * })
     */
    upsert<T extends logoUpsertArgs>(args: SelectSubset<T, logoUpsertArgs<ExtArgs>>): Prisma__logoClient<$Result.GetResult<Prisma.$logoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Logos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logoCountArgs} args - Arguments to filter Logos to count.
     * @example
     * // Count the number of Logos
     * const count = await prisma.logo.count({
     *   where: {
     *     // ... the filter for the Logos we want to count
     *   }
     * })
    **/
    count<T extends logoCountArgs>(
      args?: Subset<T, logoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LogoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Logo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LogoAggregateArgs>(args: Subset<T, LogoAggregateArgs>): Prisma.PrismaPromise<GetLogoAggregateType<T>>

    /**
     * Group by Logo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logoGroupByArgs} args - Group by arguments.
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
      T extends logoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: logoGroupByArgs['orderBy'] }
        : { orderBy?: logoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, logoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLogoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the logo model
   */
  readonly fields: logoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for logo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__logoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    url<T extends logo$urlArgs<ExtArgs> = {}>(args?: Subset<T, logo$urlArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$urlPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the logo model
   */
  interface logoFieldRefs {
    readonly logo_id: FieldRef<"logo", 'Int'>
    readonly user_id: FieldRef<"logo", 'String'>
    readonly logo_path: FieldRef<"logo", 'String'>
    readonly created_at: FieldRef<"logo", 'DateTime'>
    readonly updated_at: FieldRef<"logo", 'DateTime'>
    readonly deleted_at: FieldRef<"logo", 'DateTime'>
    readonly is_deleted: FieldRef<"logo", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * logo findUnique
   */
  export type logoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logo
     */
    select?: logoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logo
     */
    omit?: logoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logoInclude<ExtArgs> | null
    /**
     * Filter, which logo to fetch.
     */
    where: logoWhereUniqueInput
  }

  /**
   * logo findUniqueOrThrow
   */
  export type logoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logo
     */
    select?: logoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logo
     */
    omit?: logoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logoInclude<ExtArgs> | null
    /**
     * Filter, which logo to fetch.
     */
    where: logoWhereUniqueInput
  }

  /**
   * logo findFirst
   */
  export type logoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logo
     */
    select?: logoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logo
     */
    omit?: logoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logoInclude<ExtArgs> | null
    /**
     * Filter, which logo to fetch.
     */
    where?: logoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of logos to fetch.
     */
    orderBy?: logoOrderByWithRelationInput | logoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for logos.
     */
    cursor?: logoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` logos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` logos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of logos.
     */
    distinct?: LogoScalarFieldEnum | LogoScalarFieldEnum[]
  }

  /**
   * logo findFirstOrThrow
   */
  export type logoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logo
     */
    select?: logoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logo
     */
    omit?: logoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logoInclude<ExtArgs> | null
    /**
     * Filter, which logo to fetch.
     */
    where?: logoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of logos to fetch.
     */
    orderBy?: logoOrderByWithRelationInput | logoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for logos.
     */
    cursor?: logoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` logos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` logos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of logos.
     */
    distinct?: LogoScalarFieldEnum | LogoScalarFieldEnum[]
  }

  /**
   * logo findMany
   */
  export type logoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logo
     */
    select?: logoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logo
     */
    omit?: logoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logoInclude<ExtArgs> | null
    /**
     * Filter, which logos to fetch.
     */
    where?: logoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of logos to fetch.
     */
    orderBy?: logoOrderByWithRelationInput | logoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing logos.
     */
    cursor?: logoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` logos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` logos.
     */
    skip?: number
    distinct?: LogoScalarFieldEnum | LogoScalarFieldEnum[]
  }

  /**
   * logo create
   */
  export type logoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logo
     */
    select?: logoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logo
     */
    omit?: logoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logoInclude<ExtArgs> | null
    /**
     * The data needed to create a logo.
     */
    data: XOR<logoCreateInput, logoUncheckedCreateInput>
  }

  /**
   * logo createMany
   */
  export type logoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many logos.
     */
    data: logoCreateManyInput | logoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * logo createManyAndReturn
   */
  export type logoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logo
     */
    select?: logoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the logo
     */
    omit?: logoOmit<ExtArgs> | null
    /**
     * The data used to create many logos.
     */
    data: logoCreateManyInput | logoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * logo update
   */
  export type logoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logo
     */
    select?: logoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logo
     */
    omit?: logoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logoInclude<ExtArgs> | null
    /**
     * The data needed to update a logo.
     */
    data: XOR<logoUpdateInput, logoUncheckedUpdateInput>
    /**
     * Choose, which logo to update.
     */
    where: logoWhereUniqueInput
  }

  /**
   * logo updateMany
   */
  export type logoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update logos.
     */
    data: XOR<logoUpdateManyMutationInput, logoUncheckedUpdateManyInput>
    /**
     * Filter which logos to update
     */
    where?: logoWhereInput
    /**
     * Limit how many logos to update.
     */
    limit?: number
  }

  /**
   * logo updateManyAndReturn
   */
  export type logoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logo
     */
    select?: logoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the logo
     */
    omit?: logoOmit<ExtArgs> | null
    /**
     * The data used to update logos.
     */
    data: XOR<logoUpdateManyMutationInput, logoUncheckedUpdateManyInput>
    /**
     * Filter which logos to update
     */
    where?: logoWhereInput
    /**
     * Limit how many logos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * logo upsert
   */
  export type logoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logo
     */
    select?: logoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logo
     */
    omit?: logoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logoInclude<ExtArgs> | null
    /**
     * The filter to search for the logo to update in case it exists.
     */
    where: logoWhereUniqueInput
    /**
     * In case the logo found by the `where` argument doesn't exist, create a new logo with this data.
     */
    create: XOR<logoCreateInput, logoUncheckedCreateInput>
    /**
     * In case the logo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<logoUpdateInput, logoUncheckedUpdateInput>
  }

  /**
   * logo delete
   */
  export type logoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logo
     */
    select?: logoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logo
     */
    omit?: logoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logoInclude<ExtArgs> | null
    /**
     * Filter which logo to delete.
     */
    where: logoWhereUniqueInput
  }

  /**
   * logo deleteMany
   */
  export type logoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which logos to delete
     */
    where?: logoWhereInput
    /**
     * Limit how many logos to delete.
     */
    limit?: number
  }

  /**
   * logo.url
   */
  export type logo$urlArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the url
     */
    select?: urlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the url
     */
    omit?: urlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: urlInclude<ExtArgs> | null
    where?: urlWhereInput
    orderBy?: urlOrderByWithRelationInput | urlOrderByWithRelationInput[]
    cursor?: urlWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UrlScalarFieldEnum | UrlScalarFieldEnum[]
  }

  /**
   * logo without action
   */
  export type logoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logo
     */
    select?: logoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logo
     */
    omit?: logoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logoInclude<ExtArgs> | null
  }


  /**
   * Model url
   */

  export type AggregateUrl = {
    _count: UrlCountAggregateOutputType | null
    _avg: UrlAvgAggregateOutputType | null
    _sum: UrlSumAggregateOutputType | null
    _min: UrlMinAggregateOutputType | null
    _max: UrlMaxAggregateOutputType | null
  }

  export type UrlAvgAggregateOutputType = {
    logo_id: number | null
    tag_id: number | null
  }

  export type UrlSumAggregateOutputType = {
    logo_id: number | null
    tag_id: number | null
  }

  export type UrlMinAggregateOutputType = {
    url_id: string | null
    user_id: string | null
    original_url: string | null
    short_url: string | null
    logo_id: number | null
    tag_id: number | null
    url_type: string | null
    associated: boolean | null
    expiration_date: Date | null
    status: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    is_deleted: boolean | null
    is_pre_generated: boolean | null
    associated_at: Date | null
  }

  export type UrlMaxAggregateOutputType = {
    url_id: string | null
    user_id: string | null
    original_url: string | null
    short_url: string | null
    logo_id: number | null
    tag_id: number | null
    url_type: string | null
    associated: boolean | null
    expiration_date: Date | null
    status: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    is_deleted: boolean | null
    is_pre_generated: boolean | null
    associated_at: Date | null
  }

  export type UrlCountAggregateOutputType = {
    url_id: number
    user_id: number
    original_url: number
    short_url: number
    logo_id: number
    tag_id: number
    url_type: number
    associated: number
    expiration_date: number
    status: number
    created_at: number
    updated_at: number
    deleted_at: number
    is_deleted: number
    is_pre_generated: number
    associated_at: number
    _all: number
  }


  export type UrlAvgAggregateInputType = {
    logo_id?: true
    tag_id?: true
  }

  export type UrlSumAggregateInputType = {
    logo_id?: true
    tag_id?: true
  }

  export type UrlMinAggregateInputType = {
    url_id?: true
    user_id?: true
    original_url?: true
    short_url?: true
    logo_id?: true
    tag_id?: true
    url_type?: true
    associated?: true
    expiration_date?: true
    status?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    is_deleted?: true
    is_pre_generated?: true
    associated_at?: true
  }

  export type UrlMaxAggregateInputType = {
    url_id?: true
    user_id?: true
    original_url?: true
    short_url?: true
    logo_id?: true
    tag_id?: true
    url_type?: true
    associated?: true
    expiration_date?: true
    status?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    is_deleted?: true
    is_pre_generated?: true
    associated_at?: true
  }

  export type UrlCountAggregateInputType = {
    url_id?: true
    user_id?: true
    original_url?: true
    short_url?: true
    logo_id?: true
    tag_id?: true
    url_type?: true
    associated?: true
    expiration_date?: true
    status?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    is_deleted?: true
    is_pre_generated?: true
    associated_at?: true
    _all?: true
  }

  export type UrlAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which url to aggregate.
     */
    where?: urlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of urls to fetch.
     */
    orderBy?: urlOrderByWithRelationInput | urlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: urlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` urls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` urls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned urls
    **/
    _count?: true | UrlCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UrlAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UrlSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UrlMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UrlMaxAggregateInputType
  }

  export type GetUrlAggregateType<T extends UrlAggregateArgs> = {
        [P in keyof T & keyof AggregateUrl]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUrl[P]>
      : GetScalarType<T[P], AggregateUrl[P]>
  }




  export type urlGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: urlWhereInput
    orderBy?: urlOrderByWithAggregationInput | urlOrderByWithAggregationInput[]
    by: UrlScalarFieldEnum[] | UrlScalarFieldEnum
    having?: urlScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UrlCountAggregateInputType | true
    _avg?: UrlAvgAggregateInputType
    _sum?: UrlSumAggregateInputType
    _min?: UrlMinAggregateInputType
    _max?: UrlMaxAggregateInputType
  }

  export type UrlGroupByOutputType = {
    url_id: string
    user_id: string | null
    original_url: string | null
    short_url: string
    logo_id: number | null
    tag_id: number | null
    url_type: string | null
    associated: boolean
    expiration_date: Date | null
    status: string
    created_at: Date
    updated_at: Date
    deleted_at: Date | null
    is_deleted: boolean
    is_pre_generated: boolean
    associated_at: Date | null
    _count: UrlCountAggregateOutputType | null
    _avg: UrlAvgAggregateOutputType | null
    _sum: UrlSumAggregateOutputType | null
    _min: UrlMinAggregateOutputType | null
    _max: UrlMaxAggregateOutputType | null
  }

  type GetUrlGroupByPayload<T extends urlGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UrlGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UrlGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UrlGroupByOutputType[P]>
            : GetScalarType<T[P], UrlGroupByOutputType[P]>
        }
      >
    >


  export type urlSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    url_id?: boolean
    user_id?: boolean
    original_url?: boolean
    short_url?: boolean
    logo_id?: boolean
    tag_id?: boolean
    url_type?: boolean
    associated?: boolean
    expiration_date?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    is_deleted?: boolean
    is_pre_generated?: boolean
    associated_at?: boolean
    audit_log?: boolean | url$audit_logArgs<ExtArgs>
    logo?: boolean | url$logoArgs<ExtArgs>
    url_tag?: boolean | url$url_tagArgs<ExtArgs>
    user?: boolean | url$userArgs<ExtArgs>
    url_click?: boolean | url$url_clickArgs<ExtArgs>
    _count?: boolean | UrlCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["url"]>

  export type urlSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    url_id?: boolean
    user_id?: boolean
    original_url?: boolean
    short_url?: boolean
    logo_id?: boolean
    tag_id?: boolean
    url_type?: boolean
    associated?: boolean
    expiration_date?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    is_deleted?: boolean
    is_pre_generated?: boolean
    associated_at?: boolean
    logo?: boolean | url$logoArgs<ExtArgs>
    url_tag?: boolean | url$url_tagArgs<ExtArgs>
    user?: boolean | url$userArgs<ExtArgs>
  }, ExtArgs["result"]["url"]>

  export type urlSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    url_id?: boolean
    user_id?: boolean
    original_url?: boolean
    short_url?: boolean
    logo_id?: boolean
    tag_id?: boolean
    url_type?: boolean
    associated?: boolean
    expiration_date?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    is_deleted?: boolean
    is_pre_generated?: boolean
    associated_at?: boolean
    logo?: boolean | url$logoArgs<ExtArgs>
    url_tag?: boolean | url$url_tagArgs<ExtArgs>
    user?: boolean | url$userArgs<ExtArgs>
  }, ExtArgs["result"]["url"]>

  export type urlSelectScalar = {
    url_id?: boolean
    user_id?: boolean
    original_url?: boolean
    short_url?: boolean
    logo_id?: boolean
    tag_id?: boolean
    url_type?: boolean
    associated?: boolean
    expiration_date?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    is_deleted?: boolean
    is_pre_generated?: boolean
    associated_at?: boolean
  }

  export type urlOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"url_id" | "user_id" | "original_url" | "short_url" | "logo_id" | "tag_id" | "url_type" | "associated" | "expiration_date" | "status" | "created_at" | "updated_at" | "deleted_at" | "is_deleted" | "is_pre_generated" | "associated_at", ExtArgs["result"]["url"]>
  export type urlInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    audit_log?: boolean | url$audit_logArgs<ExtArgs>
    logo?: boolean | url$logoArgs<ExtArgs>
    url_tag?: boolean | url$url_tagArgs<ExtArgs>
    user?: boolean | url$userArgs<ExtArgs>
    url_click?: boolean | url$url_clickArgs<ExtArgs>
    _count?: boolean | UrlCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type urlIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    logo?: boolean | url$logoArgs<ExtArgs>
    url_tag?: boolean | url$url_tagArgs<ExtArgs>
    user?: boolean | url$userArgs<ExtArgs>
  }
  export type urlIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    logo?: boolean | url$logoArgs<ExtArgs>
    url_tag?: boolean | url$url_tagArgs<ExtArgs>
    user?: boolean | url$userArgs<ExtArgs>
  }

  export type $urlPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "url"
    objects: {
      audit_log: Prisma.$audit_logPayload<ExtArgs>[]
      logo: Prisma.$logoPayload<ExtArgs> | null
      url_tag: Prisma.$url_tagPayload<ExtArgs> | null
      user: Prisma.$userPayload<ExtArgs> | null
      url_click: Prisma.$url_clickPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      url_id: string
      user_id: string | null
      original_url: string | null
      short_url: string
      logo_id: number | null
      tag_id: number | null
      url_type: string | null
      associated: boolean
      expiration_date: Date | null
      status: string
      created_at: Date
      updated_at: Date
      deleted_at: Date | null
      is_deleted: boolean
      is_pre_generated: boolean
      associated_at: Date | null
    }, ExtArgs["result"]["url"]>
    composites: {}
  }

  type urlGetPayload<S extends boolean | null | undefined | urlDefaultArgs> = $Result.GetResult<Prisma.$urlPayload, S>

  type urlCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<urlFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UrlCountAggregateInputType | true
    }

  export interface urlDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['url'], meta: { name: 'url' } }
    /**
     * Find zero or one Url that matches the filter.
     * @param {urlFindUniqueArgs} args - Arguments to find a Url
     * @example
     * // Get one Url
     * const url = await prisma.url.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends urlFindUniqueArgs>(args: SelectSubset<T, urlFindUniqueArgs<ExtArgs>>): Prisma__urlClient<$Result.GetResult<Prisma.$urlPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Url that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {urlFindUniqueOrThrowArgs} args - Arguments to find a Url
     * @example
     * // Get one Url
     * const url = await prisma.url.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends urlFindUniqueOrThrowArgs>(args: SelectSubset<T, urlFindUniqueOrThrowArgs<ExtArgs>>): Prisma__urlClient<$Result.GetResult<Prisma.$urlPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Url that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {urlFindFirstArgs} args - Arguments to find a Url
     * @example
     * // Get one Url
     * const url = await prisma.url.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends urlFindFirstArgs>(args?: SelectSubset<T, urlFindFirstArgs<ExtArgs>>): Prisma__urlClient<$Result.GetResult<Prisma.$urlPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Url that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {urlFindFirstOrThrowArgs} args - Arguments to find a Url
     * @example
     * // Get one Url
     * const url = await prisma.url.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends urlFindFirstOrThrowArgs>(args?: SelectSubset<T, urlFindFirstOrThrowArgs<ExtArgs>>): Prisma__urlClient<$Result.GetResult<Prisma.$urlPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Urls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {urlFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Urls
     * const urls = await prisma.url.findMany()
     * 
     * // Get first 10 Urls
     * const urls = await prisma.url.findMany({ take: 10 })
     * 
     * // Only select the `url_id`
     * const urlWithUrl_idOnly = await prisma.url.findMany({ select: { url_id: true } })
     * 
     */
    findMany<T extends urlFindManyArgs>(args?: SelectSubset<T, urlFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$urlPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Url.
     * @param {urlCreateArgs} args - Arguments to create a Url.
     * @example
     * // Create one Url
     * const Url = await prisma.url.create({
     *   data: {
     *     // ... data to create a Url
     *   }
     * })
     * 
     */
    create<T extends urlCreateArgs>(args: SelectSubset<T, urlCreateArgs<ExtArgs>>): Prisma__urlClient<$Result.GetResult<Prisma.$urlPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Urls.
     * @param {urlCreateManyArgs} args - Arguments to create many Urls.
     * @example
     * // Create many Urls
     * const url = await prisma.url.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends urlCreateManyArgs>(args?: SelectSubset<T, urlCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Urls and returns the data saved in the database.
     * @param {urlCreateManyAndReturnArgs} args - Arguments to create many Urls.
     * @example
     * // Create many Urls
     * const url = await prisma.url.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Urls and only return the `url_id`
     * const urlWithUrl_idOnly = await prisma.url.createManyAndReturn({
     *   select: { url_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends urlCreateManyAndReturnArgs>(args?: SelectSubset<T, urlCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$urlPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Url.
     * @param {urlDeleteArgs} args - Arguments to delete one Url.
     * @example
     * // Delete one Url
     * const Url = await prisma.url.delete({
     *   where: {
     *     // ... filter to delete one Url
     *   }
     * })
     * 
     */
    delete<T extends urlDeleteArgs>(args: SelectSubset<T, urlDeleteArgs<ExtArgs>>): Prisma__urlClient<$Result.GetResult<Prisma.$urlPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Url.
     * @param {urlUpdateArgs} args - Arguments to update one Url.
     * @example
     * // Update one Url
     * const url = await prisma.url.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends urlUpdateArgs>(args: SelectSubset<T, urlUpdateArgs<ExtArgs>>): Prisma__urlClient<$Result.GetResult<Prisma.$urlPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Urls.
     * @param {urlDeleteManyArgs} args - Arguments to filter Urls to delete.
     * @example
     * // Delete a few Urls
     * const { count } = await prisma.url.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends urlDeleteManyArgs>(args?: SelectSubset<T, urlDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Urls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {urlUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Urls
     * const url = await prisma.url.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends urlUpdateManyArgs>(args: SelectSubset<T, urlUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Urls and returns the data updated in the database.
     * @param {urlUpdateManyAndReturnArgs} args - Arguments to update many Urls.
     * @example
     * // Update many Urls
     * const url = await prisma.url.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Urls and only return the `url_id`
     * const urlWithUrl_idOnly = await prisma.url.updateManyAndReturn({
     *   select: { url_id: true },
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
    updateManyAndReturn<T extends urlUpdateManyAndReturnArgs>(args: SelectSubset<T, urlUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$urlPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Url.
     * @param {urlUpsertArgs} args - Arguments to update or create a Url.
     * @example
     * // Update or create a Url
     * const url = await prisma.url.upsert({
     *   create: {
     *     // ... data to create a Url
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Url we want to update
     *   }
     * })
     */
    upsert<T extends urlUpsertArgs>(args: SelectSubset<T, urlUpsertArgs<ExtArgs>>): Prisma__urlClient<$Result.GetResult<Prisma.$urlPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Urls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {urlCountArgs} args - Arguments to filter Urls to count.
     * @example
     * // Count the number of Urls
     * const count = await prisma.url.count({
     *   where: {
     *     // ... the filter for the Urls we want to count
     *   }
     * })
    **/
    count<T extends urlCountArgs>(
      args?: Subset<T, urlCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UrlCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Url.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UrlAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UrlAggregateArgs>(args: Subset<T, UrlAggregateArgs>): Prisma.PrismaPromise<GetUrlAggregateType<T>>

    /**
     * Group by Url.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {urlGroupByArgs} args - Group by arguments.
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
      T extends urlGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: urlGroupByArgs['orderBy'] }
        : { orderBy?: urlGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, urlGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUrlGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the url model
   */
  readonly fields: urlFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for url.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__urlClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    audit_log<T extends url$audit_logArgs<ExtArgs> = {}>(args?: Subset<T, url$audit_logArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$audit_logPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    logo<T extends url$logoArgs<ExtArgs> = {}>(args?: Subset<T, url$logoArgs<ExtArgs>>): Prisma__logoClient<$Result.GetResult<Prisma.$logoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    url_tag<T extends url$url_tagArgs<ExtArgs> = {}>(args?: Subset<T, url$url_tagArgs<ExtArgs>>): Prisma__url_tagClient<$Result.GetResult<Prisma.$url_tagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user<T extends url$userArgs<ExtArgs> = {}>(args?: Subset<T, url$userArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    url_click<T extends url$url_clickArgs<ExtArgs> = {}>(args?: Subset<T, url$url_clickArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$url_clickPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the url model
   */
  interface urlFieldRefs {
    readonly url_id: FieldRef<"url", 'String'>
    readonly user_id: FieldRef<"url", 'String'>
    readonly original_url: FieldRef<"url", 'String'>
    readonly short_url: FieldRef<"url", 'String'>
    readonly logo_id: FieldRef<"url", 'Int'>
    readonly tag_id: FieldRef<"url", 'Int'>
    readonly url_type: FieldRef<"url", 'String'>
    readonly associated: FieldRef<"url", 'Boolean'>
    readonly expiration_date: FieldRef<"url", 'DateTime'>
    readonly status: FieldRef<"url", 'String'>
    readonly created_at: FieldRef<"url", 'DateTime'>
    readonly updated_at: FieldRef<"url", 'DateTime'>
    readonly deleted_at: FieldRef<"url", 'DateTime'>
    readonly is_deleted: FieldRef<"url", 'Boolean'>
    readonly is_pre_generated: FieldRef<"url", 'Boolean'>
    readonly associated_at: FieldRef<"url", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * url findUnique
   */
  export type urlFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the url
     */
    select?: urlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the url
     */
    omit?: urlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: urlInclude<ExtArgs> | null
    /**
     * Filter, which url to fetch.
     */
    where: urlWhereUniqueInput
  }

  /**
   * url findUniqueOrThrow
   */
  export type urlFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the url
     */
    select?: urlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the url
     */
    omit?: urlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: urlInclude<ExtArgs> | null
    /**
     * Filter, which url to fetch.
     */
    where: urlWhereUniqueInput
  }

  /**
   * url findFirst
   */
  export type urlFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the url
     */
    select?: urlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the url
     */
    omit?: urlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: urlInclude<ExtArgs> | null
    /**
     * Filter, which url to fetch.
     */
    where?: urlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of urls to fetch.
     */
    orderBy?: urlOrderByWithRelationInput | urlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for urls.
     */
    cursor?: urlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` urls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` urls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of urls.
     */
    distinct?: UrlScalarFieldEnum | UrlScalarFieldEnum[]
  }

  /**
   * url findFirstOrThrow
   */
  export type urlFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the url
     */
    select?: urlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the url
     */
    omit?: urlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: urlInclude<ExtArgs> | null
    /**
     * Filter, which url to fetch.
     */
    where?: urlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of urls to fetch.
     */
    orderBy?: urlOrderByWithRelationInput | urlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for urls.
     */
    cursor?: urlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` urls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` urls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of urls.
     */
    distinct?: UrlScalarFieldEnum | UrlScalarFieldEnum[]
  }

  /**
   * url findMany
   */
  export type urlFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the url
     */
    select?: urlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the url
     */
    omit?: urlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: urlInclude<ExtArgs> | null
    /**
     * Filter, which urls to fetch.
     */
    where?: urlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of urls to fetch.
     */
    orderBy?: urlOrderByWithRelationInput | urlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing urls.
     */
    cursor?: urlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` urls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` urls.
     */
    skip?: number
    distinct?: UrlScalarFieldEnum | UrlScalarFieldEnum[]
  }

  /**
   * url create
   */
  export type urlCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the url
     */
    select?: urlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the url
     */
    omit?: urlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: urlInclude<ExtArgs> | null
    /**
     * The data needed to create a url.
     */
    data: XOR<urlCreateInput, urlUncheckedCreateInput>
  }

  /**
   * url createMany
   */
  export type urlCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many urls.
     */
    data: urlCreateManyInput | urlCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * url createManyAndReturn
   */
  export type urlCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the url
     */
    select?: urlSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the url
     */
    omit?: urlOmit<ExtArgs> | null
    /**
     * The data used to create many urls.
     */
    data: urlCreateManyInput | urlCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: urlIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * url update
   */
  export type urlUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the url
     */
    select?: urlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the url
     */
    omit?: urlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: urlInclude<ExtArgs> | null
    /**
     * The data needed to update a url.
     */
    data: XOR<urlUpdateInput, urlUncheckedUpdateInput>
    /**
     * Choose, which url to update.
     */
    where: urlWhereUniqueInput
  }

  /**
   * url updateMany
   */
  export type urlUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update urls.
     */
    data: XOR<urlUpdateManyMutationInput, urlUncheckedUpdateManyInput>
    /**
     * Filter which urls to update
     */
    where?: urlWhereInput
    /**
     * Limit how many urls to update.
     */
    limit?: number
  }

  /**
   * url updateManyAndReturn
   */
  export type urlUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the url
     */
    select?: urlSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the url
     */
    omit?: urlOmit<ExtArgs> | null
    /**
     * The data used to update urls.
     */
    data: XOR<urlUpdateManyMutationInput, urlUncheckedUpdateManyInput>
    /**
     * Filter which urls to update
     */
    where?: urlWhereInput
    /**
     * Limit how many urls to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: urlIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * url upsert
   */
  export type urlUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the url
     */
    select?: urlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the url
     */
    omit?: urlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: urlInclude<ExtArgs> | null
    /**
     * The filter to search for the url to update in case it exists.
     */
    where: urlWhereUniqueInput
    /**
     * In case the url found by the `where` argument doesn't exist, create a new url with this data.
     */
    create: XOR<urlCreateInput, urlUncheckedCreateInput>
    /**
     * In case the url was found with the provided `where` argument, update it with this data.
     */
    update: XOR<urlUpdateInput, urlUncheckedUpdateInput>
  }

  /**
   * url delete
   */
  export type urlDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the url
     */
    select?: urlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the url
     */
    omit?: urlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: urlInclude<ExtArgs> | null
    /**
     * Filter which url to delete.
     */
    where: urlWhereUniqueInput
  }

  /**
   * url deleteMany
   */
  export type urlDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which urls to delete
     */
    where?: urlWhereInput
    /**
     * Limit how many urls to delete.
     */
    limit?: number
  }

  /**
   * url.audit_log
   */
  export type url$audit_logArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_log
     */
    select?: audit_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit_log
     */
    omit?: audit_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: audit_logInclude<ExtArgs> | null
    where?: audit_logWhereInput
    orderBy?: audit_logOrderByWithRelationInput | audit_logOrderByWithRelationInput[]
    cursor?: audit_logWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Audit_logScalarFieldEnum | Audit_logScalarFieldEnum[]
  }

  /**
   * url.logo
   */
  export type url$logoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logo
     */
    select?: logoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logo
     */
    omit?: logoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logoInclude<ExtArgs> | null
    where?: logoWhereInput
  }

  /**
   * url.url_tag
   */
  export type url$url_tagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the url_tag
     */
    select?: url_tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the url_tag
     */
    omit?: url_tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: url_tagInclude<ExtArgs> | null
    where?: url_tagWhereInput
  }

  /**
   * url.user
   */
  export type url$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    where?: userWhereInput
  }

  /**
   * url.url_click
   */
  export type url$url_clickArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the url_click
     */
    select?: url_clickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the url_click
     */
    omit?: url_clickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: url_clickInclude<ExtArgs> | null
    where?: url_clickWhereInput
    orderBy?: url_clickOrderByWithRelationInput | url_clickOrderByWithRelationInput[]
    cursor?: url_clickWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Url_clickScalarFieldEnum | Url_clickScalarFieldEnum[]
  }

  /**
   * url without action
   */
  export type urlDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the url
     */
    select?: urlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the url
     */
    omit?: urlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: urlInclude<ExtArgs> | null
  }


  /**
   * Model url_click
   */

  export type AggregateUrl_click = {
    _count: Url_clickCountAggregateOutputType | null
    _avg: Url_clickAvgAggregateOutputType | null
    _sum: Url_clickSumAggregateOutputType | null
    _min: Url_clickMinAggregateOutputType | null
    _max: Url_clickMaxAggregateOutputType | null
  }

  export type Url_clickAvgAggregateOutputType = {
    click_id: number | null
  }

  export type Url_clickSumAggregateOutputType = {
    click_id: number | null
  }

  export type Url_clickMinAggregateOutputType = {
    click_id: number | null
    url_id: string | null
    access_date: Date | null
    access_time: Date | null
    ip_address: string | null
    user_agent: string | null
    referrer: string | null
    country: string | null
    city: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    is_deleted: boolean | null
  }

  export type Url_clickMaxAggregateOutputType = {
    click_id: number | null
    url_id: string | null
    access_date: Date | null
    access_time: Date | null
    ip_address: string | null
    user_agent: string | null
    referrer: string | null
    country: string | null
    city: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    is_deleted: boolean | null
  }

  export type Url_clickCountAggregateOutputType = {
    click_id: number
    url_id: number
    access_date: number
    access_time: number
    ip_address: number
    user_agent: number
    referrer: number
    country: number
    city: number
    created_at: number
    updated_at: number
    deleted_at: number
    is_deleted: number
    _all: number
  }


  export type Url_clickAvgAggregateInputType = {
    click_id?: true
  }

  export type Url_clickSumAggregateInputType = {
    click_id?: true
  }

  export type Url_clickMinAggregateInputType = {
    click_id?: true
    url_id?: true
    access_date?: true
    access_time?: true
    ip_address?: true
    user_agent?: true
    referrer?: true
    country?: true
    city?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    is_deleted?: true
  }

  export type Url_clickMaxAggregateInputType = {
    click_id?: true
    url_id?: true
    access_date?: true
    access_time?: true
    ip_address?: true
    user_agent?: true
    referrer?: true
    country?: true
    city?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    is_deleted?: true
  }

  export type Url_clickCountAggregateInputType = {
    click_id?: true
    url_id?: true
    access_date?: true
    access_time?: true
    ip_address?: true
    user_agent?: true
    referrer?: true
    country?: true
    city?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    is_deleted?: true
    _all?: true
  }

  export type Url_clickAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which url_click to aggregate.
     */
    where?: url_clickWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of url_clicks to fetch.
     */
    orderBy?: url_clickOrderByWithRelationInput | url_clickOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: url_clickWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` url_clicks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` url_clicks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned url_clicks
    **/
    _count?: true | Url_clickCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Url_clickAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Url_clickSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Url_clickMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Url_clickMaxAggregateInputType
  }

  export type GetUrl_clickAggregateType<T extends Url_clickAggregateArgs> = {
        [P in keyof T & keyof AggregateUrl_click]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUrl_click[P]>
      : GetScalarType<T[P], AggregateUrl_click[P]>
  }




  export type url_clickGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: url_clickWhereInput
    orderBy?: url_clickOrderByWithAggregationInput | url_clickOrderByWithAggregationInput[]
    by: Url_clickScalarFieldEnum[] | Url_clickScalarFieldEnum
    having?: url_clickScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Url_clickCountAggregateInputType | true
    _avg?: Url_clickAvgAggregateInputType
    _sum?: Url_clickSumAggregateInputType
    _min?: Url_clickMinAggregateInputType
    _max?: Url_clickMaxAggregateInputType
  }

  export type Url_clickGroupByOutputType = {
    click_id: number
    url_id: string
    access_date: Date
    access_time: Date
    ip_address: string
    user_agent: string
    referrer: string | null
    country: string | null
    city: string | null
    created_at: Date
    updated_at: Date
    deleted_at: Date | null
    is_deleted: boolean
    _count: Url_clickCountAggregateOutputType | null
    _avg: Url_clickAvgAggregateOutputType | null
    _sum: Url_clickSumAggregateOutputType | null
    _min: Url_clickMinAggregateOutputType | null
    _max: Url_clickMaxAggregateOutputType | null
  }

  type GetUrl_clickGroupByPayload<T extends url_clickGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Url_clickGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Url_clickGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Url_clickGroupByOutputType[P]>
            : GetScalarType<T[P], Url_clickGroupByOutputType[P]>
        }
      >
    >


  export type url_clickSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    click_id?: boolean
    url_id?: boolean
    access_date?: boolean
    access_time?: boolean
    ip_address?: boolean
    user_agent?: boolean
    referrer?: boolean
    country?: boolean
    city?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    is_deleted?: boolean
    url?: boolean | urlDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["url_click"]>

  export type url_clickSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    click_id?: boolean
    url_id?: boolean
    access_date?: boolean
    access_time?: boolean
    ip_address?: boolean
    user_agent?: boolean
    referrer?: boolean
    country?: boolean
    city?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    is_deleted?: boolean
    url?: boolean | urlDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["url_click"]>

  export type url_clickSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    click_id?: boolean
    url_id?: boolean
    access_date?: boolean
    access_time?: boolean
    ip_address?: boolean
    user_agent?: boolean
    referrer?: boolean
    country?: boolean
    city?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    is_deleted?: boolean
    url?: boolean | urlDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["url_click"]>

  export type url_clickSelectScalar = {
    click_id?: boolean
    url_id?: boolean
    access_date?: boolean
    access_time?: boolean
    ip_address?: boolean
    user_agent?: boolean
    referrer?: boolean
    country?: boolean
    city?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    is_deleted?: boolean
  }

  export type url_clickOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"click_id" | "url_id" | "access_date" | "access_time" | "ip_address" | "user_agent" | "referrer" | "country" | "city" | "created_at" | "updated_at" | "deleted_at" | "is_deleted", ExtArgs["result"]["url_click"]>
  export type url_clickInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    url?: boolean | urlDefaultArgs<ExtArgs>
  }
  export type url_clickIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    url?: boolean | urlDefaultArgs<ExtArgs>
  }
  export type url_clickIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    url?: boolean | urlDefaultArgs<ExtArgs>
  }

  export type $url_clickPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "url_click"
    objects: {
      url: Prisma.$urlPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      click_id: number
      url_id: string
      access_date: Date
      access_time: Date
      ip_address: string
      user_agent: string
      referrer: string | null
      country: string | null
      city: string | null
      created_at: Date
      updated_at: Date
      deleted_at: Date | null
      is_deleted: boolean
    }, ExtArgs["result"]["url_click"]>
    composites: {}
  }

  type url_clickGetPayload<S extends boolean | null | undefined | url_clickDefaultArgs> = $Result.GetResult<Prisma.$url_clickPayload, S>

  type url_clickCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<url_clickFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Url_clickCountAggregateInputType | true
    }

  export interface url_clickDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['url_click'], meta: { name: 'url_click' } }
    /**
     * Find zero or one Url_click that matches the filter.
     * @param {url_clickFindUniqueArgs} args - Arguments to find a Url_click
     * @example
     * // Get one Url_click
     * const url_click = await prisma.url_click.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends url_clickFindUniqueArgs>(args: SelectSubset<T, url_clickFindUniqueArgs<ExtArgs>>): Prisma__url_clickClient<$Result.GetResult<Prisma.$url_clickPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Url_click that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {url_clickFindUniqueOrThrowArgs} args - Arguments to find a Url_click
     * @example
     * // Get one Url_click
     * const url_click = await prisma.url_click.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends url_clickFindUniqueOrThrowArgs>(args: SelectSubset<T, url_clickFindUniqueOrThrowArgs<ExtArgs>>): Prisma__url_clickClient<$Result.GetResult<Prisma.$url_clickPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Url_click that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {url_clickFindFirstArgs} args - Arguments to find a Url_click
     * @example
     * // Get one Url_click
     * const url_click = await prisma.url_click.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends url_clickFindFirstArgs>(args?: SelectSubset<T, url_clickFindFirstArgs<ExtArgs>>): Prisma__url_clickClient<$Result.GetResult<Prisma.$url_clickPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Url_click that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {url_clickFindFirstOrThrowArgs} args - Arguments to find a Url_click
     * @example
     * // Get one Url_click
     * const url_click = await prisma.url_click.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends url_clickFindFirstOrThrowArgs>(args?: SelectSubset<T, url_clickFindFirstOrThrowArgs<ExtArgs>>): Prisma__url_clickClient<$Result.GetResult<Prisma.$url_clickPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Url_clicks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {url_clickFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Url_clicks
     * const url_clicks = await prisma.url_click.findMany()
     * 
     * // Get first 10 Url_clicks
     * const url_clicks = await prisma.url_click.findMany({ take: 10 })
     * 
     * // Only select the `click_id`
     * const url_clickWithClick_idOnly = await prisma.url_click.findMany({ select: { click_id: true } })
     * 
     */
    findMany<T extends url_clickFindManyArgs>(args?: SelectSubset<T, url_clickFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$url_clickPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Url_click.
     * @param {url_clickCreateArgs} args - Arguments to create a Url_click.
     * @example
     * // Create one Url_click
     * const Url_click = await prisma.url_click.create({
     *   data: {
     *     // ... data to create a Url_click
     *   }
     * })
     * 
     */
    create<T extends url_clickCreateArgs>(args: SelectSubset<T, url_clickCreateArgs<ExtArgs>>): Prisma__url_clickClient<$Result.GetResult<Prisma.$url_clickPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Url_clicks.
     * @param {url_clickCreateManyArgs} args - Arguments to create many Url_clicks.
     * @example
     * // Create many Url_clicks
     * const url_click = await prisma.url_click.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends url_clickCreateManyArgs>(args?: SelectSubset<T, url_clickCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Url_clicks and returns the data saved in the database.
     * @param {url_clickCreateManyAndReturnArgs} args - Arguments to create many Url_clicks.
     * @example
     * // Create many Url_clicks
     * const url_click = await prisma.url_click.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Url_clicks and only return the `click_id`
     * const url_clickWithClick_idOnly = await prisma.url_click.createManyAndReturn({
     *   select: { click_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends url_clickCreateManyAndReturnArgs>(args?: SelectSubset<T, url_clickCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$url_clickPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Url_click.
     * @param {url_clickDeleteArgs} args - Arguments to delete one Url_click.
     * @example
     * // Delete one Url_click
     * const Url_click = await prisma.url_click.delete({
     *   where: {
     *     // ... filter to delete one Url_click
     *   }
     * })
     * 
     */
    delete<T extends url_clickDeleteArgs>(args: SelectSubset<T, url_clickDeleteArgs<ExtArgs>>): Prisma__url_clickClient<$Result.GetResult<Prisma.$url_clickPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Url_click.
     * @param {url_clickUpdateArgs} args - Arguments to update one Url_click.
     * @example
     * // Update one Url_click
     * const url_click = await prisma.url_click.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends url_clickUpdateArgs>(args: SelectSubset<T, url_clickUpdateArgs<ExtArgs>>): Prisma__url_clickClient<$Result.GetResult<Prisma.$url_clickPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Url_clicks.
     * @param {url_clickDeleteManyArgs} args - Arguments to filter Url_clicks to delete.
     * @example
     * // Delete a few Url_clicks
     * const { count } = await prisma.url_click.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends url_clickDeleteManyArgs>(args?: SelectSubset<T, url_clickDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Url_clicks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {url_clickUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Url_clicks
     * const url_click = await prisma.url_click.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends url_clickUpdateManyArgs>(args: SelectSubset<T, url_clickUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Url_clicks and returns the data updated in the database.
     * @param {url_clickUpdateManyAndReturnArgs} args - Arguments to update many Url_clicks.
     * @example
     * // Update many Url_clicks
     * const url_click = await prisma.url_click.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Url_clicks and only return the `click_id`
     * const url_clickWithClick_idOnly = await prisma.url_click.updateManyAndReturn({
     *   select: { click_id: true },
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
    updateManyAndReturn<T extends url_clickUpdateManyAndReturnArgs>(args: SelectSubset<T, url_clickUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$url_clickPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Url_click.
     * @param {url_clickUpsertArgs} args - Arguments to update or create a Url_click.
     * @example
     * // Update or create a Url_click
     * const url_click = await prisma.url_click.upsert({
     *   create: {
     *     // ... data to create a Url_click
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Url_click we want to update
     *   }
     * })
     */
    upsert<T extends url_clickUpsertArgs>(args: SelectSubset<T, url_clickUpsertArgs<ExtArgs>>): Prisma__url_clickClient<$Result.GetResult<Prisma.$url_clickPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Url_clicks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {url_clickCountArgs} args - Arguments to filter Url_clicks to count.
     * @example
     * // Count the number of Url_clicks
     * const count = await prisma.url_click.count({
     *   where: {
     *     // ... the filter for the Url_clicks we want to count
     *   }
     * })
    **/
    count<T extends url_clickCountArgs>(
      args?: Subset<T, url_clickCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Url_clickCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Url_click.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Url_clickAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Url_clickAggregateArgs>(args: Subset<T, Url_clickAggregateArgs>): Prisma.PrismaPromise<GetUrl_clickAggregateType<T>>

    /**
     * Group by Url_click.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {url_clickGroupByArgs} args - Group by arguments.
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
      T extends url_clickGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: url_clickGroupByArgs['orderBy'] }
        : { orderBy?: url_clickGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, url_clickGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUrl_clickGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the url_click model
   */
  readonly fields: url_clickFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for url_click.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__url_clickClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    url<T extends urlDefaultArgs<ExtArgs> = {}>(args?: Subset<T, urlDefaultArgs<ExtArgs>>): Prisma__urlClient<$Result.GetResult<Prisma.$urlPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the url_click model
   */
  interface url_clickFieldRefs {
    readonly click_id: FieldRef<"url_click", 'Int'>
    readonly url_id: FieldRef<"url_click", 'String'>
    readonly access_date: FieldRef<"url_click", 'DateTime'>
    readonly access_time: FieldRef<"url_click", 'DateTime'>
    readonly ip_address: FieldRef<"url_click", 'String'>
    readonly user_agent: FieldRef<"url_click", 'String'>
    readonly referrer: FieldRef<"url_click", 'String'>
    readonly country: FieldRef<"url_click", 'String'>
    readonly city: FieldRef<"url_click", 'String'>
    readonly created_at: FieldRef<"url_click", 'DateTime'>
    readonly updated_at: FieldRef<"url_click", 'DateTime'>
    readonly deleted_at: FieldRef<"url_click", 'DateTime'>
    readonly is_deleted: FieldRef<"url_click", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * url_click findUnique
   */
  export type url_clickFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the url_click
     */
    select?: url_clickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the url_click
     */
    omit?: url_clickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: url_clickInclude<ExtArgs> | null
    /**
     * Filter, which url_click to fetch.
     */
    where: url_clickWhereUniqueInput
  }

  /**
   * url_click findUniqueOrThrow
   */
  export type url_clickFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the url_click
     */
    select?: url_clickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the url_click
     */
    omit?: url_clickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: url_clickInclude<ExtArgs> | null
    /**
     * Filter, which url_click to fetch.
     */
    where: url_clickWhereUniqueInput
  }

  /**
   * url_click findFirst
   */
  export type url_clickFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the url_click
     */
    select?: url_clickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the url_click
     */
    omit?: url_clickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: url_clickInclude<ExtArgs> | null
    /**
     * Filter, which url_click to fetch.
     */
    where?: url_clickWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of url_clicks to fetch.
     */
    orderBy?: url_clickOrderByWithRelationInput | url_clickOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for url_clicks.
     */
    cursor?: url_clickWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` url_clicks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` url_clicks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of url_clicks.
     */
    distinct?: Url_clickScalarFieldEnum | Url_clickScalarFieldEnum[]
  }

  /**
   * url_click findFirstOrThrow
   */
  export type url_clickFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the url_click
     */
    select?: url_clickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the url_click
     */
    omit?: url_clickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: url_clickInclude<ExtArgs> | null
    /**
     * Filter, which url_click to fetch.
     */
    where?: url_clickWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of url_clicks to fetch.
     */
    orderBy?: url_clickOrderByWithRelationInput | url_clickOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for url_clicks.
     */
    cursor?: url_clickWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` url_clicks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` url_clicks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of url_clicks.
     */
    distinct?: Url_clickScalarFieldEnum | Url_clickScalarFieldEnum[]
  }

  /**
   * url_click findMany
   */
  export type url_clickFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the url_click
     */
    select?: url_clickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the url_click
     */
    omit?: url_clickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: url_clickInclude<ExtArgs> | null
    /**
     * Filter, which url_clicks to fetch.
     */
    where?: url_clickWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of url_clicks to fetch.
     */
    orderBy?: url_clickOrderByWithRelationInput | url_clickOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing url_clicks.
     */
    cursor?: url_clickWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` url_clicks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` url_clicks.
     */
    skip?: number
    distinct?: Url_clickScalarFieldEnum | Url_clickScalarFieldEnum[]
  }

  /**
   * url_click create
   */
  export type url_clickCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the url_click
     */
    select?: url_clickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the url_click
     */
    omit?: url_clickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: url_clickInclude<ExtArgs> | null
    /**
     * The data needed to create a url_click.
     */
    data: XOR<url_clickCreateInput, url_clickUncheckedCreateInput>
  }

  /**
   * url_click createMany
   */
  export type url_clickCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many url_clicks.
     */
    data: url_clickCreateManyInput | url_clickCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * url_click createManyAndReturn
   */
  export type url_clickCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the url_click
     */
    select?: url_clickSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the url_click
     */
    omit?: url_clickOmit<ExtArgs> | null
    /**
     * The data used to create many url_clicks.
     */
    data: url_clickCreateManyInput | url_clickCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: url_clickIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * url_click update
   */
  export type url_clickUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the url_click
     */
    select?: url_clickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the url_click
     */
    omit?: url_clickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: url_clickInclude<ExtArgs> | null
    /**
     * The data needed to update a url_click.
     */
    data: XOR<url_clickUpdateInput, url_clickUncheckedUpdateInput>
    /**
     * Choose, which url_click to update.
     */
    where: url_clickWhereUniqueInput
  }

  /**
   * url_click updateMany
   */
  export type url_clickUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update url_clicks.
     */
    data: XOR<url_clickUpdateManyMutationInput, url_clickUncheckedUpdateManyInput>
    /**
     * Filter which url_clicks to update
     */
    where?: url_clickWhereInput
    /**
     * Limit how many url_clicks to update.
     */
    limit?: number
  }

  /**
   * url_click updateManyAndReturn
   */
  export type url_clickUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the url_click
     */
    select?: url_clickSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the url_click
     */
    omit?: url_clickOmit<ExtArgs> | null
    /**
     * The data used to update url_clicks.
     */
    data: XOR<url_clickUpdateManyMutationInput, url_clickUncheckedUpdateManyInput>
    /**
     * Filter which url_clicks to update
     */
    where?: url_clickWhereInput
    /**
     * Limit how many url_clicks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: url_clickIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * url_click upsert
   */
  export type url_clickUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the url_click
     */
    select?: url_clickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the url_click
     */
    omit?: url_clickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: url_clickInclude<ExtArgs> | null
    /**
     * The filter to search for the url_click to update in case it exists.
     */
    where: url_clickWhereUniqueInput
    /**
     * In case the url_click found by the `where` argument doesn't exist, create a new url_click with this data.
     */
    create: XOR<url_clickCreateInput, url_clickUncheckedCreateInput>
    /**
     * In case the url_click was found with the provided `where` argument, update it with this data.
     */
    update: XOR<url_clickUpdateInput, url_clickUncheckedUpdateInput>
  }

  /**
   * url_click delete
   */
  export type url_clickDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the url_click
     */
    select?: url_clickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the url_click
     */
    omit?: url_clickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: url_clickInclude<ExtArgs> | null
    /**
     * Filter which url_click to delete.
     */
    where: url_clickWhereUniqueInput
  }

  /**
   * url_click deleteMany
   */
  export type url_clickDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which url_clicks to delete
     */
    where?: url_clickWhereInput
    /**
     * Limit how many url_clicks to delete.
     */
    limit?: number
  }

  /**
   * url_click without action
   */
  export type url_clickDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the url_click
     */
    select?: url_clickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the url_click
     */
    omit?: url_clickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: url_clickInclude<ExtArgs> | null
  }


  /**
   * Model url_tag
   */

  export type AggregateUrl_tag = {
    _count: Url_tagCountAggregateOutputType | null
    _avg: Url_tagAvgAggregateOutputType | null
    _sum: Url_tagSumAggregateOutputType | null
    _min: Url_tagMinAggregateOutputType | null
    _max: Url_tagMaxAggregateOutputType | null
  }

  export type Url_tagAvgAggregateOutputType = {
    tag_id: number | null
  }

  export type Url_tagSumAggregateOutputType = {
    tag_id: number | null
  }

  export type Url_tagMinAggregateOutputType = {
    tag_id: number | null
    user_id: string | null
    tag_name: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    is_deleted: boolean | null
  }

  export type Url_tagMaxAggregateOutputType = {
    tag_id: number | null
    user_id: string | null
    tag_name: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    is_deleted: boolean | null
  }

  export type Url_tagCountAggregateOutputType = {
    tag_id: number
    user_id: number
    tag_name: number
    created_at: number
    updated_at: number
    deleted_at: number
    is_deleted: number
    _all: number
  }


  export type Url_tagAvgAggregateInputType = {
    tag_id?: true
  }

  export type Url_tagSumAggregateInputType = {
    tag_id?: true
  }

  export type Url_tagMinAggregateInputType = {
    tag_id?: true
    user_id?: true
    tag_name?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    is_deleted?: true
  }

  export type Url_tagMaxAggregateInputType = {
    tag_id?: true
    user_id?: true
    tag_name?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    is_deleted?: true
  }

  export type Url_tagCountAggregateInputType = {
    tag_id?: true
    user_id?: true
    tag_name?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    is_deleted?: true
    _all?: true
  }

  export type Url_tagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which url_tag to aggregate.
     */
    where?: url_tagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of url_tags to fetch.
     */
    orderBy?: url_tagOrderByWithRelationInput | url_tagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: url_tagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` url_tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` url_tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned url_tags
    **/
    _count?: true | Url_tagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Url_tagAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Url_tagSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Url_tagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Url_tagMaxAggregateInputType
  }

  export type GetUrl_tagAggregateType<T extends Url_tagAggregateArgs> = {
        [P in keyof T & keyof AggregateUrl_tag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUrl_tag[P]>
      : GetScalarType<T[P], AggregateUrl_tag[P]>
  }




  export type url_tagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: url_tagWhereInput
    orderBy?: url_tagOrderByWithAggregationInput | url_tagOrderByWithAggregationInput[]
    by: Url_tagScalarFieldEnum[] | Url_tagScalarFieldEnum
    having?: url_tagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Url_tagCountAggregateInputType | true
    _avg?: Url_tagAvgAggregateInputType
    _sum?: Url_tagSumAggregateInputType
    _min?: Url_tagMinAggregateInputType
    _max?: Url_tagMaxAggregateInputType
  }

  export type Url_tagGroupByOutputType = {
    tag_id: number
    user_id: string
    tag_name: string
    created_at: Date
    updated_at: Date
    deleted_at: Date | null
    is_deleted: boolean
    _count: Url_tagCountAggregateOutputType | null
    _avg: Url_tagAvgAggregateOutputType | null
    _sum: Url_tagSumAggregateOutputType | null
    _min: Url_tagMinAggregateOutputType | null
    _max: Url_tagMaxAggregateOutputType | null
  }

  type GetUrl_tagGroupByPayload<T extends url_tagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Url_tagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Url_tagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Url_tagGroupByOutputType[P]>
            : GetScalarType<T[P], Url_tagGroupByOutputType[P]>
        }
      >
    >


  export type url_tagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tag_id?: boolean
    user_id?: boolean
    tag_name?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    is_deleted?: boolean
    url?: boolean | url_tag$urlArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
    _count?: boolean | Url_tagCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["url_tag"]>

  export type url_tagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tag_id?: boolean
    user_id?: boolean
    tag_name?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    is_deleted?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["url_tag"]>

  export type url_tagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tag_id?: boolean
    user_id?: boolean
    tag_name?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    is_deleted?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["url_tag"]>

  export type url_tagSelectScalar = {
    tag_id?: boolean
    user_id?: boolean
    tag_name?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    is_deleted?: boolean
  }

  export type url_tagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"tag_id" | "user_id" | "tag_name" | "created_at" | "updated_at" | "deleted_at" | "is_deleted", ExtArgs["result"]["url_tag"]>
  export type url_tagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    url?: boolean | url_tag$urlArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
    _count?: boolean | Url_tagCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type url_tagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type url_tagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $url_tagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "url_tag"
    objects: {
      url: Prisma.$urlPayload<ExtArgs>[]
      user: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      tag_id: number
      user_id: string
      tag_name: string
      created_at: Date
      updated_at: Date
      deleted_at: Date | null
      is_deleted: boolean
    }, ExtArgs["result"]["url_tag"]>
    composites: {}
  }

  type url_tagGetPayload<S extends boolean | null | undefined | url_tagDefaultArgs> = $Result.GetResult<Prisma.$url_tagPayload, S>

  type url_tagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<url_tagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Url_tagCountAggregateInputType | true
    }

  export interface url_tagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['url_tag'], meta: { name: 'url_tag' } }
    /**
     * Find zero or one Url_tag that matches the filter.
     * @param {url_tagFindUniqueArgs} args - Arguments to find a Url_tag
     * @example
     * // Get one Url_tag
     * const url_tag = await prisma.url_tag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends url_tagFindUniqueArgs>(args: SelectSubset<T, url_tagFindUniqueArgs<ExtArgs>>): Prisma__url_tagClient<$Result.GetResult<Prisma.$url_tagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Url_tag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {url_tagFindUniqueOrThrowArgs} args - Arguments to find a Url_tag
     * @example
     * // Get one Url_tag
     * const url_tag = await prisma.url_tag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends url_tagFindUniqueOrThrowArgs>(args: SelectSubset<T, url_tagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__url_tagClient<$Result.GetResult<Prisma.$url_tagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Url_tag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {url_tagFindFirstArgs} args - Arguments to find a Url_tag
     * @example
     * // Get one Url_tag
     * const url_tag = await prisma.url_tag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends url_tagFindFirstArgs>(args?: SelectSubset<T, url_tagFindFirstArgs<ExtArgs>>): Prisma__url_tagClient<$Result.GetResult<Prisma.$url_tagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Url_tag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {url_tagFindFirstOrThrowArgs} args - Arguments to find a Url_tag
     * @example
     * // Get one Url_tag
     * const url_tag = await prisma.url_tag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends url_tagFindFirstOrThrowArgs>(args?: SelectSubset<T, url_tagFindFirstOrThrowArgs<ExtArgs>>): Prisma__url_tagClient<$Result.GetResult<Prisma.$url_tagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Url_tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {url_tagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Url_tags
     * const url_tags = await prisma.url_tag.findMany()
     * 
     * // Get first 10 Url_tags
     * const url_tags = await prisma.url_tag.findMany({ take: 10 })
     * 
     * // Only select the `tag_id`
     * const url_tagWithTag_idOnly = await prisma.url_tag.findMany({ select: { tag_id: true } })
     * 
     */
    findMany<T extends url_tagFindManyArgs>(args?: SelectSubset<T, url_tagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$url_tagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Url_tag.
     * @param {url_tagCreateArgs} args - Arguments to create a Url_tag.
     * @example
     * // Create one Url_tag
     * const Url_tag = await prisma.url_tag.create({
     *   data: {
     *     // ... data to create a Url_tag
     *   }
     * })
     * 
     */
    create<T extends url_tagCreateArgs>(args: SelectSubset<T, url_tagCreateArgs<ExtArgs>>): Prisma__url_tagClient<$Result.GetResult<Prisma.$url_tagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Url_tags.
     * @param {url_tagCreateManyArgs} args - Arguments to create many Url_tags.
     * @example
     * // Create many Url_tags
     * const url_tag = await prisma.url_tag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends url_tagCreateManyArgs>(args?: SelectSubset<T, url_tagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Url_tags and returns the data saved in the database.
     * @param {url_tagCreateManyAndReturnArgs} args - Arguments to create many Url_tags.
     * @example
     * // Create many Url_tags
     * const url_tag = await prisma.url_tag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Url_tags and only return the `tag_id`
     * const url_tagWithTag_idOnly = await prisma.url_tag.createManyAndReturn({
     *   select: { tag_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends url_tagCreateManyAndReturnArgs>(args?: SelectSubset<T, url_tagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$url_tagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Url_tag.
     * @param {url_tagDeleteArgs} args - Arguments to delete one Url_tag.
     * @example
     * // Delete one Url_tag
     * const Url_tag = await prisma.url_tag.delete({
     *   where: {
     *     // ... filter to delete one Url_tag
     *   }
     * })
     * 
     */
    delete<T extends url_tagDeleteArgs>(args: SelectSubset<T, url_tagDeleteArgs<ExtArgs>>): Prisma__url_tagClient<$Result.GetResult<Prisma.$url_tagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Url_tag.
     * @param {url_tagUpdateArgs} args - Arguments to update one Url_tag.
     * @example
     * // Update one Url_tag
     * const url_tag = await prisma.url_tag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends url_tagUpdateArgs>(args: SelectSubset<T, url_tagUpdateArgs<ExtArgs>>): Prisma__url_tagClient<$Result.GetResult<Prisma.$url_tagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Url_tags.
     * @param {url_tagDeleteManyArgs} args - Arguments to filter Url_tags to delete.
     * @example
     * // Delete a few Url_tags
     * const { count } = await prisma.url_tag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends url_tagDeleteManyArgs>(args?: SelectSubset<T, url_tagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Url_tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {url_tagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Url_tags
     * const url_tag = await prisma.url_tag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends url_tagUpdateManyArgs>(args: SelectSubset<T, url_tagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Url_tags and returns the data updated in the database.
     * @param {url_tagUpdateManyAndReturnArgs} args - Arguments to update many Url_tags.
     * @example
     * // Update many Url_tags
     * const url_tag = await prisma.url_tag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Url_tags and only return the `tag_id`
     * const url_tagWithTag_idOnly = await prisma.url_tag.updateManyAndReturn({
     *   select: { tag_id: true },
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
    updateManyAndReturn<T extends url_tagUpdateManyAndReturnArgs>(args: SelectSubset<T, url_tagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$url_tagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Url_tag.
     * @param {url_tagUpsertArgs} args - Arguments to update or create a Url_tag.
     * @example
     * // Update or create a Url_tag
     * const url_tag = await prisma.url_tag.upsert({
     *   create: {
     *     // ... data to create a Url_tag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Url_tag we want to update
     *   }
     * })
     */
    upsert<T extends url_tagUpsertArgs>(args: SelectSubset<T, url_tagUpsertArgs<ExtArgs>>): Prisma__url_tagClient<$Result.GetResult<Prisma.$url_tagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Url_tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {url_tagCountArgs} args - Arguments to filter Url_tags to count.
     * @example
     * // Count the number of Url_tags
     * const count = await prisma.url_tag.count({
     *   where: {
     *     // ... the filter for the Url_tags we want to count
     *   }
     * })
    **/
    count<T extends url_tagCountArgs>(
      args?: Subset<T, url_tagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Url_tagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Url_tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Url_tagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Url_tagAggregateArgs>(args: Subset<T, Url_tagAggregateArgs>): Prisma.PrismaPromise<GetUrl_tagAggregateType<T>>

    /**
     * Group by Url_tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {url_tagGroupByArgs} args - Group by arguments.
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
      T extends url_tagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: url_tagGroupByArgs['orderBy'] }
        : { orderBy?: url_tagGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, url_tagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUrl_tagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the url_tag model
   */
  readonly fields: url_tagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for url_tag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__url_tagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    url<T extends url_tag$urlArgs<ExtArgs> = {}>(args?: Subset<T, url_tag$urlArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$urlPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the url_tag model
   */
  interface url_tagFieldRefs {
    readonly tag_id: FieldRef<"url_tag", 'Int'>
    readonly user_id: FieldRef<"url_tag", 'String'>
    readonly tag_name: FieldRef<"url_tag", 'String'>
    readonly created_at: FieldRef<"url_tag", 'DateTime'>
    readonly updated_at: FieldRef<"url_tag", 'DateTime'>
    readonly deleted_at: FieldRef<"url_tag", 'DateTime'>
    readonly is_deleted: FieldRef<"url_tag", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * url_tag findUnique
   */
  export type url_tagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the url_tag
     */
    select?: url_tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the url_tag
     */
    omit?: url_tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: url_tagInclude<ExtArgs> | null
    /**
     * Filter, which url_tag to fetch.
     */
    where: url_tagWhereUniqueInput
  }

  /**
   * url_tag findUniqueOrThrow
   */
  export type url_tagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the url_tag
     */
    select?: url_tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the url_tag
     */
    omit?: url_tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: url_tagInclude<ExtArgs> | null
    /**
     * Filter, which url_tag to fetch.
     */
    where: url_tagWhereUniqueInput
  }

  /**
   * url_tag findFirst
   */
  export type url_tagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the url_tag
     */
    select?: url_tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the url_tag
     */
    omit?: url_tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: url_tagInclude<ExtArgs> | null
    /**
     * Filter, which url_tag to fetch.
     */
    where?: url_tagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of url_tags to fetch.
     */
    orderBy?: url_tagOrderByWithRelationInput | url_tagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for url_tags.
     */
    cursor?: url_tagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` url_tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` url_tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of url_tags.
     */
    distinct?: Url_tagScalarFieldEnum | Url_tagScalarFieldEnum[]
  }

  /**
   * url_tag findFirstOrThrow
   */
  export type url_tagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the url_tag
     */
    select?: url_tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the url_tag
     */
    omit?: url_tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: url_tagInclude<ExtArgs> | null
    /**
     * Filter, which url_tag to fetch.
     */
    where?: url_tagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of url_tags to fetch.
     */
    orderBy?: url_tagOrderByWithRelationInput | url_tagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for url_tags.
     */
    cursor?: url_tagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` url_tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` url_tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of url_tags.
     */
    distinct?: Url_tagScalarFieldEnum | Url_tagScalarFieldEnum[]
  }

  /**
   * url_tag findMany
   */
  export type url_tagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the url_tag
     */
    select?: url_tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the url_tag
     */
    omit?: url_tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: url_tagInclude<ExtArgs> | null
    /**
     * Filter, which url_tags to fetch.
     */
    where?: url_tagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of url_tags to fetch.
     */
    orderBy?: url_tagOrderByWithRelationInput | url_tagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing url_tags.
     */
    cursor?: url_tagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` url_tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` url_tags.
     */
    skip?: number
    distinct?: Url_tagScalarFieldEnum | Url_tagScalarFieldEnum[]
  }

  /**
   * url_tag create
   */
  export type url_tagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the url_tag
     */
    select?: url_tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the url_tag
     */
    omit?: url_tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: url_tagInclude<ExtArgs> | null
    /**
     * The data needed to create a url_tag.
     */
    data: XOR<url_tagCreateInput, url_tagUncheckedCreateInput>
  }

  /**
   * url_tag createMany
   */
  export type url_tagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many url_tags.
     */
    data: url_tagCreateManyInput | url_tagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * url_tag createManyAndReturn
   */
  export type url_tagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the url_tag
     */
    select?: url_tagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the url_tag
     */
    omit?: url_tagOmit<ExtArgs> | null
    /**
     * The data used to create many url_tags.
     */
    data: url_tagCreateManyInput | url_tagCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: url_tagIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * url_tag update
   */
  export type url_tagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the url_tag
     */
    select?: url_tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the url_tag
     */
    omit?: url_tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: url_tagInclude<ExtArgs> | null
    /**
     * The data needed to update a url_tag.
     */
    data: XOR<url_tagUpdateInput, url_tagUncheckedUpdateInput>
    /**
     * Choose, which url_tag to update.
     */
    where: url_tagWhereUniqueInput
  }

  /**
   * url_tag updateMany
   */
  export type url_tagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update url_tags.
     */
    data: XOR<url_tagUpdateManyMutationInput, url_tagUncheckedUpdateManyInput>
    /**
     * Filter which url_tags to update
     */
    where?: url_tagWhereInput
    /**
     * Limit how many url_tags to update.
     */
    limit?: number
  }

  /**
   * url_tag updateManyAndReturn
   */
  export type url_tagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the url_tag
     */
    select?: url_tagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the url_tag
     */
    omit?: url_tagOmit<ExtArgs> | null
    /**
     * The data used to update url_tags.
     */
    data: XOR<url_tagUpdateManyMutationInput, url_tagUncheckedUpdateManyInput>
    /**
     * Filter which url_tags to update
     */
    where?: url_tagWhereInput
    /**
     * Limit how many url_tags to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: url_tagIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * url_tag upsert
   */
  export type url_tagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the url_tag
     */
    select?: url_tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the url_tag
     */
    omit?: url_tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: url_tagInclude<ExtArgs> | null
    /**
     * The filter to search for the url_tag to update in case it exists.
     */
    where: url_tagWhereUniqueInput
    /**
     * In case the url_tag found by the `where` argument doesn't exist, create a new url_tag with this data.
     */
    create: XOR<url_tagCreateInput, url_tagUncheckedCreateInput>
    /**
     * In case the url_tag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<url_tagUpdateInput, url_tagUncheckedUpdateInput>
  }

  /**
   * url_tag delete
   */
  export type url_tagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the url_tag
     */
    select?: url_tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the url_tag
     */
    omit?: url_tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: url_tagInclude<ExtArgs> | null
    /**
     * Filter which url_tag to delete.
     */
    where: url_tagWhereUniqueInput
  }

  /**
   * url_tag deleteMany
   */
  export type url_tagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which url_tags to delete
     */
    where?: url_tagWhereInput
    /**
     * Limit how many url_tags to delete.
     */
    limit?: number
  }

  /**
   * url_tag.url
   */
  export type url_tag$urlArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the url
     */
    select?: urlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the url
     */
    omit?: urlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: urlInclude<ExtArgs> | null
    where?: urlWhereInput
    orderBy?: urlOrderByWithRelationInput | urlOrderByWithRelationInput[]
    cursor?: urlWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UrlScalarFieldEnum | UrlScalarFieldEnum[]
  }

  /**
   * url_tag without action
   */
  export type url_tagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the url_tag
     */
    select?: url_tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the url_tag
     */
    omit?: url_tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: url_tagInclude<ExtArgs> | null
  }


  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    role_id: number | null
  }

  export type UserSumAggregateOutputType = {
    role_id: number | null
  }

  export type UserMinAggregateOutputType = {
    user_id: string | null
    username: string | null
    email: string | null
    password_hash: string | null
    role_id: number | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    is_deleted: boolean | null
  }

  export type UserMaxAggregateOutputType = {
    user_id: string | null
    username: string | null
    email: string | null
    password_hash: string | null
    role_id: number | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    is_deleted: boolean | null
  }

  export type UserCountAggregateOutputType = {
    user_id: number
    username: number
    email: number
    password_hash: number
    role_id: number
    created_at: number
    updated_at: number
    deleted_at: number
    is_deleted: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    role_id?: true
  }

  export type UserSumAggregateInputType = {
    role_id?: true
  }

  export type UserMinAggregateInputType = {
    user_id?: true
    username?: true
    email?: true
    password_hash?: true
    role_id?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    is_deleted?: true
  }

  export type UserMaxAggregateInputType = {
    user_id?: true
    username?: true
    email?: true
    password_hash?: true
    role_id?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    is_deleted?: true
  }

  export type UserCountAggregateInputType = {
    user_id?: true
    username?: true
    email?: true
    password_hash?: true
    role_id?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    is_deleted?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    user_id: string
    username: string
    email: string
    password_hash: string
    role_id: number
    created_at: Date
    updated_at: Date
    deleted_at: Date | null
    is_deleted: boolean
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
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


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    username?: boolean
    email?: boolean
    password_hash?: boolean
    role_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    is_deleted?: boolean
    api_key?: boolean | user$api_keyArgs<ExtArgs>
    audit_log?: boolean | user$audit_logArgs<ExtArgs>
    logo?: boolean | user$logoArgs<ExtArgs>
    url?: boolean | user$urlArgs<ExtArgs>
    url_tag?: boolean | user$url_tagArgs<ExtArgs>
    user_role?: boolean | user_roleDefaultArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type userSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    username?: boolean
    email?: boolean
    password_hash?: boolean
    role_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    is_deleted?: boolean
    user_role?: boolean | user_roleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type userSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    username?: boolean
    email?: boolean
    password_hash?: boolean
    role_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    is_deleted?: boolean
    user_role?: boolean | user_roleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type userSelectScalar = {
    user_id?: boolean
    username?: boolean
    email?: boolean
    password_hash?: boolean
    role_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    is_deleted?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "username" | "email" | "password_hash" | "role_id" | "created_at" | "updated_at" | "deleted_at" | "is_deleted", ExtArgs["result"]["user"]>
  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    api_key?: boolean | user$api_keyArgs<ExtArgs>
    audit_log?: boolean | user$audit_logArgs<ExtArgs>
    logo?: boolean | user$logoArgs<ExtArgs>
    url?: boolean | user$urlArgs<ExtArgs>
    url_tag?: boolean | user$url_tagArgs<ExtArgs>
    user_role?: boolean | user_roleDefaultArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type userIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_role?: boolean | user_roleDefaultArgs<ExtArgs>
  }
  export type userIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_role?: boolean | user_roleDefaultArgs<ExtArgs>
  }

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      api_key: Prisma.$api_keyPayload<ExtArgs>[]
      audit_log: Prisma.$audit_logPayload<ExtArgs>[]
      logo: Prisma.$logoPayload<ExtArgs>[]
      url: Prisma.$urlPayload<ExtArgs>[]
      url_tag: Prisma.$url_tagPayload<ExtArgs>[]
      user_role: Prisma.$user_rolePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: string
      username: string
      email: string
      password_hash: string
      role_id: number
      created_at: Date
      updated_at: Date
      deleted_at: Date | null
      is_deleted: boolean
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const userWithUser_idOnly = await prisma.user.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {userCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `user_id`
     * const userWithUser_idOnly = await prisma.user.createManyAndReturn({
     *   select: { user_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends userCreateManyAndReturnArgs>(args?: SelectSubset<T, userCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
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
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {userUpdateManyAndReturnArgs} args - Arguments to update many Users.
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
     * // Update zero or more Users and only return the `user_id`
     * const userWithUser_idOnly = await prisma.user.updateManyAndReturn({
     *   select: { user_id: true },
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
    updateManyAndReturn<T extends userUpdateManyAndReturnArgs>(args: SelectSubset<T, userUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
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
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
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
     * @param {userGroupByArgs} args - Group by arguments.
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
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    api_key<T extends user$api_keyArgs<ExtArgs> = {}>(args?: Subset<T, user$api_keyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$api_keyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    audit_log<T extends user$audit_logArgs<ExtArgs> = {}>(args?: Subset<T, user$audit_logArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$audit_logPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    logo<T extends user$logoArgs<ExtArgs> = {}>(args?: Subset<T, user$logoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$logoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    url<T extends user$urlArgs<ExtArgs> = {}>(args?: Subset<T, user$urlArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$urlPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    url_tag<T extends user$url_tagArgs<ExtArgs> = {}>(args?: Subset<T, user$url_tagArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$url_tagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user_role<T extends user_roleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, user_roleDefaultArgs<ExtArgs>>): Prisma__user_roleClient<$Result.GetResult<Prisma.$user_rolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly user_id: FieldRef<"user", 'String'>
    readonly username: FieldRef<"user", 'String'>
    readonly email: FieldRef<"user", 'String'>
    readonly password_hash: FieldRef<"user", 'String'>
    readonly role_id: FieldRef<"user", 'Int'>
    readonly created_at: FieldRef<"user", 'DateTime'>
    readonly updated_at: FieldRef<"user", 'DateTime'>
    readonly deleted_at: FieldRef<"user", 'DateTime'>
    readonly is_deleted: FieldRef<"user", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user createManyAndReturn
   */
  export type userCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user updateManyAndReturn
   */
  export type userUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * user.api_key
   */
  export type user$api_keyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the api_key
     */
    select?: api_keySelect<ExtArgs> | null
    /**
     * Omit specific fields from the api_key
     */
    omit?: api_keyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: api_keyInclude<ExtArgs> | null
    where?: api_keyWhereInput
    orderBy?: api_keyOrderByWithRelationInput | api_keyOrderByWithRelationInput[]
    cursor?: api_keyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Api_keyScalarFieldEnum | Api_keyScalarFieldEnum[]
  }

  /**
   * user.audit_log
   */
  export type user$audit_logArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_log
     */
    select?: audit_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit_log
     */
    omit?: audit_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: audit_logInclude<ExtArgs> | null
    where?: audit_logWhereInput
    orderBy?: audit_logOrderByWithRelationInput | audit_logOrderByWithRelationInput[]
    cursor?: audit_logWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Audit_logScalarFieldEnum | Audit_logScalarFieldEnum[]
  }

  /**
   * user.logo
   */
  export type user$logoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logo
     */
    select?: logoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logo
     */
    omit?: logoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logoInclude<ExtArgs> | null
    where?: logoWhereInput
    orderBy?: logoOrderByWithRelationInput | logoOrderByWithRelationInput[]
    cursor?: logoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LogoScalarFieldEnum | LogoScalarFieldEnum[]
  }

  /**
   * user.url
   */
  export type user$urlArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the url
     */
    select?: urlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the url
     */
    omit?: urlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: urlInclude<ExtArgs> | null
    where?: urlWhereInput
    orderBy?: urlOrderByWithRelationInput | urlOrderByWithRelationInput[]
    cursor?: urlWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UrlScalarFieldEnum | UrlScalarFieldEnum[]
  }

  /**
   * user.url_tag
   */
  export type user$url_tagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the url_tag
     */
    select?: url_tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the url_tag
     */
    omit?: url_tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: url_tagInclude<ExtArgs> | null
    where?: url_tagWhereInput
    orderBy?: url_tagOrderByWithRelationInput | url_tagOrderByWithRelationInput[]
    cursor?: url_tagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Url_tagScalarFieldEnum | Url_tagScalarFieldEnum[]
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
  }


  /**
   * Model user_role
   */

  export type AggregateUser_role = {
    _count: User_roleCountAggregateOutputType | null
    _avg: User_roleAvgAggregateOutputType | null
    _sum: User_roleSumAggregateOutputType | null
    _min: User_roleMinAggregateOutputType | null
    _max: User_roleMaxAggregateOutputType | null
  }

  export type User_roleAvgAggregateOutputType = {
    role_id: number | null
  }

  export type User_roleSumAggregateOutputType = {
    role_id: number | null
  }

  export type User_roleMinAggregateOutputType = {
    role_id: number | null
    role_name: string | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    is_deleted: boolean | null
  }

  export type User_roleMaxAggregateOutputType = {
    role_id: number | null
    role_name: string | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    is_deleted: boolean | null
  }

  export type User_roleCountAggregateOutputType = {
    role_id: number
    role_name: number
    description: number
    created_at: number
    updated_at: number
    deleted_at: number
    is_deleted: number
    _all: number
  }


  export type User_roleAvgAggregateInputType = {
    role_id?: true
  }

  export type User_roleSumAggregateInputType = {
    role_id?: true
  }

  export type User_roleMinAggregateInputType = {
    role_id?: true
    role_name?: true
    description?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    is_deleted?: true
  }

  export type User_roleMaxAggregateInputType = {
    role_id?: true
    role_name?: true
    description?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    is_deleted?: true
  }

  export type User_roleCountAggregateInputType = {
    role_id?: true
    role_name?: true
    description?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    is_deleted?: true
    _all?: true
  }

  export type User_roleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_role to aggregate.
     */
    where?: user_roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_roles to fetch.
     */
    orderBy?: user_roleOrderByWithRelationInput | user_roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_roles
    **/
    _count?: true | User_roleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: User_roleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: User_roleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_roleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_roleMaxAggregateInputType
  }

  export type GetUser_roleAggregateType<T extends User_roleAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_role]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_role[P]>
      : GetScalarType<T[P], AggregateUser_role[P]>
  }




  export type user_roleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_roleWhereInput
    orderBy?: user_roleOrderByWithAggregationInput | user_roleOrderByWithAggregationInput[]
    by: User_roleScalarFieldEnum[] | User_roleScalarFieldEnum
    having?: user_roleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_roleCountAggregateInputType | true
    _avg?: User_roleAvgAggregateInputType
    _sum?: User_roleSumAggregateInputType
    _min?: User_roleMinAggregateInputType
    _max?: User_roleMaxAggregateInputType
  }

  export type User_roleGroupByOutputType = {
    role_id: number
    role_name: string
    description: string | null
    created_at: Date
    updated_at: Date
    deleted_at: Date | null
    is_deleted: boolean
    _count: User_roleCountAggregateOutputType | null
    _avg: User_roleAvgAggregateOutputType | null
    _sum: User_roleSumAggregateOutputType | null
    _min: User_roleMinAggregateOutputType | null
    _max: User_roleMaxAggregateOutputType | null
  }

  type GetUser_roleGroupByPayload<T extends user_roleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_roleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_roleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_roleGroupByOutputType[P]>
            : GetScalarType<T[P], User_roleGroupByOutputType[P]>
        }
      >
    >


  export type user_roleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    role_id?: boolean
    role_name?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    is_deleted?: boolean
    user?: boolean | user_role$userArgs<ExtArgs>
    _count?: boolean | User_roleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_role"]>

  export type user_roleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    role_id?: boolean
    role_name?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    is_deleted?: boolean
  }, ExtArgs["result"]["user_role"]>

  export type user_roleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    role_id?: boolean
    role_name?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    is_deleted?: boolean
  }, ExtArgs["result"]["user_role"]>

  export type user_roleSelectScalar = {
    role_id?: boolean
    role_name?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    is_deleted?: boolean
  }

  export type user_roleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"role_id" | "role_name" | "description" | "created_at" | "updated_at" | "deleted_at" | "is_deleted", ExtArgs["result"]["user_role"]>
  export type user_roleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | user_role$userArgs<ExtArgs>
    _count?: boolean | User_roleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type user_roleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type user_roleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $user_rolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_role"
    objects: {
      user: Prisma.$userPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      role_id: number
      role_name: string
      description: string | null
      created_at: Date
      updated_at: Date
      deleted_at: Date | null
      is_deleted: boolean
    }, ExtArgs["result"]["user_role"]>
    composites: {}
  }

  type user_roleGetPayload<S extends boolean | null | undefined | user_roleDefaultArgs> = $Result.GetResult<Prisma.$user_rolePayload, S>

  type user_roleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<user_roleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: User_roleCountAggregateInputType | true
    }

  export interface user_roleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_role'], meta: { name: 'user_role' } }
    /**
     * Find zero or one User_role that matches the filter.
     * @param {user_roleFindUniqueArgs} args - Arguments to find a User_role
     * @example
     * // Get one User_role
     * const user_role = await prisma.user_role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends user_roleFindUniqueArgs>(args: SelectSubset<T, user_roleFindUniqueArgs<ExtArgs>>): Prisma__user_roleClient<$Result.GetResult<Prisma.$user_rolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User_role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {user_roleFindUniqueOrThrowArgs} args - Arguments to find a User_role
     * @example
     * // Get one User_role
     * const user_role = await prisma.user_role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends user_roleFindUniqueOrThrowArgs>(args: SelectSubset<T, user_roleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__user_roleClient<$Result.GetResult<Prisma.$user_rolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_roleFindFirstArgs} args - Arguments to find a User_role
     * @example
     * // Get one User_role
     * const user_role = await prisma.user_role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends user_roleFindFirstArgs>(args?: SelectSubset<T, user_roleFindFirstArgs<ExtArgs>>): Prisma__user_roleClient<$Result.GetResult<Prisma.$user_rolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_roleFindFirstOrThrowArgs} args - Arguments to find a User_role
     * @example
     * // Get one User_role
     * const user_role = await prisma.user_role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends user_roleFindFirstOrThrowArgs>(args?: SelectSubset<T, user_roleFindFirstOrThrowArgs<ExtArgs>>): Prisma__user_roleClient<$Result.GetResult<Prisma.$user_rolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more User_roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_roleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_roles
     * const user_roles = await prisma.user_role.findMany()
     * 
     * // Get first 10 User_roles
     * const user_roles = await prisma.user_role.findMany({ take: 10 })
     * 
     * // Only select the `role_id`
     * const user_roleWithRole_idOnly = await prisma.user_role.findMany({ select: { role_id: true } })
     * 
     */
    findMany<T extends user_roleFindManyArgs>(args?: SelectSubset<T, user_roleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_rolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User_role.
     * @param {user_roleCreateArgs} args - Arguments to create a User_role.
     * @example
     * // Create one User_role
     * const User_role = await prisma.user_role.create({
     *   data: {
     *     // ... data to create a User_role
     *   }
     * })
     * 
     */
    create<T extends user_roleCreateArgs>(args: SelectSubset<T, user_roleCreateArgs<ExtArgs>>): Prisma__user_roleClient<$Result.GetResult<Prisma.$user_rolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many User_roles.
     * @param {user_roleCreateManyArgs} args - Arguments to create many User_roles.
     * @example
     * // Create many User_roles
     * const user_role = await prisma.user_role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends user_roleCreateManyArgs>(args?: SelectSubset<T, user_roleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many User_roles and returns the data saved in the database.
     * @param {user_roleCreateManyAndReturnArgs} args - Arguments to create many User_roles.
     * @example
     * // Create many User_roles
     * const user_role = await prisma.user_role.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many User_roles and only return the `role_id`
     * const user_roleWithRole_idOnly = await prisma.user_role.createManyAndReturn({
     *   select: { role_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends user_roleCreateManyAndReturnArgs>(args?: SelectSubset<T, user_roleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_rolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User_role.
     * @param {user_roleDeleteArgs} args - Arguments to delete one User_role.
     * @example
     * // Delete one User_role
     * const User_role = await prisma.user_role.delete({
     *   where: {
     *     // ... filter to delete one User_role
     *   }
     * })
     * 
     */
    delete<T extends user_roleDeleteArgs>(args: SelectSubset<T, user_roleDeleteArgs<ExtArgs>>): Prisma__user_roleClient<$Result.GetResult<Prisma.$user_rolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User_role.
     * @param {user_roleUpdateArgs} args - Arguments to update one User_role.
     * @example
     * // Update one User_role
     * const user_role = await prisma.user_role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends user_roleUpdateArgs>(args: SelectSubset<T, user_roleUpdateArgs<ExtArgs>>): Prisma__user_roleClient<$Result.GetResult<Prisma.$user_rolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more User_roles.
     * @param {user_roleDeleteManyArgs} args - Arguments to filter User_roles to delete.
     * @example
     * // Delete a few User_roles
     * const { count } = await prisma.user_role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends user_roleDeleteManyArgs>(args?: SelectSubset<T, user_roleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_roleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_roles
     * const user_role = await prisma.user_role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends user_roleUpdateManyArgs>(args: SelectSubset<T, user_roleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_roles and returns the data updated in the database.
     * @param {user_roleUpdateManyAndReturnArgs} args - Arguments to update many User_roles.
     * @example
     * // Update many User_roles
     * const user_role = await prisma.user_role.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more User_roles and only return the `role_id`
     * const user_roleWithRole_idOnly = await prisma.user_role.updateManyAndReturn({
     *   select: { role_id: true },
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
    updateManyAndReturn<T extends user_roleUpdateManyAndReturnArgs>(args: SelectSubset<T, user_roleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_rolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User_role.
     * @param {user_roleUpsertArgs} args - Arguments to update or create a User_role.
     * @example
     * // Update or create a User_role
     * const user_role = await prisma.user_role.upsert({
     *   create: {
     *     // ... data to create a User_role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_role we want to update
     *   }
     * })
     */
    upsert<T extends user_roleUpsertArgs>(args: SelectSubset<T, user_roleUpsertArgs<ExtArgs>>): Prisma__user_roleClient<$Result.GetResult<Prisma.$user_rolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of User_roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_roleCountArgs} args - Arguments to filter User_roles to count.
     * @example
     * // Count the number of User_roles
     * const count = await prisma.user_role.count({
     *   where: {
     *     // ... the filter for the User_roles we want to count
     *   }
     * })
    **/
    count<T extends user_roleCountArgs>(
      args?: Subset<T, user_roleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_roleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_roleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends User_roleAggregateArgs>(args: Subset<T, User_roleAggregateArgs>): Prisma.PrismaPromise<GetUser_roleAggregateType<T>>

    /**
     * Group by User_role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_roleGroupByArgs} args - Group by arguments.
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
      T extends user_roleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_roleGroupByArgs['orderBy'] }
        : { orderBy?: user_roleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, user_roleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_roleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_role model
   */
  readonly fields: user_roleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_roleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends user_role$userArgs<ExtArgs> = {}>(args?: Subset<T, user_role$userArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the user_role model
   */
  interface user_roleFieldRefs {
    readonly role_id: FieldRef<"user_role", 'Int'>
    readonly role_name: FieldRef<"user_role", 'String'>
    readonly description: FieldRef<"user_role", 'String'>
    readonly created_at: FieldRef<"user_role", 'DateTime'>
    readonly updated_at: FieldRef<"user_role", 'DateTime'>
    readonly deleted_at: FieldRef<"user_role", 'DateTime'>
    readonly is_deleted: FieldRef<"user_role", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * user_role findUnique
   */
  export type user_roleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role
     */
    select?: user_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_role
     */
    omit?: user_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_roleInclude<ExtArgs> | null
    /**
     * Filter, which user_role to fetch.
     */
    where: user_roleWhereUniqueInput
  }

  /**
   * user_role findUniqueOrThrow
   */
  export type user_roleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role
     */
    select?: user_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_role
     */
    omit?: user_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_roleInclude<ExtArgs> | null
    /**
     * Filter, which user_role to fetch.
     */
    where: user_roleWhereUniqueInput
  }

  /**
   * user_role findFirst
   */
  export type user_roleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role
     */
    select?: user_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_role
     */
    omit?: user_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_roleInclude<ExtArgs> | null
    /**
     * Filter, which user_role to fetch.
     */
    where?: user_roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_roles to fetch.
     */
    orderBy?: user_roleOrderByWithRelationInput | user_roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_roles.
     */
    cursor?: user_roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_roles.
     */
    distinct?: User_roleScalarFieldEnum | User_roleScalarFieldEnum[]
  }

  /**
   * user_role findFirstOrThrow
   */
  export type user_roleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role
     */
    select?: user_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_role
     */
    omit?: user_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_roleInclude<ExtArgs> | null
    /**
     * Filter, which user_role to fetch.
     */
    where?: user_roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_roles to fetch.
     */
    orderBy?: user_roleOrderByWithRelationInput | user_roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_roles.
     */
    cursor?: user_roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_roles.
     */
    distinct?: User_roleScalarFieldEnum | User_roleScalarFieldEnum[]
  }

  /**
   * user_role findMany
   */
  export type user_roleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role
     */
    select?: user_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_role
     */
    omit?: user_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_roleInclude<ExtArgs> | null
    /**
     * Filter, which user_roles to fetch.
     */
    where?: user_roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_roles to fetch.
     */
    orderBy?: user_roleOrderByWithRelationInput | user_roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_roles.
     */
    cursor?: user_roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_roles.
     */
    skip?: number
    distinct?: User_roleScalarFieldEnum | User_roleScalarFieldEnum[]
  }

  /**
   * user_role create
   */
  export type user_roleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role
     */
    select?: user_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_role
     */
    omit?: user_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_roleInclude<ExtArgs> | null
    /**
     * The data needed to create a user_role.
     */
    data: XOR<user_roleCreateInput, user_roleUncheckedCreateInput>
  }

  /**
   * user_role createMany
   */
  export type user_roleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_roles.
     */
    data: user_roleCreateManyInput | user_roleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_role createManyAndReturn
   */
  export type user_roleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role
     */
    select?: user_roleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_role
     */
    omit?: user_roleOmit<ExtArgs> | null
    /**
     * The data used to create many user_roles.
     */
    data: user_roleCreateManyInput | user_roleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_role update
   */
  export type user_roleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role
     */
    select?: user_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_role
     */
    omit?: user_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_roleInclude<ExtArgs> | null
    /**
     * The data needed to update a user_role.
     */
    data: XOR<user_roleUpdateInput, user_roleUncheckedUpdateInput>
    /**
     * Choose, which user_role to update.
     */
    where: user_roleWhereUniqueInput
  }

  /**
   * user_role updateMany
   */
  export type user_roleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_roles.
     */
    data: XOR<user_roleUpdateManyMutationInput, user_roleUncheckedUpdateManyInput>
    /**
     * Filter which user_roles to update
     */
    where?: user_roleWhereInput
    /**
     * Limit how many user_roles to update.
     */
    limit?: number
  }

  /**
   * user_role updateManyAndReturn
   */
  export type user_roleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role
     */
    select?: user_roleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_role
     */
    omit?: user_roleOmit<ExtArgs> | null
    /**
     * The data used to update user_roles.
     */
    data: XOR<user_roleUpdateManyMutationInput, user_roleUncheckedUpdateManyInput>
    /**
     * Filter which user_roles to update
     */
    where?: user_roleWhereInput
    /**
     * Limit how many user_roles to update.
     */
    limit?: number
  }

  /**
   * user_role upsert
   */
  export type user_roleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role
     */
    select?: user_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_role
     */
    omit?: user_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_roleInclude<ExtArgs> | null
    /**
     * The filter to search for the user_role to update in case it exists.
     */
    where: user_roleWhereUniqueInput
    /**
     * In case the user_role found by the `where` argument doesn't exist, create a new user_role with this data.
     */
    create: XOR<user_roleCreateInput, user_roleUncheckedCreateInput>
    /**
     * In case the user_role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_roleUpdateInput, user_roleUncheckedUpdateInput>
  }

  /**
   * user_role delete
   */
  export type user_roleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role
     */
    select?: user_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_role
     */
    omit?: user_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_roleInclude<ExtArgs> | null
    /**
     * Filter which user_role to delete.
     */
    where: user_roleWhereUniqueInput
  }

  /**
   * user_role deleteMany
   */
  export type user_roleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_roles to delete
     */
    where?: user_roleWhereInput
    /**
     * Limit how many user_roles to delete.
     */
    limit?: number
  }

  /**
   * user_role.user
   */
  export type user_role$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    where?: userWhereInput
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    cursor?: userWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user_role without action
   */
  export type user_roleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role
     */
    select?: user_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_role
     */
    omit?: user_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_roleInclude<ExtArgs> | null
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


  export const Api_keyScalarFieldEnum: {
    api_key_id: 'api_key_id',
    user_id: 'user_id',
    api_key: 'api_key',
    created_at: 'created_at',
    expires_at: 'expires_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at',
    is_deleted: 'is_deleted'
  };

  export type Api_keyScalarFieldEnum = (typeof Api_keyScalarFieldEnum)[keyof typeof Api_keyScalarFieldEnum]


  export const Audit_logScalarFieldEnum: {
    audit_id: 'audit_id',
    url_id: 'url_id',
    action: 'action',
    changed_by: 'changed_by',
    change_date: 'change_date',
    details: 'details',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at',
    is_deleted: 'is_deleted'
  };

  export type Audit_logScalarFieldEnum = (typeof Audit_logScalarFieldEnum)[keyof typeof Audit_logScalarFieldEnum]


  export const LogoScalarFieldEnum: {
    logo_id: 'logo_id',
    user_id: 'user_id',
    logo_path: 'logo_path',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at',
    is_deleted: 'is_deleted'
  };

  export type LogoScalarFieldEnum = (typeof LogoScalarFieldEnum)[keyof typeof LogoScalarFieldEnum]


  export const UrlScalarFieldEnum: {
    url_id: 'url_id',
    user_id: 'user_id',
    original_url: 'original_url',
    short_url: 'short_url',
    logo_id: 'logo_id',
    tag_id: 'tag_id',
    url_type: 'url_type',
    associated: 'associated',
    expiration_date: 'expiration_date',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at',
    is_deleted: 'is_deleted',
    is_pre_generated: 'is_pre_generated',
    associated_at: 'associated_at'
  };

  export type UrlScalarFieldEnum = (typeof UrlScalarFieldEnum)[keyof typeof UrlScalarFieldEnum]


  export const Url_clickScalarFieldEnum: {
    click_id: 'click_id',
    url_id: 'url_id',
    access_date: 'access_date',
    access_time: 'access_time',
    ip_address: 'ip_address',
    user_agent: 'user_agent',
    referrer: 'referrer',
    country: 'country',
    city: 'city',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at',
    is_deleted: 'is_deleted'
  };

  export type Url_clickScalarFieldEnum = (typeof Url_clickScalarFieldEnum)[keyof typeof Url_clickScalarFieldEnum]


  export const Url_tagScalarFieldEnum: {
    tag_id: 'tag_id',
    user_id: 'user_id',
    tag_name: 'tag_name',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at',
    is_deleted: 'is_deleted'
  };

  export type Url_tagScalarFieldEnum = (typeof Url_tagScalarFieldEnum)[keyof typeof Url_tagScalarFieldEnum]


  export const UserScalarFieldEnum: {
    user_id: 'user_id',
    username: 'username',
    email: 'email',
    password_hash: 'password_hash',
    role_id: 'role_id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at',
    is_deleted: 'is_deleted'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const User_roleScalarFieldEnum: {
    role_id: 'role_id',
    role_name: 'role_name',
    description: 'description',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at',
    is_deleted: 'is_deleted'
  };

  export type User_roleScalarFieldEnum = (typeof User_roleScalarFieldEnum)[keyof typeof User_roleScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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


  export type api_keyWhereInput = {
    AND?: api_keyWhereInput | api_keyWhereInput[]
    OR?: api_keyWhereInput[]
    NOT?: api_keyWhereInput | api_keyWhereInput[]
    api_key_id?: IntFilter<"api_key"> | number
    user_id?: UuidFilter<"api_key"> | string
    api_key?: StringFilter<"api_key"> | string
    created_at?: DateTimeFilter<"api_key"> | Date | string
    expires_at?: DateTimeNullableFilter<"api_key"> | Date | string | null
    updated_at?: DateTimeFilter<"api_key"> | Date | string
    deleted_at?: DateTimeNullableFilter<"api_key"> | Date | string | null
    is_deleted?: BoolFilter<"api_key"> | boolean
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type api_keyOrderByWithRelationInput = {
    api_key_id?: SortOrder
    user_id?: SortOrder
    api_key?: SortOrder
    created_at?: SortOrder
    expires_at?: SortOrderInput | SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    is_deleted?: SortOrder
    user?: userOrderByWithRelationInput
  }

  export type api_keyWhereUniqueInput = Prisma.AtLeast<{
    api_key_id?: number
    api_key?: string
    AND?: api_keyWhereInput | api_keyWhereInput[]
    OR?: api_keyWhereInput[]
    NOT?: api_keyWhereInput | api_keyWhereInput[]
    user_id?: UuidFilter<"api_key"> | string
    created_at?: DateTimeFilter<"api_key"> | Date | string
    expires_at?: DateTimeNullableFilter<"api_key"> | Date | string | null
    updated_at?: DateTimeFilter<"api_key"> | Date | string
    deleted_at?: DateTimeNullableFilter<"api_key"> | Date | string | null
    is_deleted?: BoolFilter<"api_key"> | boolean
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "api_key_id" | "api_key">

  export type api_keyOrderByWithAggregationInput = {
    api_key_id?: SortOrder
    user_id?: SortOrder
    api_key?: SortOrder
    created_at?: SortOrder
    expires_at?: SortOrderInput | SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    is_deleted?: SortOrder
    _count?: api_keyCountOrderByAggregateInput
    _avg?: api_keyAvgOrderByAggregateInput
    _max?: api_keyMaxOrderByAggregateInput
    _min?: api_keyMinOrderByAggregateInput
    _sum?: api_keySumOrderByAggregateInput
  }

  export type api_keyScalarWhereWithAggregatesInput = {
    AND?: api_keyScalarWhereWithAggregatesInput | api_keyScalarWhereWithAggregatesInput[]
    OR?: api_keyScalarWhereWithAggregatesInput[]
    NOT?: api_keyScalarWhereWithAggregatesInput | api_keyScalarWhereWithAggregatesInput[]
    api_key_id?: IntWithAggregatesFilter<"api_key"> | number
    user_id?: UuidWithAggregatesFilter<"api_key"> | string
    api_key?: StringWithAggregatesFilter<"api_key"> | string
    created_at?: DateTimeWithAggregatesFilter<"api_key"> | Date | string
    expires_at?: DateTimeNullableWithAggregatesFilter<"api_key"> | Date | string | null
    updated_at?: DateTimeWithAggregatesFilter<"api_key"> | Date | string
    deleted_at?: DateTimeNullableWithAggregatesFilter<"api_key"> | Date | string | null
    is_deleted?: BoolWithAggregatesFilter<"api_key"> | boolean
  }

  export type audit_logWhereInput = {
    AND?: audit_logWhereInput | audit_logWhereInput[]
    OR?: audit_logWhereInput[]
    NOT?: audit_logWhereInput | audit_logWhereInput[]
    audit_id?: IntFilter<"audit_log"> | number
    url_id?: UuidFilter<"audit_log"> | string
    action?: StringFilter<"audit_log"> | string
    changed_by?: UuidFilter<"audit_log"> | string
    change_date?: DateTimeFilter<"audit_log"> | Date | string
    details?: StringNullableFilter<"audit_log"> | string | null
    created_at?: DateTimeFilter<"audit_log"> | Date | string
    updated_at?: DateTimeFilter<"audit_log"> | Date | string
    deleted_at?: DateTimeNullableFilter<"audit_log"> | Date | string | null
    is_deleted?: BoolFilter<"audit_log"> | boolean
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    url?: XOR<UrlScalarRelationFilter, urlWhereInput>
  }

  export type audit_logOrderByWithRelationInput = {
    audit_id?: SortOrder
    url_id?: SortOrder
    action?: SortOrder
    changed_by?: SortOrder
    change_date?: SortOrder
    details?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    is_deleted?: SortOrder
    user?: userOrderByWithRelationInput
    url?: urlOrderByWithRelationInput
  }

  export type audit_logWhereUniqueInput = Prisma.AtLeast<{
    audit_id?: number
    AND?: audit_logWhereInput | audit_logWhereInput[]
    OR?: audit_logWhereInput[]
    NOT?: audit_logWhereInput | audit_logWhereInput[]
    url_id?: UuidFilter<"audit_log"> | string
    action?: StringFilter<"audit_log"> | string
    changed_by?: UuidFilter<"audit_log"> | string
    change_date?: DateTimeFilter<"audit_log"> | Date | string
    details?: StringNullableFilter<"audit_log"> | string | null
    created_at?: DateTimeFilter<"audit_log"> | Date | string
    updated_at?: DateTimeFilter<"audit_log"> | Date | string
    deleted_at?: DateTimeNullableFilter<"audit_log"> | Date | string | null
    is_deleted?: BoolFilter<"audit_log"> | boolean
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    url?: XOR<UrlScalarRelationFilter, urlWhereInput>
  }, "audit_id">

  export type audit_logOrderByWithAggregationInput = {
    audit_id?: SortOrder
    url_id?: SortOrder
    action?: SortOrder
    changed_by?: SortOrder
    change_date?: SortOrder
    details?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    is_deleted?: SortOrder
    _count?: audit_logCountOrderByAggregateInput
    _avg?: audit_logAvgOrderByAggregateInput
    _max?: audit_logMaxOrderByAggregateInput
    _min?: audit_logMinOrderByAggregateInput
    _sum?: audit_logSumOrderByAggregateInput
  }

  export type audit_logScalarWhereWithAggregatesInput = {
    AND?: audit_logScalarWhereWithAggregatesInput | audit_logScalarWhereWithAggregatesInput[]
    OR?: audit_logScalarWhereWithAggregatesInput[]
    NOT?: audit_logScalarWhereWithAggregatesInput | audit_logScalarWhereWithAggregatesInput[]
    audit_id?: IntWithAggregatesFilter<"audit_log"> | number
    url_id?: UuidWithAggregatesFilter<"audit_log"> | string
    action?: StringWithAggregatesFilter<"audit_log"> | string
    changed_by?: UuidWithAggregatesFilter<"audit_log"> | string
    change_date?: DateTimeWithAggregatesFilter<"audit_log"> | Date | string
    details?: StringNullableWithAggregatesFilter<"audit_log"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"audit_log"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"audit_log"> | Date | string
    deleted_at?: DateTimeNullableWithAggregatesFilter<"audit_log"> | Date | string | null
    is_deleted?: BoolWithAggregatesFilter<"audit_log"> | boolean
  }

  export type logoWhereInput = {
    AND?: logoWhereInput | logoWhereInput[]
    OR?: logoWhereInput[]
    NOT?: logoWhereInput | logoWhereInput[]
    logo_id?: IntFilter<"logo"> | number
    user_id?: UuidFilter<"logo"> | string
    logo_path?: StringFilter<"logo"> | string
    created_at?: DateTimeFilter<"logo"> | Date | string
    updated_at?: DateTimeNullableFilter<"logo"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"logo"> | Date | string | null
    is_deleted?: BoolFilter<"logo"> | boolean
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    url?: UrlListRelationFilter
  }

  export type logoOrderByWithRelationInput = {
    logo_id?: SortOrder
    user_id?: SortOrder
    logo_path?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    is_deleted?: SortOrder
    user?: userOrderByWithRelationInput
    url?: urlOrderByRelationAggregateInput
  }

  export type logoWhereUniqueInput = Prisma.AtLeast<{
    logo_id?: number
    AND?: logoWhereInput | logoWhereInput[]
    OR?: logoWhereInput[]
    NOT?: logoWhereInput | logoWhereInput[]
    user_id?: UuidFilter<"logo"> | string
    logo_path?: StringFilter<"logo"> | string
    created_at?: DateTimeFilter<"logo"> | Date | string
    updated_at?: DateTimeNullableFilter<"logo"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"logo"> | Date | string | null
    is_deleted?: BoolFilter<"logo"> | boolean
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    url?: UrlListRelationFilter
  }, "logo_id">

  export type logoOrderByWithAggregationInput = {
    logo_id?: SortOrder
    user_id?: SortOrder
    logo_path?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    is_deleted?: SortOrder
    _count?: logoCountOrderByAggregateInput
    _avg?: logoAvgOrderByAggregateInput
    _max?: logoMaxOrderByAggregateInput
    _min?: logoMinOrderByAggregateInput
    _sum?: logoSumOrderByAggregateInput
  }

  export type logoScalarWhereWithAggregatesInput = {
    AND?: logoScalarWhereWithAggregatesInput | logoScalarWhereWithAggregatesInput[]
    OR?: logoScalarWhereWithAggregatesInput[]
    NOT?: logoScalarWhereWithAggregatesInput | logoScalarWhereWithAggregatesInput[]
    logo_id?: IntWithAggregatesFilter<"logo"> | number
    user_id?: UuidWithAggregatesFilter<"logo"> | string
    logo_path?: StringWithAggregatesFilter<"logo"> | string
    created_at?: DateTimeWithAggregatesFilter<"logo"> | Date | string
    updated_at?: DateTimeNullableWithAggregatesFilter<"logo"> | Date | string | null
    deleted_at?: DateTimeNullableWithAggregatesFilter<"logo"> | Date | string | null
    is_deleted?: BoolWithAggregatesFilter<"logo"> | boolean
  }

  export type urlWhereInput = {
    AND?: urlWhereInput | urlWhereInput[]
    OR?: urlWhereInput[]
    NOT?: urlWhereInput | urlWhereInput[]
    url_id?: UuidFilter<"url"> | string
    user_id?: UuidNullableFilter<"url"> | string | null
    original_url?: StringNullableFilter<"url"> | string | null
    short_url?: StringFilter<"url"> | string
    logo_id?: IntNullableFilter<"url"> | number | null
    tag_id?: IntNullableFilter<"url"> | number | null
    url_type?: StringNullableFilter<"url"> | string | null
    associated?: BoolFilter<"url"> | boolean
    expiration_date?: DateTimeNullableFilter<"url"> | Date | string | null
    status?: StringFilter<"url"> | string
    created_at?: DateTimeFilter<"url"> | Date | string
    updated_at?: DateTimeFilter<"url"> | Date | string
    deleted_at?: DateTimeNullableFilter<"url"> | Date | string | null
    is_deleted?: BoolFilter<"url"> | boolean
    is_pre_generated?: BoolFilter<"url"> | boolean
    associated_at?: DateTimeNullableFilter<"url"> | Date | string | null
    audit_log?: Audit_logListRelationFilter
    logo?: XOR<LogoNullableScalarRelationFilter, logoWhereInput> | null
    url_tag?: XOR<Url_tagNullableScalarRelationFilter, url_tagWhereInput> | null
    user?: XOR<UserNullableScalarRelationFilter, userWhereInput> | null
    url_click?: Url_clickListRelationFilter
  }

  export type urlOrderByWithRelationInput = {
    url_id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    original_url?: SortOrderInput | SortOrder
    short_url?: SortOrder
    logo_id?: SortOrderInput | SortOrder
    tag_id?: SortOrderInput | SortOrder
    url_type?: SortOrderInput | SortOrder
    associated?: SortOrder
    expiration_date?: SortOrderInput | SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    is_deleted?: SortOrder
    is_pre_generated?: SortOrder
    associated_at?: SortOrderInput | SortOrder
    audit_log?: audit_logOrderByRelationAggregateInput
    logo?: logoOrderByWithRelationInput
    url_tag?: url_tagOrderByWithRelationInput
    user?: userOrderByWithRelationInput
    url_click?: url_clickOrderByRelationAggregateInput
  }

  export type urlWhereUniqueInput = Prisma.AtLeast<{
    url_id?: string
    short_url?: string
    AND?: urlWhereInput | urlWhereInput[]
    OR?: urlWhereInput[]
    NOT?: urlWhereInput | urlWhereInput[]
    user_id?: UuidNullableFilter<"url"> | string | null
    original_url?: StringNullableFilter<"url"> | string | null
    logo_id?: IntNullableFilter<"url"> | number | null
    tag_id?: IntNullableFilter<"url"> | number | null
    url_type?: StringNullableFilter<"url"> | string | null
    associated?: BoolFilter<"url"> | boolean
    expiration_date?: DateTimeNullableFilter<"url"> | Date | string | null
    status?: StringFilter<"url"> | string
    created_at?: DateTimeFilter<"url"> | Date | string
    updated_at?: DateTimeFilter<"url"> | Date | string
    deleted_at?: DateTimeNullableFilter<"url"> | Date | string | null
    is_deleted?: BoolFilter<"url"> | boolean
    is_pre_generated?: BoolFilter<"url"> | boolean
    associated_at?: DateTimeNullableFilter<"url"> | Date | string | null
    audit_log?: Audit_logListRelationFilter
    logo?: XOR<LogoNullableScalarRelationFilter, logoWhereInput> | null
    url_tag?: XOR<Url_tagNullableScalarRelationFilter, url_tagWhereInput> | null
    user?: XOR<UserNullableScalarRelationFilter, userWhereInput> | null
    url_click?: Url_clickListRelationFilter
  }, "url_id" | "short_url">

  export type urlOrderByWithAggregationInput = {
    url_id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    original_url?: SortOrderInput | SortOrder
    short_url?: SortOrder
    logo_id?: SortOrderInput | SortOrder
    tag_id?: SortOrderInput | SortOrder
    url_type?: SortOrderInput | SortOrder
    associated?: SortOrder
    expiration_date?: SortOrderInput | SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    is_deleted?: SortOrder
    is_pre_generated?: SortOrder
    associated_at?: SortOrderInput | SortOrder
    _count?: urlCountOrderByAggregateInput
    _avg?: urlAvgOrderByAggregateInput
    _max?: urlMaxOrderByAggregateInput
    _min?: urlMinOrderByAggregateInput
    _sum?: urlSumOrderByAggregateInput
  }

  export type urlScalarWhereWithAggregatesInput = {
    AND?: urlScalarWhereWithAggregatesInput | urlScalarWhereWithAggregatesInput[]
    OR?: urlScalarWhereWithAggregatesInput[]
    NOT?: urlScalarWhereWithAggregatesInput | urlScalarWhereWithAggregatesInput[]
    url_id?: UuidWithAggregatesFilter<"url"> | string
    user_id?: UuidNullableWithAggregatesFilter<"url"> | string | null
    original_url?: StringNullableWithAggregatesFilter<"url"> | string | null
    short_url?: StringWithAggregatesFilter<"url"> | string
    logo_id?: IntNullableWithAggregatesFilter<"url"> | number | null
    tag_id?: IntNullableWithAggregatesFilter<"url"> | number | null
    url_type?: StringNullableWithAggregatesFilter<"url"> | string | null
    associated?: BoolWithAggregatesFilter<"url"> | boolean
    expiration_date?: DateTimeNullableWithAggregatesFilter<"url"> | Date | string | null
    status?: StringWithAggregatesFilter<"url"> | string
    created_at?: DateTimeWithAggregatesFilter<"url"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"url"> | Date | string
    deleted_at?: DateTimeNullableWithAggregatesFilter<"url"> | Date | string | null
    is_deleted?: BoolWithAggregatesFilter<"url"> | boolean
    is_pre_generated?: BoolWithAggregatesFilter<"url"> | boolean
    associated_at?: DateTimeNullableWithAggregatesFilter<"url"> | Date | string | null
  }

  export type url_clickWhereInput = {
    AND?: url_clickWhereInput | url_clickWhereInput[]
    OR?: url_clickWhereInput[]
    NOT?: url_clickWhereInput | url_clickWhereInput[]
    click_id?: IntFilter<"url_click"> | number
    url_id?: UuidFilter<"url_click"> | string
    access_date?: DateTimeFilter<"url_click"> | Date | string
    access_time?: DateTimeFilter<"url_click"> | Date | string
    ip_address?: StringFilter<"url_click"> | string
    user_agent?: StringFilter<"url_click"> | string
    referrer?: StringNullableFilter<"url_click"> | string | null
    country?: StringNullableFilter<"url_click"> | string | null
    city?: StringNullableFilter<"url_click"> | string | null
    created_at?: DateTimeFilter<"url_click"> | Date | string
    updated_at?: DateTimeFilter<"url_click"> | Date | string
    deleted_at?: DateTimeNullableFilter<"url_click"> | Date | string | null
    is_deleted?: BoolFilter<"url_click"> | boolean
    url?: XOR<UrlScalarRelationFilter, urlWhereInput>
  }

  export type url_clickOrderByWithRelationInput = {
    click_id?: SortOrder
    url_id?: SortOrder
    access_date?: SortOrder
    access_time?: SortOrder
    ip_address?: SortOrder
    user_agent?: SortOrder
    referrer?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    is_deleted?: SortOrder
    url?: urlOrderByWithRelationInput
  }

  export type url_clickWhereUniqueInput = Prisma.AtLeast<{
    click_id?: number
    AND?: url_clickWhereInput | url_clickWhereInput[]
    OR?: url_clickWhereInput[]
    NOT?: url_clickWhereInput | url_clickWhereInput[]
    url_id?: UuidFilter<"url_click"> | string
    access_date?: DateTimeFilter<"url_click"> | Date | string
    access_time?: DateTimeFilter<"url_click"> | Date | string
    ip_address?: StringFilter<"url_click"> | string
    user_agent?: StringFilter<"url_click"> | string
    referrer?: StringNullableFilter<"url_click"> | string | null
    country?: StringNullableFilter<"url_click"> | string | null
    city?: StringNullableFilter<"url_click"> | string | null
    created_at?: DateTimeFilter<"url_click"> | Date | string
    updated_at?: DateTimeFilter<"url_click"> | Date | string
    deleted_at?: DateTimeNullableFilter<"url_click"> | Date | string | null
    is_deleted?: BoolFilter<"url_click"> | boolean
    url?: XOR<UrlScalarRelationFilter, urlWhereInput>
  }, "click_id">

  export type url_clickOrderByWithAggregationInput = {
    click_id?: SortOrder
    url_id?: SortOrder
    access_date?: SortOrder
    access_time?: SortOrder
    ip_address?: SortOrder
    user_agent?: SortOrder
    referrer?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    is_deleted?: SortOrder
    _count?: url_clickCountOrderByAggregateInput
    _avg?: url_clickAvgOrderByAggregateInput
    _max?: url_clickMaxOrderByAggregateInput
    _min?: url_clickMinOrderByAggregateInput
    _sum?: url_clickSumOrderByAggregateInput
  }

  export type url_clickScalarWhereWithAggregatesInput = {
    AND?: url_clickScalarWhereWithAggregatesInput | url_clickScalarWhereWithAggregatesInput[]
    OR?: url_clickScalarWhereWithAggregatesInput[]
    NOT?: url_clickScalarWhereWithAggregatesInput | url_clickScalarWhereWithAggregatesInput[]
    click_id?: IntWithAggregatesFilter<"url_click"> | number
    url_id?: UuidWithAggregatesFilter<"url_click"> | string
    access_date?: DateTimeWithAggregatesFilter<"url_click"> | Date | string
    access_time?: DateTimeWithAggregatesFilter<"url_click"> | Date | string
    ip_address?: StringWithAggregatesFilter<"url_click"> | string
    user_agent?: StringWithAggregatesFilter<"url_click"> | string
    referrer?: StringNullableWithAggregatesFilter<"url_click"> | string | null
    country?: StringNullableWithAggregatesFilter<"url_click"> | string | null
    city?: StringNullableWithAggregatesFilter<"url_click"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"url_click"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"url_click"> | Date | string
    deleted_at?: DateTimeNullableWithAggregatesFilter<"url_click"> | Date | string | null
    is_deleted?: BoolWithAggregatesFilter<"url_click"> | boolean
  }

  export type url_tagWhereInput = {
    AND?: url_tagWhereInput | url_tagWhereInput[]
    OR?: url_tagWhereInput[]
    NOT?: url_tagWhereInput | url_tagWhereInput[]
    tag_id?: IntFilter<"url_tag"> | number
    user_id?: UuidFilter<"url_tag"> | string
    tag_name?: StringFilter<"url_tag"> | string
    created_at?: DateTimeFilter<"url_tag"> | Date | string
    updated_at?: DateTimeFilter<"url_tag"> | Date | string
    deleted_at?: DateTimeNullableFilter<"url_tag"> | Date | string | null
    is_deleted?: BoolFilter<"url_tag"> | boolean
    url?: UrlListRelationFilter
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type url_tagOrderByWithRelationInput = {
    tag_id?: SortOrder
    user_id?: SortOrder
    tag_name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    is_deleted?: SortOrder
    url?: urlOrderByRelationAggregateInput
    user?: userOrderByWithRelationInput
  }

  export type url_tagWhereUniqueInput = Prisma.AtLeast<{
    tag_id?: number
    AND?: url_tagWhereInput | url_tagWhereInput[]
    OR?: url_tagWhereInput[]
    NOT?: url_tagWhereInput | url_tagWhereInput[]
    user_id?: UuidFilter<"url_tag"> | string
    tag_name?: StringFilter<"url_tag"> | string
    created_at?: DateTimeFilter<"url_tag"> | Date | string
    updated_at?: DateTimeFilter<"url_tag"> | Date | string
    deleted_at?: DateTimeNullableFilter<"url_tag"> | Date | string | null
    is_deleted?: BoolFilter<"url_tag"> | boolean
    url?: UrlListRelationFilter
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "tag_id">

  export type url_tagOrderByWithAggregationInput = {
    tag_id?: SortOrder
    user_id?: SortOrder
    tag_name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    is_deleted?: SortOrder
    _count?: url_tagCountOrderByAggregateInput
    _avg?: url_tagAvgOrderByAggregateInput
    _max?: url_tagMaxOrderByAggregateInput
    _min?: url_tagMinOrderByAggregateInput
    _sum?: url_tagSumOrderByAggregateInput
  }

  export type url_tagScalarWhereWithAggregatesInput = {
    AND?: url_tagScalarWhereWithAggregatesInput | url_tagScalarWhereWithAggregatesInput[]
    OR?: url_tagScalarWhereWithAggregatesInput[]
    NOT?: url_tagScalarWhereWithAggregatesInput | url_tagScalarWhereWithAggregatesInput[]
    tag_id?: IntWithAggregatesFilter<"url_tag"> | number
    user_id?: UuidWithAggregatesFilter<"url_tag"> | string
    tag_name?: StringWithAggregatesFilter<"url_tag"> | string
    created_at?: DateTimeWithAggregatesFilter<"url_tag"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"url_tag"> | Date | string
    deleted_at?: DateTimeNullableWithAggregatesFilter<"url_tag"> | Date | string | null
    is_deleted?: BoolWithAggregatesFilter<"url_tag"> | boolean
  }

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    user_id?: UuidFilter<"user"> | string
    username?: StringFilter<"user"> | string
    email?: StringFilter<"user"> | string
    password_hash?: StringFilter<"user"> | string
    role_id?: IntFilter<"user"> | number
    created_at?: DateTimeFilter<"user"> | Date | string
    updated_at?: DateTimeFilter<"user"> | Date | string
    deleted_at?: DateTimeNullableFilter<"user"> | Date | string | null
    is_deleted?: BoolFilter<"user"> | boolean
    api_key?: Api_keyListRelationFilter
    audit_log?: Audit_logListRelationFilter
    logo?: LogoListRelationFilter
    url?: UrlListRelationFilter
    url_tag?: Url_tagListRelationFilter
    user_role?: XOR<User_roleScalarRelationFilter, user_roleWhereInput>
  }

  export type userOrderByWithRelationInput = {
    user_id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    role_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    is_deleted?: SortOrder
    api_key?: api_keyOrderByRelationAggregateInput
    audit_log?: audit_logOrderByRelationAggregateInput
    logo?: logoOrderByRelationAggregateInput
    url?: urlOrderByRelationAggregateInput
    url_tag?: url_tagOrderByRelationAggregateInput
    user_role?: user_roleOrderByWithRelationInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    user_id?: string
    username?: string
    email?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    password_hash?: StringFilter<"user"> | string
    role_id?: IntFilter<"user"> | number
    created_at?: DateTimeFilter<"user"> | Date | string
    updated_at?: DateTimeFilter<"user"> | Date | string
    deleted_at?: DateTimeNullableFilter<"user"> | Date | string | null
    is_deleted?: BoolFilter<"user"> | boolean
    api_key?: Api_keyListRelationFilter
    audit_log?: Audit_logListRelationFilter
    logo?: LogoListRelationFilter
    url?: UrlListRelationFilter
    url_tag?: Url_tagListRelationFilter
    user_role?: XOR<User_roleScalarRelationFilter, user_roleWhereInput>
  }, "user_id" | "username" | "email">

  export type userOrderByWithAggregationInput = {
    user_id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    role_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    is_deleted?: SortOrder
    _count?: userCountOrderByAggregateInput
    _avg?: userAvgOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
    _sum?: userSumOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    user_id?: UuidWithAggregatesFilter<"user"> | string
    username?: StringWithAggregatesFilter<"user"> | string
    email?: StringWithAggregatesFilter<"user"> | string
    password_hash?: StringWithAggregatesFilter<"user"> | string
    role_id?: IntWithAggregatesFilter<"user"> | number
    created_at?: DateTimeWithAggregatesFilter<"user"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"user"> | Date | string
    deleted_at?: DateTimeNullableWithAggregatesFilter<"user"> | Date | string | null
    is_deleted?: BoolWithAggregatesFilter<"user"> | boolean
  }

  export type user_roleWhereInput = {
    AND?: user_roleWhereInput | user_roleWhereInput[]
    OR?: user_roleWhereInput[]
    NOT?: user_roleWhereInput | user_roleWhereInput[]
    role_id?: IntFilter<"user_role"> | number
    role_name?: StringFilter<"user_role"> | string
    description?: StringNullableFilter<"user_role"> | string | null
    created_at?: DateTimeFilter<"user_role"> | Date | string
    updated_at?: DateTimeFilter<"user_role"> | Date | string
    deleted_at?: DateTimeNullableFilter<"user_role"> | Date | string | null
    is_deleted?: BoolFilter<"user_role"> | boolean
    user?: UserListRelationFilter
  }

  export type user_roleOrderByWithRelationInput = {
    role_id?: SortOrder
    role_name?: SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    is_deleted?: SortOrder
    user?: userOrderByRelationAggregateInput
  }

  export type user_roleWhereUniqueInput = Prisma.AtLeast<{
    role_id?: number
    role_name?: string
    AND?: user_roleWhereInput | user_roleWhereInput[]
    OR?: user_roleWhereInput[]
    NOT?: user_roleWhereInput | user_roleWhereInput[]
    description?: StringNullableFilter<"user_role"> | string | null
    created_at?: DateTimeFilter<"user_role"> | Date | string
    updated_at?: DateTimeFilter<"user_role"> | Date | string
    deleted_at?: DateTimeNullableFilter<"user_role"> | Date | string | null
    is_deleted?: BoolFilter<"user_role"> | boolean
    user?: UserListRelationFilter
  }, "role_id" | "role_name">

  export type user_roleOrderByWithAggregationInput = {
    role_id?: SortOrder
    role_name?: SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    is_deleted?: SortOrder
    _count?: user_roleCountOrderByAggregateInput
    _avg?: user_roleAvgOrderByAggregateInput
    _max?: user_roleMaxOrderByAggregateInput
    _min?: user_roleMinOrderByAggregateInput
    _sum?: user_roleSumOrderByAggregateInput
  }

  export type user_roleScalarWhereWithAggregatesInput = {
    AND?: user_roleScalarWhereWithAggregatesInput | user_roleScalarWhereWithAggregatesInput[]
    OR?: user_roleScalarWhereWithAggregatesInput[]
    NOT?: user_roleScalarWhereWithAggregatesInput | user_roleScalarWhereWithAggregatesInput[]
    role_id?: IntWithAggregatesFilter<"user_role"> | number
    role_name?: StringWithAggregatesFilter<"user_role"> | string
    description?: StringNullableWithAggregatesFilter<"user_role"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"user_role"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"user_role"> | Date | string
    deleted_at?: DateTimeNullableWithAggregatesFilter<"user_role"> | Date | string | null
    is_deleted?: BoolWithAggregatesFilter<"user_role"> | boolean
  }

  export type api_keyCreateInput = {
    api_key: string
    created_at?: Date | string
    expires_at?: Date | string | null
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
    user: userCreateNestedOneWithoutApi_keyInput
  }

  export type api_keyUncheckedCreateInput = {
    api_key_id?: number
    user_id: string
    api_key: string
    created_at?: Date | string
    expires_at?: Date | string | null
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
  }

  export type api_keyUpdateInput = {
    api_key?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    user?: userUpdateOneRequiredWithoutApi_keyNestedInput
  }

  export type api_keyUncheckedUpdateInput = {
    api_key_id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    api_key?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type api_keyCreateManyInput = {
    api_key_id?: number
    user_id: string
    api_key: string
    created_at?: Date | string
    expires_at?: Date | string | null
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
  }

  export type api_keyUpdateManyMutationInput = {
    api_key?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type api_keyUncheckedUpdateManyInput = {
    api_key_id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    api_key?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type audit_logCreateInput = {
    action: string
    change_date?: Date | string
    details?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
    user: userCreateNestedOneWithoutAudit_logInput
    url: urlCreateNestedOneWithoutAudit_logInput
  }

  export type audit_logUncheckedCreateInput = {
    audit_id?: number
    url_id: string
    action: string
    changed_by: string
    change_date?: Date | string
    details?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
  }

  export type audit_logUpdateInput = {
    action?: StringFieldUpdateOperationsInput | string
    change_date?: DateTimeFieldUpdateOperationsInput | Date | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    user?: userUpdateOneRequiredWithoutAudit_logNestedInput
    url?: urlUpdateOneRequiredWithoutAudit_logNestedInput
  }

  export type audit_logUncheckedUpdateInput = {
    audit_id?: IntFieldUpdateOperationsInput | number
    url_id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    changed_by?: StringFieldUpdateOperationsInput | string
    change_date?: DateTimeFieldUpdateOperationsInput | Date | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type audit_logCreateManyInput = {
    audit_id?: number
    url_id: string
    action: string
    changed_by: string
    change_date?: Date | string
    details?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
  }

  export type audit_logUpdateManyMutationInput = {
    action?: StringFieldUpdateOperationsInput | string
    change_date?: DateTimeFieldUpdateOperationsInput | Date | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type audit_logUncheckedUpdateManyInput = {
    audit_id?: IntFieldUpdateOperationsInput | number
    url_id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    changed_by?: StringFieldUpdateOperationsInput | string
    change_date?: DateTimeFieldUpdateOperationsInput | Date | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type logoCreateInput = {
    logo_path: string
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    is_deleted?: boolean
    user: userCreateNestedOneWithoutLogoInput
    url?: urlCreateNestedManyWithoutLogoInput
  }

  export type logoUncheckedCreateInput = {
    logo_id?: number
    user_id: string
    logo_path: string
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    is_deleted?: boolean
    url?: urlUncheckedCreateNestedManyWithoutLogoInput
  }

  export type logoUpdateInput = {
    logo_path?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    user?: userUpdateOneRequiredWithoutLogoNestedInput
    url?: urlUpdateManyWithoutLogoNestedInput
  }

  export type logoUncheckedUpdateInput = {
    logo_id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    logo_path?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    url?: urlUncheckedUpdateManyWithoutLogoNestedInput
  }

  export type logoCreateManyInput = {
    logo_id?: number
    user_id: string
    logo_path: string
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    is_deleted?: boolean
  }

  export type logoUpdateManyMutationInput = {
    logo_path?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type logoUncheckedUpdateManyInput = {
    logo_id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    logo_path?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type urlCreateInput = {
    url_id?: string
    original_url?: string | null
    short_url: string
    url_type?: string | null
    associated?: boolean
    expiration_date?: Date | string | null
    status?: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
    is_pre_generated?: boolean
    associated_at?: Date | string | null
    audit_log?: audit_logCreateNestedManyWithoutUrlInput
    logo?: logoCreateNestedOneWithoutUrlInput
    url_tag?: url_tagCreateNestedOneWithoutUrlInput
    user?: userCreateNestedOneWithoutUrlInput
    url_click?: url_clickCreateNestedManyWithoutUrlInput
  }

  export type urlUncheckedCreateInput = {
    url_id?: string
    user_id?: string | null
    original_url?: string | null
    short_url: string
    logo_id?: number | null
    tag_id?: number | null
    url_type?: string | null
    associated?: boolean
    expiration_date?: Date | string | null
    status?: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
    is_pre_generated?: boolean
    associated_at?: Date | string | null
    audit_log?: audit_logUncheckedCreateNestedManyWithoutUrlInput
    url_click?: url_clickUncheckedCreateNestedManyWithoutUrlInput
  }

  export type urlUpdateInput = {
    url_id?: StringFieldUpdateOperationsInput | string
    original_url?: NullableStringFieldUpdateOperationsInput | string | null
    short_url?: StringFieldUpdateOperationsInput | string
    url_type?: NullableStringFieldUpdateOperationsInput | string | null
    associated?: BoolFieldUpdateOperationsInput | boolean
    expiration_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    is_pre_generated?: BoolFieldUpdateOperationsInput | boolean
    associated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    audit_log?: audit_logUpdateManyWithoutUrlNestedInput
    logo?: logoUpdateOneWithoutUrlNestedInput
    url_tag?: url_tagUpdateOneWithoutUrlNestedInput
    user?: userUpdateOneWithoutUrlNestedInput
    url_click?: url_clickUpdateManyWithoutUrlNestedInput
  }

  export type urlUncheckedUpdateInput = {
    url_id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    original_url?: NullableStringFieldUpdateOperationsInput | string | null
    short_url?: StringFieldUpdateOperationsInput | string
    logo_id?: NullableIntFieldUpdateOperationsInput | number | null
    tag_id?: NullableIntFieldUpdateOperationsInput | number | null
    url_type?: NullableStringFieldUpdateOperationsInput | string | null
    associated?: BoolFieldUpdateOperationsInput | boolean
    expiration_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    is_pre_generated?: BoolFieldUpdateOperationsInput | boolean
    associated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    audit_log?: audit_logUncheckedUpdateManyWithoutUrlNestedInput
    url_click?: url_clickUncheckedUpdateManyWithoutUrlNestedInput
  }

  export type urlCreateManyInput = {
    url_id?: string
    user_id?: string | null
    original_url?: string | null
    short_url: string
    logo_id?: number | null
    tag_id?: number | null
    url_type?: string | null
    associated?: boolean
    expiration_date?: Date | string | null
    status?: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
    is_pre_generated?: boolean
    associated_at?: Date | string | null
  }

  export type urlUpdateManyMutationInput = {
    url_id?: StringFieldUpdateOperationsInput | string
    original_url?: NullableStringFieldUpdateOperationsInput | string | null
    short_url?: StringFieldUpdateOperationsInput | string
    url_type?: NullableStringFieldUpdateOperationsInput | string | null
    associated?: BoolFieldUpdateOperationsInput | boolean
    expiration_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    is_pre_generated?: BoolFieldUpdateOperationsInput | boolean
    associated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type urlUncheckedUpdateManyInput = {
    url_id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    original_url?: NullableStringFieldUpdateOperationsInput | string | null
    short_url?: StringFieldUpdateOperationsInput | string
    logo_id?: NullableIntFieldUpdateOperationsInput | number | null
    tag_id?: NullableIntFieldUpdateOperationsInput | number | null
    url_type?: NullableStringFieldUpdateOperationsInput | string | null
    associated?: BoolFieldUpdateOperationsInput | boolean
    expiration_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    is_pre_generated?: BoolFieldUpdateOperationsInput | boolean
    associated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type url_clickCreateInput = {
    access_date: Date | string
    access_time: Date | string
    ip_address: string
    user_agent: string
    referrer?: string | null
    country?: string | null
    city?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
    url: urlCreateNestedOneWithoutUrl_clickInput
  }

  export type url_clickUncheckedCreateInput = {
    click_id?: number
    url_id: string
    access_date: Date | string
    access_time: Date | string
    ip_address: string
    user_agent: string
    referrer?: string | null
    country?: string | null
    city?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
  }

  export type url_clickUpdateInput = {
    access_date?: DateTimeFieldUpdateOperationsInput | Date | string
    access_time?: DateTimeFieldUpdateOperationsInput | Date | string
    ip_address?: StringFieldUpdateOperationsInput | string
    user_agent?: StringFieldUpdateOperationsInput | string
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    url?: urlUpdateOneRequiredWithoutUrl_clickNestedInput
  }

  export type url_clickUncheckedUpdateInput = {
    click_id?: IntFieldUpdateOperationsInput | number
    url_id?: StringFieldUpdateOperationsInput | string
    access_date?: DateTimeFieldUpdateOperationsInput | Date | string
    access_time?: DateTimeFieldUpdateOperationsInput | Date | string
    ip_address?: StringFieldUpdateOperationsInput | string
    user_agent?: StringFieldUpdateOperationsInput | string
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type url_clickCreateManyInput = {
    click_id?: number
    url_id: string
    access_date: Date | string
    access_time: Date | string
    ip_address: string
    user_agent: string
    referrer?: string | null
    country?: string | null
    city?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
  }

  export type url_clickUpdateManyMutationInput = {
    access_date?: DateTimeFieldUpdateOperationsInput | Date | string
    access_time?: DateTimeFieldUpdateOperationsInput | Date | string
    ip_address?: StringFieldUpdateOperationsInput | string
    user_agent?: StringFieldUpdateOperationsInput | string
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type url_clickUncheckedUpdateManyInput = {
    click_id?: IntFieldUpdateOperationsInput | number
    url_id?: StringFieldUpdateOperationsInput | string
    access_date?: DateTimeFieldUpdateOperationsInput | Date | string
    access_time?: DateTimeFieldUpdateOperationsInput | Date | string
    ip_address?: StringFieldUpdateOperationsInput | string
    user_agent?: StringFieldUpdateOperationsInput | string
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type url_tagCreateInput = {
    tag_name: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
    url?: urlCreateNestedManyWithoutUrl_tagInput
    user: userCreateNestedOneWithoutUrl_tagInput
  }

  export type url_tagUncheckedCreateInput = {
    tag_id?: number
    user_id: string
    tag_name: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
    url?: urlUncheckedCreateNestedManyWithoutUrl_tagInput
  }

  export type url_tagUpdateInput = {
    tag_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    url?: urlUpdateManyWithoutUrl_tagNestedInput
    user?: userUpdateOneRequiredWithoutUrl_tagNestedInput
  }

  export type url_tagUncheckedUpdateInput = {
    tag_id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    tag_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    url?: urlUncheckedUpdateManyWithoutUrl_tagNestedInput
  }

  export type url_tagCreateManyInput = {
    tag_id?: number
    user_id: string
    tag_name: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
  }

  export type url_tagUpdateManyMutationInput = {
    tag_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type url_tagUncheckedUpdateManyInput = {
    tag_id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    tag_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type userCreateInput = {
    user_id?: string
    username: string
    email: string
    password_hash: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
    api_key?: api_keyCreateNestedManyWithoutUserInput
    audit_log?: audit_logCreateNestedManyWithoutUserInput
    logo?: logoCreateNestedManyWithoutUserInput
    url?: urlCreateNestedManyWithoutUserInput
    url_tag?: url_tagCreateNestedManyWithoutUserInput
    user_role: user_roleCreateNestedOneWithoutUserInput
  }

  export type userUncheckedCreateInput = {
    user_id?: string
    username: string
    email: string
    password_hash: string
    role_id: number
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
    api_key?: api_keyUncheckedCreateNestedManyWithoutUserInput
    audit_log?: audit_logUncheckedCreateNestedManyWithoutUserInput
    logo?: logoUncheckedCreateNestedManyWithoutUserInput
    url?: urlUncheckedCreateNestedManyWithoutUserInput
    url_tag?: url_tagUncheckedCreateNestedManyWithoutUserInput
  }

  export type userUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    api_key?: api_keyUpdateManyWithoutUserNestedInput
    audit_log?: audit_logUpdateManyWithoutUserNestedInput
    logo?: logoUpdateManyWithoutUserNestedInput
    url?: urlUpdateManyWithoutUserNestedInput
    url_tag?: url_tagUpdateManyWithoutUserNestedInput
    user_role?: user_roleUpdateOneRequiredWithoutUserNestedInput
  }

  export type userUncheckedUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    api_key?: api_keyUncheckedUpdateManyWithoutUserNestedInput
    audit_log?: audit_logUncheckedUpdateManyWithoutUserNestedInput
    logo?: logoUncheckedUpdateManyWithoutUserNestedInput
    url?: urlUncheckedUpdateManyWithoutUserNestedInput
    url_tag?: url_tagUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userCreateManyInput = {
    user_id?: string
    username: string
    email: string
    password_hash: string
    role_id: number
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
  }

  export type userUpdateManyMutationInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type userUncheckedUpdateManyInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type user_roleCreateInput = {
    role_name: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
    user?: userCreateNestedManyWithoutUser_roleInput
  }

  export type user_roleUncheckedCreateInput = {
    role_id?: number
    role_name: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
    user?: userUncheckedCreateNestedManyWithoutUser_roleInput
  }

  export type user_roleUpdateInput = {
    role_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    user?: userUpdateManyWithoutUser_roleNestedInput
  }

  export type user_roleUncheckedUpdateInput = {
    role_id?: IntFieldUpdateOperationsInput | number
    role_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    user?: userUncheckedUpdateManyWithoutUser_roleNestedInput
  }

  export type user_roleCreateManyInput = {
    role_id?: number
    role_name: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
  }

  export type user_roleUpdateManyMutationInput = {
    role_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type user_roleUncheckedUpdateManyInput = {
    role_id?: IntFieldUpdateOperationsInput | number
    role_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
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

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserScalarRelationFilter = {
    is?: userWhereInput
    isNot?: userWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type api_keyCountOrderByAggregateInput = {
    api_key_id?: SortOrder
    user_id?: SortOrder
    api_key?: SortOrder
    created_at?: SortOrder
    expires_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    is_deleted?: SortOrder
  }

  export type api_keyAvgOrderByAggregateInput = {
    api_key_id?: SortOrder
  }

  export type api_keyMaxOrderByAggregateInput = {
    api_key_id?: SortOrder
    user_id?: SortOrder
    api_key?: SortOrder
    created_at?: SortOrder
    expires_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    is_deleted?: SortOrder
  }

  export type api_keyMinOrderByAggregateInput = {
    api_key_id?: SortOrder
    user_id?: SortOrder
    api_key?: SortOrder
    created_at?: SortOrder
    expires_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    is_deleted?: SortOrder
  }

  export type api_keySumOrderByAggregateInput = {
    api_key_id?: SortOrder
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

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type UrlScalarRelationFilter = {
    is?: urlWhereInput
    isNot?: urlWhereInput
  }

  export type audit_logCountOrderByAggregateInput = {
    audit_id?: SortOrder
    url_id?: SortOrder
    action?: SortOrder
    changed_by?: SortOrder
    change_date?: SortOrder
    details?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    is_deleted?: SortOrder
  }

  export type audit_logAvgOrderByAggregateInput = {
    audit_id?: SortOrder
  }

  export type audit_logMaxOrderByAggregateInput = {
    audit_id?: SortOrder
    url_id?: SortOrder
    action?: SortOrder
    changed_by?: SortOrder
    change_date?: SortOrder
    details?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    is_deleted?: SortOrder
  }

  export type audit_logMinOrderByAggregateInput = {
    audit_id?: SortOrder
    url_id?: SortOrder
    action?: SortOrder
    changed_by?: SortOrder
    change_date?: SortOrder
    details?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    is_deleted?: SortOrder
  }

  export type audit_logSumOrderByAggregateInput = {
    audit_id?: SortOrder
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

  export type UrlListRelationFilter = {
    every?: urlWhereInput
    some?: urlWhereInput
    none?: urlWhereInput
  }

  export type urlOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type logoCountOrderByAggregateInput = {
    logo_id?: SortOrder
    user_id?: SortOrder
    logo_path?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    is_deleted?: SortOrder
  }

  export type logoAvgOrderByAggregateInput = {
    logo_id?: SortOrder
  }

  export type logoMaxOrderByAggregateInput = {
    logo_id?: SortOrder
    user_id?: SortOrder
    logo_path?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    is_deleted?: SortOrder
  }

  export type logoMinOrderByAggregateInput = {
    logo_id?: SortOrder
    user_id?: SortOrder
    logo_path?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    is_deleted?: SortOrder
  }

  export type logoSumOrderByAggregateInput = {
    logo_id?: SortOrder
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type Audit_logListRelationFilter = {
    every?: audit_logWhereInput
    some?: audit_logWhereInput
    none?: audit_logWhereInput
  }

  export type LogoNullableScalarRelationFilter = {
    is?: logoWhereInput | null
    isNot?: logoWhereInput | null
  }

  export type Url_tagNullableScalarRelationFilter = {
    is?: url_tagWhereInput | null
    isNot?: url_tagWhereInput | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: userWhereInput | null
    isNot?: userWhereInput | null
  }

  export type Url_clickListRelationFilter = {
    every?: url_clickWhereInput
    some?: url_clickWhereInput
    none?: url_clickWhereInput
  }

  export type audit_logOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type url_clickOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type urlCountOrderByAggregateInput = {
    url_id?: SortOrder
    user_id?: SortOrder
    original_url?: SortOrder
    short_url?: SortOrder
    logo_id?: SortOrder
    tag_id?: SortOrder
    url_type?: SortOrder
    associated?: SortOrder
    expiration_date?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    is_deleted?: SortOrder
    is_pre_generated?: SortOrder
    associated_at?: SortOrder
  }

  export type urlAvgOrderByAggregateInput = {
    logo_id?: SortOrder
    tag_id?: SortOrder
  }

  export type urlMaxOrderByAggregateInput = {
    url_id?: SortOrder
    user_id?: SortOrder
    original_url?: SortOrder
    short_url?: SortOrder
    logo_id?: SortOrder
    tag_id?: SortOrder
    url_type?: SortOrder
    associated?: SortOrder
    expiration_date?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    is_deleted?: SortOrder
    is_pre_generated?: SortOrder
    associated_at?: SortOrder
  }

  export type urlMinOrderByAggregateInput = {
    url_id?: SortOrder
    user_id?: SortOrder
    original_url?: SortOrder
    short_url?: SortOrder
    logo_id?: SortOrder
    tag_id?: SortOrder
    url_type?: SortOrder
    associated?: SortOrder
    expiration_date?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    is_deleted?: SortOrder
    is_pre_generated?: SortOrder
    associated_at?: SortOrder
  }

  export type urlSumOrderByAggregateInput = {
    logo_id?: SortOrder
    tag_id?: SortOrder
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type url_clickCountOrderByAggregateInput = {
    click_id?: SortOrder
    url_id?: SortOrder
    access_date?: SortOrder
    access_time?: SortOrder
    ip_address?: SortOrder
    user_agent?: SortOrder
    referrer?: SortOrder
    country?: SortOrder
    city?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    is_deleted?: SortOrder
  }

  export type url_clickAvgOrderByAggregateInput = {
    click_id?: SortOrder
  }

  export type url_clickMaxOrderByAggregateInput = {
    click_id?: SortOrder
    url_id?: SortOrder
    access_date?: SortOrder
    access_time?: SortOrder
    ip_address?: SortOrder
    user_agent?: SortOrder
    referrer?: SortOrder
    country?: SortOrder
    city?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    is_deleted?: SortOrder
  }

  export type url_clickMinOrderByAggregateInput = {
    click_id?: SortOrder
    url_id?: SortOrder
    access_date?: SortOrder
    access_time?: SortOrder
    ip_address?: SortOrder
    user_agent?: SortOrder
    referrer?: SortOrder
    country?: SortOrder
    city?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    is_deleted?: SortOrder
  }

  export type url_clickSumOrderByAggregateInput = {
    click_id?: SortOrder
  }

  export type url_tagCountOrderByAggregateInput = {
    tag_id?: SortOrder
    user_id?: SortOrder
    tag_name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    is_deleted?: SortOrder
  }

  export type url_tagAvgOrderByAggregateInput = {
    tag_id?: SortOrder
  }

  export type url_tagMaxOrderByAggregateInput = {
    tag_id?: SortOrder
    user_id?: SortOrder
    tag_name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    is_deleted?: SortOrder
  }

  export type url_tagMinOrderByAggregateInput = {
    tag_id?: SortOrder
    user_id?: SortOrder
    tag_name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    is_deleted?: SortOrder
  }

  export type url_tagSumOrderByAggregateInput = {
    tag_id?: SortOrder
  }

  export type Api_keyListRelationFilter = {
    every?: api_keyWhereInput
    some?: api_keyWhereInput
    none?: api_keyWhereInput
  }

  export type LogoListRelationFilter = {
    every?: logoWhereInput
    some?: logoWhereInput
    none?: logoWhereInput
  }

  export type Url_tagListRelationFilter = {
    every?: url_tagWhereInput
    some?: url_tagWhereInput
    none?: url_tagWhereInput
  }

  export type User_roleScalarRelationFilter = {
    is?: user_roleWhereInput
    isNot?: user_roleWhereInput
  }

  export type api_keyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type logoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type url_tagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userCountOrderByAggregateInput = {
    user_id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    role_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    is_deleted?: SortOrder
  }

  export type userAvgOrderByAggregateInput = {
    role_id?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    user_id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    role_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    is_deleted?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    user_id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    role_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    is_deleted?: SortOrder
  }

  export type userSumOrderByAggregateInput = {
    role_id?: SortOrder
  }

  export type UserListRelationFilter = {
    every?: userWhereInput
    some?: userWhereInput
    none?: userWhereInput
  }

  export type userOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type user_roleCountOrderByAggregateInput = {
    role_id?: SortOrder
    role_name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    is_deleted?: SortOrder
  }

  export type user_roleAvgOrderByAggregateInput = {
    role_id?: SortOrder
  }

  export type user_roleMaxOrderByAggregateInput = {
    role_id?: SortOrder
    role_name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    is_deleted?: SortOrder
  }

  export type user_roleMinOrderByAggregateInput = {
    role_id?: SortOrder
    role_name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    is_deleted?: SortOrder
  }

  export type user_roleSumOrderByAggregateInput = {
    role_id?: SortOrder
  }

  export type userCreateNestedOneWithoutApi_keyInput = {
    create?: XOR<userCreateWithoutApi_keyInput, userUncheckedCreateWithoutApi_keyInput>
    connectOrCreate?: userCreateOrConnectWithoutApi_keyInput
    connect?: userWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type userUpdateOneRequiredWithoutApi_keyNestedInput = {
    create?: XOR<userCreateWithoutApi_keyInput, userUncheckedCreateWithoutApi_keyInput>
    connectOrCreate?: userCreateOrConnectWithoutApi_keyInput
    upsert?: userUpsertWithoutApi_keyInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutApi_keyInput, userUpdateWithoutApi_keyInput>, userUncheckedUpdateWithoutApi_keyInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type userCreateNestedOneWithoutAudit_logInput = {
    create?: XOR<userCreateWithoutAudit_logInput, userUncheckedCreateWithoutAudit_logInput>
    connectOrCreate?: userCreateOrConnectWithoutAudit_logInput
    connect?: userWhereUniqueInput
  }

  export type urlCreateNestedOneWithoutAudit_logInput = {
    create?: XOR<urlCreateWithoutAudit_logInput, urlUncheckedCreateWithoutAudit_logInput>
    connectOrCreate?: urlCreateOrConnectWithoutAudit_logInput
    connect?: urlWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type userUpdateOneRequiredWithoutAudit_logNestedInput = {
    create?: XOR<userCreateWithoutAudit_logInput, userUncheckedCreateWithoutAudit_logInput>
    connectOrCreate?: userCreateOrConnectWithoutAudit_logInput
    upsert?: userUpsertWithoutAudit_logInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutAudit_logInput, userUpdateWithoutAudit_logInput>, userUncheckedUpdateWithoutAudit_logInput>
  }

  export type urlUpdateOneRequiredWithoutAudit_logNestedInput = {
    create?: XOR<urlCreateWithoutAudit_logInput, urlUncheckedCreateWithoutAudit_logInput>
    connectOrCreate?: urlCreateOrConnectWithoutAudit_logInput
    upsert?: urlUpsertWithoutAudit_logInput
    connect?: urlWhereUniqueInput
    update?: XOR<XOR<urlUpdateToOneWithWhereWithoutAudit_logInput, urlUpdateWithoutAudit_logInput>, urlUncheckedUpdateWithoutAudit_logInput>
  }

  export type userCreateNestedOneWithoutLogoInput = {
    create?: XOR<userCreateWithoutLogoInput, userUncheckedCreateWithoutLogoInput>
    connectOrCreate?: userCreateOrConnectWithoutLogoInput
    connect?: userWhereUniqueInput
  }

  export type urlCreateNestedManyWithoutLogoInput = {
    create?: XOR<urlCreateWithoutLogoInput, urlUncheckedCreateWithoutLogoInput> | urlCreateWithoutLogoInput[] | urlUncheckedCreateWithoutLogoInput[]
    connectOrCreate?: urlCreateOrConnectWithoutLogoInput | urlCreateOrConnectWithoutLogoInput[]
    createMany?: urlCreateManyLogoInputEnvelope
    connect?: urlWhereUniqueInput | urlWhereUniqueInput[]
  }

  export type urlUncheckedCreateNestedManyWithoutLogoInput = {
    create?: XOR<urlCreateWithoutLogoInput, urlUncheckedCreateWithoutLogoInput> | urlCreateWithoutLogoInput[] | urlUncheckedCreateWithoutLogoInput[]
    connectOrCreate?: urlCreateOrConnectWithoutLogoInput | urlCreateOrConnectWithoutLogoInput[]
    createMany?: urlCreateManyLogoInputEnvelope
    connect?: urlWhereUniqueInput | urlWhereUniqueInput[]
  }

  export type userUpdateOneRequiredWithoutLogoNestedInput = {
    create?: XOR<userCreateWithoutLogoInput, userUncheckedCreateWithoutLogoInput>
    connectOrCreate?: userCreateOrConnectWithoutLogoInput
    upsert?: userUpsertWithoutLogoInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutLogoInput, userUpdateWithoutLogoInput>, userUncheckedUpdateWithoutLogoInput>
  }

  export type urlUpdateManyWithoutLogoNestedInput = {
    create?: XOR<urlCreateWithoutLogoInput, urlUncheckedCreateWithoutLogoInput> | urlCreateWithoutLogoInput[] | urlUncheckedCreateWithoutLogoInput[]
    connectOrCreate?: urlCreateOrConnectWithoutLogoInput | urlCreateOrConnectWithoutLogoInput[]
    upsert?: urlUpsertWithWhereUniqueWithoutLogoInput | urlUpsertWithWhereUniqueWithoutLogoInput[]
    createMany?: urlCreateManyLogoInputEnvelope
    set?: urlWhereUniqueInput | urlWhereUniqueInput[]
    disconnect?: urlWhereUniqueInput | urlWhereUniqueInput[]
    delete?: urlWhereUniqueInput | urlWhereUniqueInput[]
    connect?: urlWhereUniqueInput | urlWhereUniqueInput[]
    update?: urlUpdateWithWhereUniqueWithoutLogoInput | urlUpdateWithWhereUniqueWithoutLogoInput[]
    updateMany?: urlUpdateManyWithWhereWithoutLogoInput | urlUpdateManyWithWhereWithoutLogoInput[]
    deleteMany?: urlScalarWhereInput | urlScalarWhereInput[]
  }

  export type urlUncheckedUpdateManyWithoutLogoNestedInput = {
    create?: XOR<urlCreateWithoutLogoInput, urlUncheckedCreateWithoutLogoInput> | urlCreateWithoutLogoInput[] | urlUncheckedCreateWithoutLogoInput[]
    connectOrCreate?: urlCreateOrConnectWithoutLogoInput | urlCreateOrConnectWithoutLogoInput[]
    upsert?: urlUpsertWithWhereUniqueWithoutLogoInput | urlUpsertWithWhereUniqueWithoutLogoInput[]
    createMany?: urlCreateManyLogoInputEnvelope
    set?: urlWhereUniqueInput | urlWhereUniqueInput[]
    disconnect?: urlWhereUniqueInput | urlWhereUniqueInput[]
    delete?: urlWhereUniqueInput | urlWhereUniqueInput[]
    connect?: urlWhereUniqueInput | urlWhereUniqueInput[]
    update?: urlUpdateWithWhereUniqueWithoutLogoInput | urlUpdateWithWhereUniqueWithoutLogoInput[]
    updateMany?: urlUpdateManyWithWhereWithoutLogoInput | urlUpdateManyWithWhereWithoutLogoInput[]
    deleteMany?: urlScalarWhereInput | urlScalarWhereInput[]
  }

  export type audit_logCreateNestedManyWithoutUrlInput = {
    create?: XOR<audit_logCreateWithoutUrlInput, audit_logUncheckedCreateWithoutUrlInput> | audit_logCreateWithoutUrlInput[] | audit_logUncheckedCreateWithoutUrlInput[]
    connectOrCreate?: audit_logCreateOrConnectWithoutUrlInput | audit_logCreateOrConnectWithoutUrlInput[]
    createMany?: audit_logCreateManyUrlInputEnvelope
    connect?: audit_logWhereUniqueInput | audit_logWhereUniqueInput[]
  }

  export type logoCreateNestedOneWithoutUrlInput = {
    create?: XOR<logoCreateWithoutUrlInput, logoUncheckedCreateWithoutUrlInput>
    connectOrCreate?: logoCreateOrConnectWithoutUrlInput
    connect?: logoWhereUniqueInput
  }

  export type url_tagCreateNestedOneWithoutUrlInput = {
    create?: XOR<url_tagCreateWithoutUrlInput, url_tagUncheckedCreateWithoutUrlInput>
    connectOrCreate?: url_tagCreateOrConnectWithoutUrlInput
    connect?: url_tagWhereUniqueInput
  }

  export type userCreateNestedOneWithoutUrlInput = {
    create?: XOR<userCreateWithoutUrlInput, userUncheckedCreateWithoutUrlInput>
    connectOrCreate?: userCreateOrConnectWithoutUrlInput
    connect?: userWhereUniqueInput
  }

  export type url_clickCreateNestedManyWithoutUrlInput = {
    create?: XOR<url_clickCreateWithoutUrlInput, url_clickUncheckedCreateWithoutUrlInput> | url_clickCreateWithoutUrlInput[] | url_clickUncheckedCreateWithoutUrlInput[]
    connectOrCreate?: url_clickCreateOrConnectWithoutUrlInput | url_clickCreateOrConnectWithoutUrlInput[]
    createMany?: url_clickCreateManyUrlInputEnvelope
    connect?: url_clickWhereUniqueInput | url_clickWhereUniqueInput[]
  }

  export type audit_logUncheckedCreateNestedManyWithoutUrlInput = {
    create?: XOR<audit_logCreateWithoutUrlInput, audit_logUncheckedCreateWithoutUrlInput> | audit_logCreateWithoutUrlInput[] | audit_logUncheckedCreateWithoutUrlInput[]
    connectOrCreate?: audit_logCreateOrConnectWithoutUrlInput | audit_logCreateOrConnectWithoutUrlInput[]
    createMany?: audit_logCreateManyUrlInputEnvelope
    connect?: audit_logWhereUniqueInput | audit_logWhereUniqueInput[]
  }

  export type url_clickUncheckedCreateNestedManyWithoutUrlInput = {
    create?: XOR<url_clickCreateWithoutUrlInput, url_clickUncheckedCreateWithoutUrlInput> | url_clickCreateWithoutUrlInput[] | url_clickUncheckedCreateWithoutUrlInput[]
    connectOrCreate?: url_clickCreateOrConnectWithoutUrlInput | url_clickCreateOrConnectWithoutUrlInput[]
    createMany?: url_clickCreateManyUrlInputEnvelope
    connect?: url_clickWhereUniqueInput | url_clickWhereUniqueInput[]
  }

  export type audit_logUpdateManyWithoutUrlNestedInput = {
    create?: XOR<audit_logCreateWithoutUrlInput, audit_logUncheckedCreateWithoutUrlInput> | audit_logCreateWithoutUrlInput[] | audit_logUncheckedCreateWithoutUrlInput[]
    connectOrCreate?: audit_logCreateOrConnectWithoutUrlInput | audit_logCreateOrConnectWithoutUrlInput[]
    upsert?: audit_logUpsertWithWhereUniqueWithoutUrlInput | audit_logUpsertWithWhereUniqueWithoutUrlInput[]
    createMany?: audit_logCreateManyUrlInputEnvelope
    set?: audit_logWhereUniqueInput | audit_logWhereUniqueInput[]
    disconnect?: audit_logWhereUniqueInput | audit_logWhereUniqueInput[]
    delete?: audit_logWhereUniqueInput | audit_logWhereUniqueInput[]
    connect?: audit_logWhereUniqueInput | audit_logWhereUniqueInput[]
    update?: audit_logUpdateWithWhereUniqueWithoutUrlInput | audit_logUpdateWithWhereUniqueWithoutUrlInput[]
    updateMany?: audit_logUpdateManyWithWhereWithoutUrlInput | audit_logUpdateManyWithWhereWithoutUrlInput[]
    deleteMany?: audit_logScalarWhereInput | audit_logScalarWhereInput[]
  }

  export type logoUpdateOneWithoutUrlNestedInput = {
    create?: XOR<logoCreateWithoutUrlInput, logoUncheckedCreateWithoutUrlInput>
    connectOrCreate?: logoCreateOrConnectWithoutUrlInput
    upsert?: logoUpsertWithoutUrlInput
    disconnect?: logoWhereInput | boolean
    delete?: logoWhereInput | boolean
    connect?: logoWhereUniqueInput
    update?: XOR<XOR<logoUpdateToOneWithWhereWithoutUrlInput, logoUpdateWithoutUrlInput>, logoUncheckedUpdateWithoutUrlInput>
  }

  export type url_tagUpdateOneWithoutUrlNestedInput = {
    create?: XOR<url_tagCreateWithoutUrlInput, url_tagUncheckedCreateWithoutUrlInput>
    connectOrCreate?: url_tagCreateOrConnectWithoutUrlInput
    upsert?: url_tagUpsertWithoutUrlInput
    disconnect?: url_tagWhereInput | boolean
    delete?: url_tagWhereInput | boolean
    connect?: url_tagWhereUniqueInput
    update?: XOR<XOR<url_tagUpdateToOneWithWhereWithoutUrlInput, url_tagUpdateWithoutUrlInput>, url_tagUncheckedUpdateWithoutUrlInput>
  }

  export type userUpdateOneWithoutUrlNestedInput = {
    create?: XOR<userCreateWithoutUrlInput, userUncheckedCreateWithoutUrlInput>
    connectOrCreate?: userCreateOrConnectWithoutUrlInput
    upsert?: userUpsertWithoutUrlInput
    disconnect?: userWhereInput | boolean
    delete?: userWhereInput | boolean
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutUrlInput, userUpdateWithoutUrlInput>, userUncheckedUpdateWithoutUrlInput>
  }

  export type url_clickUpdateManyWithoutUrlNestedInput = {
    create?: XOR<url_clickCreateWithoutUrlInput, url_clickUncheckedCreateWithoutUrlInput> | url_clickCreateWithoutUrlInput[] | url_clickUncheckedCreateWithoutUrlInput[]
    connectOrCreate?: url_clickCreateOrConnectWithoutUrlInput | url_clickCreateOrConnectWithoutUrlInput[]
    upsert?: url_clickUpsertWithWhereUniqueWithoutUrlInput | url_clickUpsertWithWhereUniqueWithoutUrlInput[]
    createMany?: url_clickCreateManyUrlInputEnvelope
    set?: url_clickWhereUniqueInput | url_clickWhereUniqueInput[]
    disconnect?: url_clickWhereUniqueInput | url_clickWhereUniqueInput[]
    delete?: url_clickWhereUniqueInput | url_clickWhereUniqueInput[]
    connect?: url_clickWhereUniqueInput | url_clickWhereUniqueInput[]
    update?: url_clickUpdateWithWhereUniqueWithoutUrlInput | url_clickUpdateWithWhereUniqueWithoutUrlInput[]
    updateMany?: url_clickUpdateManyWithWhereWithoutUrlInput | url_clickUpdateManyWithWhereWithoutUrlInput[]
    deleteMany?: url_clickScalarWhereInput | url_clickScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type audit_logUncheckedUpdateManyWithoutUrlNestedInput = {
    create?: XOR<audit_logCreateWithoutUrlInput, audit_logUncheckedCreateWithoutUrlInput> | audit_logCreateWithoutUrlInput[] | audit_logUncheckedCreateWithoutUrlInput[]
    connectOrCreate?: audit_logCreateOrConnectWithoutUrlInput | audit_logCreateOrConnectWithoutUrlInput[]
    upsert?: audit_logUpsertWithWhereUniqueWithoutUrlInput | audit_logUpsertWithWhereUniqueWithoutUrlInput[]
    createMany?: audit_logCreateManyUrlInputEnvelope
    set?: audit_logWhereUniqueInput | audit_logWhereUniqueInput[]
    disconnect?: audit_logWhereUniqueInput | audit_logWhereUniqueInput[]
    delete?: audit_logWhereUniqueInput | audit_logWhereUniqueInput[]
    connect?: audit_logWhereUniqueInput | audit_logWhereUniqueInput[]
    update?: audit_logUpdateWithWhereUniqueWithoutUrlInput | audit_logUpdateWithWhereUniqueWithoutUrlInput[]
    updateMany?: audit_logUpdateManyWithWhereWithoutUrlInput | audit_logUpdateManyWithWhereWithoutUrlInput[]
    deleteMany?: audit_logScalarWhereInput | audit_logScalarWhereInput[]
  }

  export type url_clickUncheckedUpdateManyWithoutUrlNestedInput = {
    create?: XOR<url_clickCreateWithoutUrlInput, url_clickUncheckedCreateWithoutUrlInput> | url_clickCreateWithoutUrlInput[] | url_clickUncheckedCreateWithoutUrlInput[]
    connectOrCreate?: url_clickCreateOrConnectWithoutUrlInput | url_clickCreateOrConnectWithoutUrlInput[]
    upsert?: url_clickUpsertWithWhereUniqueWithoutUrlInput | url_clickUpsertWithWhereUniqueWithoutUrlInput[]
    createMany?: url_clickCreateManyUrlInputEnvelope
    set?: url_clickWhereUniqueInput | url_clickWhereUniqueInput[]
    disconnect?: url_clickWhereUniqueInput | url_clickWhereUniqueInput[]
    delete?: url_clickWhereUniqueInput | url_clickWhereUniqueInput[]
    connect?: url_clickWhereUniqueInput | url_clickWhereUniqueInput[]
    update?: url_clickUpdateWithWhereUniqueWithoutUrlInput | url_clickUpdateWithWhereUniqueWithoutUrlInput[]
    updateMany?: url_clickUpdateManyWithWhereWithoutUrlInput | url_clickUpdateManyWithWhereWithoutUrlInput[]
    deleteMany?: url_clickScalarWhereInput | url_clickScalarWhereInput[]
  }

  export type urlCreateNestedOneWithoutUrl_clickInput = {
    create?: XOR<urlCreateWithoutUrl_clickInput, urlUncheckedCreateWithoutUrl_clickInput>
    connectOrCreate?: urlCreateOrConnectWithoutUrl_clickInput
    connect?: urlWhereUniqueInput
  }

  export type urlUpdateOneRequiredWithoutUrl_clickNestedInput = {
    create?: XOR<urlCreateWithoutUrl_clickInput, urlUncheckedCreateWithoutUrl_clickInput>
    connectOrCreate?: urlCreateOrConnectWithoutUrl_clickInput
    upsert?: urlUpsertWithoutUrl_clickInput
    connect?: urlWhereUniqueInput
    update?: XOR<XOR<urlUpdateToOneWithWhereWithoutUrl_clickInput, urlUpdateWithoutUrl_clickInput>, urlUncheckedUpdateWithoutUrl_clickInput>
  }

  export type urlCreateNestedManyWithoutUrl_tagInput = {
    create?: XOR<urlCreateWithoutUrl_tagInput, urlUncheckedCreateWithoutUrl_tagInput> | urlCreateWithoutUrl_tagInput[] | urlUncheckedCreateWithoutUrl_tagInput[]
    connectOrCreate?: urlCreateOrConnectWithoutUrl_tagInput | urlCreateOrConnectWithoutUrl_tagInput[]
    createMany?: urlCreateManyUrl_tagInputEnvelope
    connect?: urlWhereUniqueInput | urlWhereUniqueInput[]
  }

  export type userCreateNestedOneWithoutUrl_tagInput = {
    create?: XOR<userCreateWithoutUrl_tagInput, userUncheckedCreateWithoutUrl_tagInput>
    connectOrCreate?: userCreateOrConnectWithoutUrl_tagInput
    connect?: userWhereUniqueInput
  }

  export type urlUncheckedCreateNestedManyWithoutUrl_tagInput = {
    create?: XOR<urlCreateWithoutUrl_tagInput, urlUncheckedCreateWithoutUrl_tagInput> | urlCreateWithoutUrl_tagInput[] | urlUncheckedCreateWithoutUrl_tagInput[]
    connectOrCreate?: urlCreateOrConnectWithoutUrl_tagInput | urlCreateOrConnectWithoutUrl_tagInput[]
    createMany?: urlCreateManyUrl_tagInputEnvelope
    connect?: urlWhereUniqueInput | urlWhereUniqueInput[]
  }

  export type urlUpdateManyWithoutUrl_tagNestedInput = {
    create?: XOR<urlCreateWithoutUrl_tagInput, urlUncheckedCreateWithoutUrl_tagInput> | urlCreateWithoutUrl_tagInput[] | urlUncheckedCreateWithoutUrl_tagInput[]
    connectOrCreate?: urlCreateOrConnectWithoutUrl_tagInput | urlCreateOrConnectWithoutUrl_tagInput[]
    upsert?: urlUpsertWithWhereUniqueWithoutUrl_tagInput | urlUpsertWithWhereUniqueWithoutUrl_tagInput[]
    createMany?: urlCreateManyUrl_tagInputEnvelope
    set?: urlWhereUniqueInput | urlWhereUniqueInput[]
    disconnect?: urlWhereUniqueInput | urlWhereUniqueInput[]
    delete?: urlWhereUniqueInput | urlWhereUniqueInput[]
    connect?: urlWhereUniqueInput | urlWhereUniqueInput[]
    update?: urlUpdateWithWhereUniqueWithoutUrl_tagInput | urlUpdateWithWhereUniqueWithoutUrl_tagInput[]
    updateMany?: urlUpdateManyWithWhereWithoutUrl_tagInput | urlUpdateManyWithWhereWithoutUrl_tagInput[]
    deleteMany?: urlScalarWhereInput | urlScalarWhereInput[]
  }

  export type userUpdateOneRequiredWithoutUrl_tagNestedInput = {
    create?: XOR<userCreateWithoutUrl_tagInput, userUncheckedCreateWithoutUrl_tagInput>
    connectOrCreate?: userCreateOrConnectWithoutUrl_tagInput
    upsert?: userUpsertWithoutUrl_tagInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutUrl_tagInput, userUpdateWithoutUrl_tagInput>, userUncheckedUpdateWithoutUrl_tagInput>
  }

  export type urlUncheckedUpdateManyWithoutUrl_tagNestedInput = {
    create?: XOR<urlCreateWithoutUrl_tagInput, urlUncheckedCreateWithoutUrl_tagInput> | urlCreateWithoutUrl_tagInput[] | urlUncheckedCreateWithoutUrl_tagInput[]
    connectOrCreate?: urlCreateOrConnectWithoutUrl_tagInput | urlCreateOrConnectWithoutUrl_tagInput[]
    upsert?: urlUpsertWithWhereUniqueWithoutUrl_tagInput | urlUpsertWithWhereUniqueWithoutUrl_tagInput[]
    createMany?: urlCreateManyUrl_tagInputEnvelope
    set?: urlWhereUniqueInput | urlWhereUniqueInput[]
    disconnect?: urlWhereUniqueInput | urlWhereUniqueInput[]
    delete?: urlWhereUniqueInput | urlWhereUniqueInput[]
    connect?: urlWhereUniqueInput | urlWhereUniqueInput[]
    update?: urlUpdateWithWhereUniqueWithoutUrl_tagInput | urlUpdateWithWhereUniqueWithoutUrl_tagInput[]
    updateMany?: urlUpdateManyWithWhereWithoutUrl_tagInput | urlUpdateManyWithWhereWithoutUrl_tagInput[]
    deleteMany?: urlScalarWhereInput | urlScalarWhereInput[]
  }

  export type api_keyCreateNestedManyWithoutUserInput = {
    create?: XOR<api_keyCreateWithoutUserInput, api_keyUncheckedCreateWithoutUserInput> | api_keyCreateWithoutUserInput[] | api_keyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: api_keyCreateOrConnectWithoutUserInput | api_keyCreateOrConnectWithoutUserInput[]
    createMany?: api_keyCreateManyUserInputEnvelope
    connect?: api_keyWhereUniqueInput | api_keyWhereUniqueInput[]
  }

  export type audit_logCreateNestedManyWithoutUserInput = {
    create?: XOR<audit_logCreateWithoutUserInput, audit_logUncheckedCreateWithoutUserInput> | audit_logCreateWithoutUserInput[] | audit_logUncheckedCreateWithoutUserInput[]
    connectOrCreate?: audit_logCreateOrConnectWithoutUserInput | audit_logCreateOrConnectWithoutUserInput[]
    createMany?: audit_logCreateManyUserInputEnvelope
    connect?: audit_logWhereUniqueInput | audit_logWhereUniqueInput[]
  }

  export type logoCreateNestedManyWithoutUserInput = {
    create?: XOR<logoCreateWithoutUserInput, logoUncheckedCreateWithoutUserInput> | logoCreateWithoutUserInput[] | logoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: logoCreateOrConnectWithoutUserInput | logoCreateOrConnectWithoutUserInput[]
    createMany?: logoCreateManyUserInputEnvelope
    connect?: logoWhereUniqueInput | logoWhereUniqueInput[]
  }

  export type urlCreateNestedManyWithoutUserInput = {
    create?: XOR<urlCreateWithoutUserInput, urlUncheckedCreateWithoutUserInput> | urlCreateWithoutUserInput[] | urlUncheckedCreateWithoutUserInput[]
    connectOrCreate?: urlCreateOrConnectWithoutUserInput | urlCreateOrConnectWithoutUserInput[]
    createMany?: urlCreateManyUserInputEnvelope
    connect?: urlWhereUniqueInput | urlWhereUniqueInput[]
  }

  export type url_tagCreateNestedManyWithoutUserInput = {
    create?: XOR<url_tagCreateWithoutUserInput, url_tagUncheckedCreateWithoutUserInput> | url_tagCreateWithoutUserInput[] | url_tagUncheckedCreateWithoutUserInput[]
    connectOrCreate?: url_tagCreateOrConnectWithoutUserInput | url_tagCreateOrConnectWithoutUserInput[]
    createMany?: url_tagCreateManyUserInputEnvelope
    connect?: url_tagWhereUniqueInput | url_tagWhereUniqueInput[]
  }

  export type user_roleCreateNestedOneWithoutUserInput = {
    create?: XOR<user_roleCreateWithoutUserInput, user_roleUncheckedCreateWithoutUserInput>
    connectOrCreate?: user_roleCreateOrConnectWithoutUserInput
    connect?: user_roleWhereUniqueInput
  }

  export type api_keyUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<api_keyCreateWithoutUserInput, api_keyUncheckedCreateWithoutUserInput> | api_keyCreateWithoutUserInput[] | api_keyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: api_keyCreateOrConnectWithoutUserInput | api_keyCreateOrConnectWithoutUserInput[]
    createMany?: api_keyCreateManyUserInputEnvelope
    connect?: api_keyWhereUniqueInput | api_keyWhereUniqueInput[]
  }

  export type audit_logUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<audit_logCreateWithoutUserInput, audit_logUncheckedCreateWithoutUserInput> | audit_logCreateWithoutUserInput[] | audit_logUncheckedCreateWithoutUserInput[]
    connectOrCreate?: audit_logCreateOrConnectWithoutUserInput | audit_logCreateOrConnectWithoutUserInput[]
    createMany?: audit_logCreateManyUserInputEnvelope
    connect?: audit_logWhereUniqueInput | audit_logWhereUniqueInput[]
  }

  export type logoUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<logoCreateWithoutUserInput, logoUncheckedCreateWithoutUserInput> | logoCreateWithoutUserInput[] | logoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: logoCreateOrConnectWithoutUserInput | logoCreateOrConnectWithoutUserInput[]
    createMany?: logoCreateManyUserInputEnvelope
    connect?: logoWhereUniqueInput | logoWhereUniqueInput[]
  }

  export type urlUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<urlCreateWithoutUserInput, urlUncheckedCreateWithoutUserInput> | urlCreateWithoutUserInput[] | urlUncheckedCreateWithoutUserInput[]
    connectOrCreate?: urlCreateOrConnectWithoutUserInput | urlCreateOrConnectWithoutUserInput[]
    createMany?: urlCreateManyUserInputEnvelope
    connect?: urlWhereUniqueInput | urlWhereUniqueInput[]
  }

  export type url_tagUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<url_tagCreateWithoutUserInput, url_tagUncheckedCreateWithoutUserInput> | url_tagCreateWithoutUserInput[] | url_tagUncheckedCreateWithoutUserInput[]
    connectOrCreate?: url_tagCreateOrConnectWithoutUserInput | url_tagCreateOrConnectWithoutUserInput[]
    createMany?: url_tagCreateManyUserInputEnvelope
    connect?: url_tagWhereUniqueInput | url_tagWhereUniqueInput[]
  }

  export type api_keyUpdateManyWithoutUserNestedInput = {
    create?: XOR<api_keyCreateWithoutUserInput, api_keyUncheckedCreateWithoutUserInput> | api_keyCreateWithoutUserInput[] | api_keyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: api_keyCreateOrConnectWithoutUserInput | api_keyCreateOrConnectWithoutUserInput[]
    upsert?: api_keyUpsertWithWhereUniqueWithoutUserInput | api_keyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: api_keyCreateManyUserInputEnvelope
    set?: api_keyWhereUniqueInput | api_keyWhereUniqueInput[]
    disconnect?: api_keyWhereUniqueInput | api_keyWhereUniqueInput[]
    delete?: api_keyWhereUniqueInput | api_keyWhereUniqueInput[]
    connect?: api_keyWhereUniqueInput | api_keyWhereUniqueInput[]
    update?: api_keyUpdateWithWhereUniqueWithoutUserInput | api_keyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: api_keyUpdateManyWithWhereWithoutUserInput | api_keyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: api_keyScalarWhereInput | api_keyScalarWhereInput[]
  }

  export type audit_logUpdateManyWithoutUserNestedInput = {
    create?: XOR<audit_logCreateWithoutUserInput, audit_logUncheckedCreateWithoutUserInput> | audit_logCreateWithoutUserInput[] | audit_logUncheckedCreateWithoutUserInput[]
    connectOrCreate?: audit_logCreateOrConnectWithoutUserInput | audit_logCreateOrConnectWithoutUserInput[]
    upsert?: audit_logUpsertWithWhereUniqueWithoutUserInput | audit_logUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: audit_logCreateManyUserInputEnvelope
    set?: audit_logWhereUniqueInput | audit_logWhereUniqueInput[]
    disconnect?: audit_logWhereUniqueInput | audit_logWhereUniqueInput[]
    delete?: audit_logWhereUniqueInput | audit_logWhereUniqueInput[]
    connect?: audit_logWhereUniqueInput | audit_logWhereUniqueInput[]
    update?: audit_logUpdateWithWhereUniqueWithoutUserInput | audit_logUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: audit_logUpdateManyWithWhereWithoutUserInput | audit_logUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: audit_logScalarWhereInput | audit_logScalarWhereInput[]
  }

  export type logoUpdateManyWithoutUserNestedInput = {
    create?: XOR<logoCreateWithoutUserInput, logoUncheckedCreateWithoutUserInput> | logoCreateWithoutUserInput[] | logoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: logoCreateOrConnectWithoutUserInput | logoCreateOrConnectWithoutUserInput[]
    upsert?: logoUpsertWithWhereUniqueWithoutUserInput | logoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: logoCreateManyUserInputEnvelope
    set?: logoWhereUniqueInput | logoWhereUniqueInput[]
    disconnect?: logoWhereUniqueInput | logoWhereUniqueInput[]
    delete?: logoWhereUniqueInput | logoWhereUniqueInput[]
    connect?: logoWhereUniqueInput | logoWhereUniqueInput[]
    update?: logoUpdateWithWhereUniqueWithoutUserInput | logoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: logoUpdateManyWithWhereWithoutUserInput | logoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: logoScalarWhereInput | logoScalarWhereInput[]
  }

  export type urlUpdateManyWithoutUserNestedInput = {
    create?: XOR<urlCreateWithoutUserInput, urlUncheckedCreateWithoutUserInput> | urlCreateWithoutUserInput[] | urlUncheckedCreateWithoutUserInput[]
    connectOrCreate?: urlCreateOrConnectWithoutUserInput | urlCreateOrConnectWithoutUserInput[]
    upsert?: urlUpsertWithWhereUniqueWithoutUserInput | urlUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: urlCreateManyUserInputEnvelope
    set?: urlWhereUniqueInput | urlWhereUniqueInput[]
    disconnect?: urlWhereUniqueInput | urlWhereUniqueInput[]
    delete?: urlWhereUniqueInput | urlWhereUniqueInput[]
    connect?: urlWhereUniqueInput | urlWhereUniqueInput[]
    update?: urlUpdateWithWhereUniqueWithoutUserInput | urlUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: urlUpdateManyWithWhereWithoutUserInput | urlUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: urlScalarWhereInput | urlScalarWhereInput[]
  }

  export type url_tagUpdateManyWithoutUserNestedInput = {
    create?: XOR<url_tagCreateWithoutUserInput, url_tagUncheckedCreateWithoutUserInput> | url_tagCreateWithoutUserInput[] | url_tagUncheckedCreateWithoutUserInput[]
    connectOrCreate?: url_tagCreateOrConnectWithoutUserInput | url_tagCreateOrConnectWithoutUserInput[]
    upsert?: url_tagUpsertWithWhereUniqueWithoutUserInput | url_tagUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: url_tagCreateManyUserInputEnvelope
    set?: url_tagWhereUniqueInput | url_tagWhereUniqueInput[]
    disconnect?: url_tagWhereUniqueInput | url_tagWhereUniqueInput[]
    delete?: url_tagWhereUniqueInput | url_tagWhereUniqueInput[]
    connect?: url_tagWhereUniqueInput | url_tagWhereUniqueInput[]
    update?: url_tagUpdateWithWhereUniqueWithoutUserInput | url_tagUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: url_tagUpdateManyWithWhereWithoutUserInput | url_tagUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: url_tagScalarWhereInput | url_tagScalarWhereInput[]
  }

  export type user_roleUpdateOneRequiredWithoutUserNestedInput = {
    create?: XOR<user_roleCreateWithoutUserInput, user_roleUncheckedCreateWithoutUserInput>
    connectOrCreate?: user_roleCreateOrConnectWithoutUserInput
    upsert?: user_roleUpsertWithoutUserInput
    connect?: user_roleWhereUniqueInput
    update?: XOR<XOR<user_roleUpdateToOneWithWhereWithoutUserInput, user_roleUpdateWithoutUserInput>, user_roleUncheckedUpdateWithoutUserInput>
  }

  export type api_keyUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<api_keyCreateWithoutUserInput, api_keyUncheckedCreateWithoutUserInput> | api_keyCreateWithoutUserInput[] | api_keyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: api_keyCreateOrConnectWithoutUserInput | api_keyCreateOrConnectWithoutUserInput[]
    upsert?: api_keyUpsertWithWhereUniqueWithoutUserInput | api_keyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: api_keyCreateManyUserInputEnvelope
    set?: api_keyWhereUniqueInput | api_keyWhereUniqueInput[]
    disconnect?: api_keyWhereUniqueInput | api_keyWhereUniqueInput[]
    delete?: api_keyWhereUniqueInput | api_keyWhereUniqueInput[]
    connect?: api_keyWhereUniqueInput | api_keyWhereUniqueInput[]
    update?: api_keyUpdateWithWhereUniqueWithoutUserInput | api_keyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: api_keyUpdateManyWithWhereWithoutUserInput | api_keyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: api_keyScalarWhereInput | api_keyScalarWhereInput[]
  }

  export type audit_logUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<audit_logCreateWithoutUserInput, audit_logUncheckedCreateWithoutUserInput> | audit_logCreateWithoutUserInput[] | audit_logUncheckedCreateWithoutUserInput[]
    connectOrCreate?: audit_logCreateOrConnectWithoutUserInput | audit_logCreateOrConnectWithoutUserInput[]
    upsert?: audit_logUpsertWithWhereUniqueWithoutUserInput | audit_logUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: audit_logCreateManyUserInputEnvelope
    set?: audit_logWhereUniqueInput | audit_logWhereUniqueInput[]
    disconnect?: audit_logWhereUniqueInput | audit_logWhereUniqueInput[]
    delete?: audit_logWhereUniqueInput | audit_logWhereUniqueInput[]
    connect?: audit_logWhereUniqueInput | audit_logWhereUniqueInput[]
    update?: audit_logUpdateWithWhereUniqueWithoutUserInput | audit_logUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: audit_logUpdateManyWithWhereWithoutUserInput | audit_logUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: audit_logScalarWhereInput | audit_logScalarWhereInput[]
  }

  export type logoUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<logoCreateWithoutUserInput, logoUncheckedCreateWithoutUserInput> | logoCreateWithoutUserInput[] | logoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: logoCreateOrConnectWithoutUserInput | logoCreateOrConnectWithoutUserInput[]
    upsert?: logoUpsertWithWhereUniqueWithoutUserInput | logoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: logoCreateManyUserInputEnvelope
    set?: logoWhereUniqueInput | logoWhereUniqueInput[]
    disconnect?: logoWhereUniqueInput | logoWhereUniqueInput[]
    delete?: logoWhereUniqueInput | logoWhereUniqueInput[]
    connect?: logoWhereUniqueInput | logoWhereUniqueInput[]
    update?: logoUpdateWithWhereUniqueWithoutUserInput | logoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: logoUpdateManyWithWhereWithoutUserInput | logoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: logoScalarWhereInput | logoScalarWhereInput[]
  }

  export type urlUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<urlCreateWithoutUserInput, urlUncheckedCreateWithoutUserInput> | urlCreateWithoutUserInput[] | urlUncheckedCreateWithoutUserInput[]
    connectOrCreate?: urlCreateOrConnectWithoutUserInput | urlCreateOrConnectWithoutUserInput[]
    upsert?: urlUpsertWithWhereUniqueWithoutUserInput | urlUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: urlCreateManyUserInputEnvelope
    set?: urlWhereUniqueInput | urlWhereUniqueInput[]
    disconnect?: urlWhereUniqueInput | urlWhereUniqueInput[]
    delete?: urlWhereUniqueInput | urlWhereUniqueInput[]
    connect?: urlWhereUniqueInput | urlWhereUniqueInput[]
    update?: urlUpdateWithWhereUniqueWithoutUserInput | urlUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: urlUpdateManyWithWhereWithoutUserInput | urlUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: urlScalarWhereInput | urlScalarWhereInput[]
  }

  export type url_tagUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<url_tagCreateWithoutUserInput, url_tagUncheckedCreateWithoutUserInput> | url_tagCreateWithoutUserInput[] | url_tagUncheckedCreateWithoutUserInput[]
    connectOrCreate?: url_tagCreateOrConnectWithoutUserInput | url_tagCreateOrConnectWithoutUserInput[]
    upsert?: url_tagUpsertWithWhereUniqueWithoutUserInput | url_tagUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: url_tagCreateManyUserInputEnvelope
    set?: url_tagWhereUniqueInput | url_tagWhereUniqueInput[]
    disconnect?: url_tagWhereUniqueInput | url_tagWhereUniqueInput[]
    delete?: url_tagWhereUniqueInput | url_tagWhereUniqueInput[]
    connect?: url_tagWhereUniqueInput | url_tagWhereUniqueInput[]
    update?: url_tagUpdateWithWhereUniqueWithoutUserInput | url_tagUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: url_tagUpdateManyWithWhereWithoutUserInput | url_tagUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: url_tagScalarWhereInput | url_tagScalarWhereInput[]
  }

  export type userCreateNestedManyWithoutUser_roleInput = {
    create?: XOR<userCreateWithoutUser_roleInput, userUncheckedCreateWithoutUser_roleInput> | userCreateWithoutUser_roleInput[] | userUncheckedCreateWithoutUser_roleInput[]
    connectOrCreate?: userCreateOrConnectWithoutUser_roleInput | userCreateOrConnectWithoutUser_roleInput[]
    createMany?: userCreateManyUser_roleInputEnvelope
    connect?: userWhereUniqueInput | userWhereUniqueInput[]
  }

  export type userUncheckedCreateNestedManyWithoutUser_roleInput = {
    create?: XOR<userCreateWithoutUser_roleInput, userUncheckedCreateWithoutUser_roleInput> | userCreateWithoutUser_roleInput[] | userUncheckedCreateWithoutUser_roleInput[]
    connectOrCreate?: userCreateOrConnectWithoutUser_roleInput | userCreateOrConnectWithoutUser_roleInput[]
    createMany?: userCreateManyUser_roleInputEnvelope
    connect?: userWhereUniqueInput | userWhereUniqueInput[]
  }

  export type userUpdateManyWithoutUser_roleNestedInput = {
    create?: XOR<userCreateWithoutUser_roleInput, userUncheckedCreateWithoutUser_roleInput> | userCreateWithoutUser_roleInput[] | userUncheckedCreateWithoutUser_roleInput[]
    connectOrCreate?: userCreateOrConnectWithoutUser_roleInput | userCreateOrConnectWithoutUser_roleInput[]
    upsert?: userUpsertWithWhereUniqueWithoutUser_roleInput | userUpsertWithWhereUniqueWithoutUser_roleInput[]
    createMany?: userCreateManyUser_roleInputEnvelope
    set?: userWhereUniqueInput | userWhereUniqueInput[]
    disconnect?: userWhereUniqueInput | userWhereUniqueInput[]
    delete?: userWhereUniqueInput | userWhereUniqueInput[]
    connect?: userWhereUniqueInput | userWhereUniqueInput[]
    update?: userUpdateWithWhereUniqueWithoutUser_roleInput | userUpdateWithWhereUniqueWithoutUser_roleInput[]
    updateMany?: userUpdateManyWithWhereWithoutUser_roleInput | userUpdateManyWithWhereWithoutUser_roleInput[]
    deleteMany?: userScalarWhereInput | userScalarWhereInput[]
  }

  export type userUncheckedUpdateManyWithoutUser_roleNestedInput = {
    create?: XOR<userCreateWithoutUser_roleInput, userUncheckedCreateWithoutUser_roleInput> | userCreateWithoutUser_roleInput[] | userUncheckedCreateWithoutUser_roleInput[]
    connectOrCreate?: userCreateOrConnectWithoutUser_roleInput | userCreateOrConnectWithoutUser_roleInput[]
    upsert?: userUpsertWithWhereUniqueWithoutUser_roleInput | userUpsertWithWhereUniqueWithoutUser_roleInput[]
    createMany?: userCreateManyUser_roleInputEnvelope
    set?: userWhereUniqueInput | userWhereUniqueInput[]
    disconnect?: userWhereUniqueInput | userWhereUniqueInput[]
    delete?: userWhereUniqueInput | userWhereUniqueInput[]
    connect?: userWhereUniqueInput | userWhereUniqueInput[]
    update?: userUpdateWithWhereUniqueWithoutUser_roleInput | userUpdateWithWhereUniqueWithoutUser_roleInput[]
    updateMany?: userUpdateManyWithWhereWithoutUser_roleInput | userUpdateManyWithWhereWithoutUser_roleInput[]
    deleteMany?: userScalarWhereInput | userScalarWhereInput[]
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

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type userCreateWithoutApi_keyInput = {
    user_id?: string
    username: string
    email: string
    password_hash: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
    audit_log?: audit_logCreateNestedManyWithoutUserInput
    logo?: logoCreateNestedManyWithoutUserInput
    url?: urlCreateNestedManyWithoutUserInput
    url_tag?: url_tagCreateNestedManyWithoutUserInput
    user_role: user_roleCreateNestedOneWithoutUserInput
  }

  export type userUncheckedCreateWithoutApi_keyInput = {
    user_id?: string
    username: string
    email: string
    password_hash: string
    role_id: number
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
    audit_log?: audit_logUncheckedCreateNestedManyWithoutUserInput
    logo?: logoUncheckedCreateNestedManyWithoutUserInput
    url?: urlUncheckedCreateNestedManyWithoutUserInput
    url_tag?: url_tagUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutApi_keyInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutApi_keyInput, userUncheckedCreateWithoutApi_keyInput>
  }

  export type userUpsertWithoutApi_keyInput = {
    update: XOR<userUpdateWithoutApi_keyInput, userUncheckedUpdateWithoutApi_keyInput>
    create: XOR<userCreateWithoutApi_keyInput, userUncheckedCreateWithoutApi_keyInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutApi_keyInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutApi_keyInput, userUncheckedUpdateWithoutApi_keyInput>
  }

  export type userUpdateWithoutApi_keyInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    audit_log?: audit_logUpdateManyWithoutUserNestedInput
    logo?: logoUpdateManyWithoutUserNestedInput
    url?: urlUpdateManyWithoutUserNestedInput
    url_tag?: url_tagUpdateManyWithoutUserNestedInput
    user_role?: user_roleUpdateOneRequiredWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutApi_keyInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    audit_log?: audit_logUncheckedUpdateManyWithoutUserNestedInput
    logo?: logoUncheckedUpdateManyWithoutUserNestedInput
    url?: urlUncheckedUpdateManyWithoutUserNestedInput
    url_tag?: url_tagUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userCreateWithoutAudit_logInput = {
    user_id?: string
    username: string
    email: string
    password_hash: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
    api_key?: api_keyCreateNestedManyWithoutUserInput
    logo?: logoCreateNestedManyWithoutUserInput
    url?: urlCreateNestedManyWithoutUserInput
    url_tag?: url_tagCreateNestedManyWithoutUserInput
    user_role: user_roleCreateNestedOneWithoutUserInput
  }

  export type userUncheckedCreateWithoutAudit_logInput = {
    user_id?: string
    username: string
    email: string
    password_hash: string
    role_id: number
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
    api_key?: api_keyUncheckedCreateNestedManyWithoutUserInput
    logo?: logoUncheckedCreateNestedManyWithoutUserInput
    url?: urlUncheckedCreateNestedManyWithoutUserInput
    url_tag?: url_tagUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutAudit_logInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutAudit_logInput, userUncheckedCreateWithoutAudit_logInput>
  }

  export type urlCreateWithoutAudit_logInput = {
    url_id?: string
    original_url?: string | null
    short_url: string
    url_type?: string | null
    associated?: boolean
    expiration_date?: Date | string | null
    status?: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
    is_pre_generated?: boolean
    associated_at?: Date | string | null
    logo?: logoCreateNestedOneWithoutUrlInput
    url_tag?: url_tagCreateNestedOneWithoutUrlInput
    user?: userCreateNestedOneWithoutUrlInput
    url_click?: url_clickCreateNestedManyWithoutUrlInput
  }

  export type urlUncheckedCreateWithoutAudit_logInput = {
    url_id?: string
    user_id?: string | null
    original_url?: string | null
    short_url: string
    logo_id?: number | null
    tag_id?: number | null
    url_type?: string | null
    associated?: boolean
    expiration_date?: Date | string | null
    status?: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
    is_pre_generated?: boolean
    associated_at?: Date | string | null
    url_click?: url_clickUncheckedCreateNestedManyWithoutUrlInput
  }

  export type urlCreateOrConnectWithoutAudit_logInput = {
    where: urlWhereUniqueInput
    create: XOR<urlCreateWithoutAudit_logInput, urlUncheckedCreateWithoutAudit_logInput>
  }

  export type userUpsertWithoutAudit_logInput = {
    update: XOR<userUpdateWithoutAudit_logInput, userUncheckedUpdateWithoutAudit_logInput>
    create: XOR<userCreateWithoutAudit_logInput, userUncheckedCreateWithoutAudit_logInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutAudit_logInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutAudit_logInput, userUncheckedUpdateWithoutAudit_logInput>
  }

  export type userUpdateWithoutAudit_logInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    api_key?: api_keyUpdateManyWithoutUserNestedInput
    logo?: logoUpdateManyWithoutUserNestedInput
    url?: urlUpdateManyWithoutUserNestedInput
    url_tag?: url_tagUpdateManyWithoutUserNestedInput
    user_role?: user_roleUpdateOneRequiredWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutAudit_logInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    api_key?: api_keyUncheckedUpdateManyWithoutUserNestedInput
    logo?: logoUncheckedUpdateManyWithoutUserNestedInput
    url?: urlUncheckedUpdateManyWithoutUserNestedInput
    url_tag?: url_tagUncheckedUpdateManyWithoutUserNestedInput
  }

  export type urlUpsertWithoutAudit_logInput = {
    update: XOR<urlUpdateWithoutAudit_logInput, urlUncheckedUpdateWithoutAudit_logInput>
    create: XOR<urlCreateWithoutAudit_logInput, urlUncheckedCreateWithoutAudit_logInput>
    where?: urlWhereInput
  }

  export type urlUpdateToOneWithWhereWithoutAudit_logInput = {
    where?: urlWhereInput
    data: XOR<urlUpdateWithoutAudit_logInput, urlUncheckedUpdateWithoutAudit_logInput>
  }

  export type urlUpdateWithoutAudit_logInput = {
    url_id?: StringFieldUpdateOperationsInput | string
    original_url?: NullableStringFieldUpdateOperationsInput | string | null
    short_url?: StringFieldUpdateOperationsInput | string
    url_type?: NullableStringFieldUpdateOperationsInput | string | null
    associated?: BoolFieldUpdateOperationsInput | boolean
    expiration_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    is_pre_generated?: BoolFieldUpdateOperationsInput | boolean
    associated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    logo?: logoUpdateOneWithoutUrlNestedInput
    url_tag?: url_tagUpdateOneWithoutUrlNestedInput
    user?: userUpdateOneWithoutUrlNestedInput
    url_click?: url_clickUpdateManyWithoutUrlNestedInput
  }

  export type urlUncheckedUpdateWithoutAudit_logInput = {
    url_id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    original_url?: NullableStringFieldUpdateOperationsInput | string | null
    short_url?: StringFieldUpdateOperationsInput | string
    logo_id?: NullableIntFieldUpdateOperationsInput | number | null
    tag_id?: NullableIntFieldUpdateOperationsInput | number | null
    url_type?: NullableStringFieldUpdateOperationsInput | string | null
    associated?: BoolFieldUpdateOperationsInput | boolean
    expiration_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    is_pre_generated?: BoolFieldUpdateOperationsInput | boolean
    associated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    url_click?: url_clickUncheckedUpdateManyWithoutUrlNestedInput
  }

  export type userCreateWithoutLogoInput = {
    user_id?: string
    username: string
    email: string
    password_hash: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
    api_key?: api_keyCreateNestedManyWithoutUserInput
    audit_log?: audit_logCreateNestedManyWithoutUserInput
    url?: urlCreateNestedManyWithoutUserInput
    url_tag?: url_tagCreateNestedManyWithoutUserInput
    user_role: user_roleCreateNestedOneWithoutUserInput
  }

  export type userUncheckedCreateWithoutLogoInput = {
    user_id?: string
    username: string
    email: string
    password_hash: string
    role_id: number
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
    api_key?: api_keyUncheckedCreateNestedManyWithoutUserInput
    audit_log?: audit_logUncheckedCreateNestedManyWithoutUserInput
    url?: urlUncheckedCreateNestedManyWithoutUserInput
    url_tag?: url_tagUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutLogoInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutLogoInput, userUncheckedCreateWithoutLogoInput>
  }

  export type urlCreateWithoutLogoInput = {
    url_id?: string
    original_url?: string | null
    short_url: string
    url_type?: string | null
    associated?: boolean
    expiration_date?: Date | string | null
    status?: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
    is_pre_generated?: boolean
    associated_at?: Date | string | null
    audit_log?: audit_logCreateNestedManyWithoutUrlInput
    url_tag?: url_tagCreateNestedOneWithoutUrlInput
    user?: userCreateNestedOneWithoutUrlInput
    url_click?: url_clickCreateNestedManyWithoutUrlInput
  }

  export type urlUncheckedCreateWithoutLogoInput = {
    url_id?: string
    user_id?: string | null
    original_url?: string | null
    short_url: string
    tag_id?: number | null
    url_type?: string | null
    associated?: boolean
    expiration_date?: Date | string | null
    status?: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
    is_pre_generated?: boolean
    associated_at?: Date | string | null
    audit_log?: audit_logUncheckedCreateNestedManyWithoutUrlInput
    url_click?: url_clickUncheckedCreateNestedManyWithoutUrlInput
  }

  export type urlCreateOrConnectWithoutLogoInput = {
    where: urlWhereUniqueInput
    create: XOR<urlCreateWithoutLogoInput, urlUncheckedCreateWithoutLogoInput>
  }

  export type urlCreateManyLogoInputEnvelope = {
    data: urlCreateManyLogoInput | urlCreateManyLogoInput[]
    skipDuplicates?: boolean
  }

  export type userUpsertWithoutLogoInput = {
    update: XOR<userUpdateWithoutLogoInput, userUncheckedUpdateWithoutLogoInput>
    create: XOR<userCreateWithoutLogoInput, userUncheckedCreateWithoutLogoInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutLogoInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutLogoInput, userUncheckedUpdateWithoutLogoInput>
  }

  export type userUpdateWithoutLogoInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    api_key?: api_keyUpdateManyWithoutUserNestedInput
    audit_log?: audit_logUpdateManyWithoutUserNestedInput
    url?: urlUpdateManyWithoutUserNestedInput
    url_tag?: url_tagUpdateManyWithoutUserNestedInput
    user_role?: user_roleUpdateOneRequiredWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutLogoInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    api_key?: api_keyUncheckedUpdateManyWithoutUserNestedInput
    audit_log?: audit_logUncheckedUpdateManyWithoutUserNestedInput
    url?: urlUncheckedUpdateManyWithoutUserNestedInput
    url_tag?: url_tagUncheckedUpdateManyWithoutUserNestedInput
  }

  export type urlUpsertWithWhereUniqueWithoutLogoInput = {
    where: urlWhereUniqueInput
    update: XOR<urlUpdateWithoutLogoInput, urlUncheckedUpdateWithoutLogoInput>
    create: XOR<urlCreateWithoutLogoInput, urlUncheckedCreateWithoutLogoInput>
  }

  export type urlUpdateWithWhereUniqueWithoutLogoInput = {
    where: urlWhereUniqueInput
    data: XOR<urlUpdateWithoutLogoInput, urlUncheckedUpdateWithoutLogoInput>
  }

  export type urlUpdateManyWithWhereWithoutLogoInput = {
    where: urlScalarWhereInput
    data: XOR<urlUpdateManyMutationInput, urlUncheckedUpdateManyWithoutLogoInput>
  }

  export type urlScalarWhereInput = {
    AND?: urlScalarWhereInput | urlScalarWhereInput[]
    OR?: urlScalarWhereInput[]
    NOT?: urlScalarWhereInput | urlScalarWhereInput[]
    url_id?: UuidFilter<"url"> | string
    user_id?: UuidNullableFilter<"url"> | string | null
    original_url?: StringNullableFilter<"url"> | string | null
    short_url?: StringFilter<"url"> | string
    logo_id?: IntNullableFilter<"url"> | number | null
    tag_id?: IntNullableFilter<"url"> | number | null
    url_type?: StringNullableFilter<"url"> | string | null
    associated?: BoolFilter<"url"> | boolean
    expiration_date?: DateTimeNullableFilter<"url"> | Date | string | null
    status?: StringFilter<"url"> | string
    created_at?: DateTimeFilter<"url"> | Date | string
    updated_at?: DateTimeFilter<"url"> | Date | string
    deleted_at?: DateTimeNullableFilter<"url"> | Date | string | null
    is_deleted?: BoolFilter<"url"> | boolean
    is_pre_generated?: BoolFilter<"url"> | boolean
    associated_at?: DateTimeNullableFilter<"url"> | Date | string | null
  }

  export type audit_logCreateWithoutUrlInput = {
    action: string
    change_date?: Date | string
    details?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
    user: userCreateNestedOneWithoutAudit_logInput
  }

  export type audit_logUncheckedCreateWithoutUrlInput = {
    audit_id?: number
    action: string
    changed_by: string
    change_date?: Date | string
    details?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
  }

  export type audit_logCreateOrConnectWithoutUrlInput = {
    where: audit_logWhereUniqueInput
    create: XOR<audit_logCreateWithoutUrlInput, audit_logUncheckedCreateWithoutUrlInput>
  }

  export type audit_logCreateManyUrlInputEnvelope = {
    data: audit_logCreateManyUrlInput | audit_logCreateManyUrlInput[]
    skipDuplicates?: boolean
  }

  export type logoCreateWithoutUrlInput = {
    logo_path: string
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    is_deleted?: boolean
    user: userCreateNestedOneWithoutLogoInput
  }

  export type logoUncheckedCreateWithoutUrlInput = {
    logo_id?: number
    user_id: string
    logo_path: string
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    is_deleted?: boolean
  }

  export type logoCreateOrConnectWithoutUrlInput = {
    where: logoWhereUniqueInput
    create: XOR<logoCreateWithoutUrlInput, logoUncheckedCreateWithoutUrlInput>
  }

  export type url_tagCreateWithoutUrlInput = {
    tag_name: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
    user: userCreateNestedOneWithoutUrl_tagInput
  }

  export type url_tagUncheckedCreateWithoutUrlInput = {
    tag_id?: number
    user_id: string
    tag_name: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
  }

  export type url_tagCreateOrConnectWithoutUrlInput = {
    where: url_tagWhereUniqueInput
    create: XOR<url_tagCreateWithoutUrlInput, url_tagUncheckedCreateWithoutUrlInput>
  }

  export type userCreateWithoutUrlInput = {
    user_id?: string
    username: string
    email: string
    password_hash: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
    api_key?: api_keyCreateNestedManyWithoutUserInput
    audit_log?: audit_logCreateNestedManyWithoutUserInput
    logo?: logoCreateNestedManyWithoutUserInput
    url_tag?: url_tagCreateNestedManyWithoutUserInput
    user_role: user_roleCreateNestedOneWithoutUserInput
  }

  export type userUncheckedCreateWithoutUrlInput = {
    user_id?: string
    username: string
    email: string
    password_hash: string
    role_id: number
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
    api_key?: api_keyUncheckedCreateNestedManyWithoutUserInput
    audit_log?: audit_logUncheckedCreateNestedManyWithoutUserInput
    logo?: logoUncheckedCreateNestedManyWithoutUserInput
    url_tag?: url_tagUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutUrlInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutUrlInput, userUncheckedCreateWithoutUrlInput>
  }

  export type url_clickCreateWithoutUrlInput = {
    access_date: Date | string
    access_time: Date | string
    ip_address: string
    user_agent: string
    referrer?: string | null
    country?: string | null
    city?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
  }

  export type url_clickUncheckedCreateWithoutUrlInput = {
    click_id?: number
    access_date: Date | string
    access_time: Date | string
    ip_address: string
    user_agent: string
    referrer?: string | null
    country?: string | null
    city?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
  }

  export type url_clickCreateOrConnectWithoutUrlInput = {
    where: url_clickWhereUniqueInput
    create: XOR<url_clickCreateWithoutUrlInput, url_clickUncheckedCreateWithoutUrlInput>
  }

  export type url_clickCreateManyUrlInputEnvelope = {
    data: url_clickCreateManyUrlInput | url_clickCreateManyUrlInput[]
    skipDuplicates?: boolean
  }

  export type audit_logUpsertWithWhereUniqueWithoutUrlInput = {
    where: audit_logWhereUniqueInput
    update: XOR<audit_logUpdateWithoutUrlInput, audit_logUncheckedUpdateWithoutUrlInput>
    create: XOR<audit_logCreateWithoutUrlInput, audit_logUncheckedCreateWithoutUrlInput>
  }

  export type audit_logUpdateWithWhereUniqueWithoutUrlInput = {
    where: audit_logWhereUniqueInput
    data: XOR<audit_logUpdateWithoutUrlInput, audit_logUncheckedUpdateWithoutUrlInput>
  }

  export type audit_logUpdateManyWithWhereWithoutUrlInput = {
    where: audit_logScalarWhereInput
    data: XOR<audit_logUpdateManyMutationInput, audit_logUncheckedUpdateManyWithoutUrlInput>
  }

  export type audit_logScalarWhereInput = {
    AND?: audit_logScalarWhereInput | audit_logScalarWhereInput[]
    OR?: audit_logScalarWhereInput[]
    NOT?: audit_logScalarWhereInput | audit_logScalarWhereInput[]
    audit_id?: IntFilter<"audit_log"> | number
    url_id?: UuidFilter<"audit_log"> | string
    action?: StringFilter<"audit_log"> | string
    changed_by?: UuidFilter<"audit_log"> | string
    change_date?: DateTimeFilter<"audit_log"> | Date | string
    details?: StringNullableFilter<"audit_log"> | string | null
    created_at?: DateTimeFilter<"audit_log"> | Date | string
    updated_at?: DateTimeFilter<"audit_log"> | Date | string
    deleted_at?: DateTimeNullableFilter<"audit_log"> | Date | string | null
    is_deleted?: BoolFilter<"audit_log"> | boolean
  }

  export type logoUpsertWithoutUrlInput = {
    update: XOR<logoUpdateWithoutUrlInput, logoUncheckedUpdateWithoutUrlInput>
    create: XOR<logoCreateWithoutUrlInput, logoUncheckedCreateWithoutUrlInput>
    where?: logoWhereInput
  }

  export type logoUpdateToOneWithWhereWithoutUrlInput = {
    where?: logoWhereInput
    data: XOR<logoUpdateWithoutUrlInput, logoUncheckedUpdateWithoutUrlInput>
  }

  export type logoUpdateWithoutUrlInput = {
    logo_path?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    user?: userUpdateOneRequiredWithoutLogoNestedInput
  }

  export type logoUncheckedUpdateWithoutUrlInput = {
    logo_id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    logo_path?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type url_tagUpsertWithoutUrlInput = {
    update: XOR<url_tagUpdateWithoutUrlInput, url_tagUncheckedUpdateWithoutUrlInput>
    create: XOR<url_tagCreateWithoutUrlInput, url_tagUncheckedCreateWithoutUrlInput>
    where?: url_tagWhereInput
  }

  export type url_tagUpdateToOneWithWhereWithoutUrlInput = {
    where?: url_tagWhereInput
    data: XOR<url_tagUpdateWithoutUrlInput, url_tagUncheckedUpdateWithoutUrlInput>
  }

  export type url_tagUpdateWithoutUrlInput = {
    tag_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    user?: userUpdateOneRequiredWithoutUrl_tagNestedInput
  }

  export type url_tagUncheckedUpdateWithoutUrlInput = {
    tag_id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    tag_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type userUpsertWithoutUrlInput = {
    update: XOR<userUpdateWithoutUrlInput, userUncheckedUpdateWithoutUrlInput>
    create: XOR<userCreateWithoutUrlInput, userUncheckedCreateWithoutUrlInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutUrlInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutUrlInput, userUncheckedUpdateWithoutUrlInput>
  }

  export type userUpdateWithoutUrlInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    api_key?: api_keyUpdateManyWithoutUserNestedInput
    audit_log?: audit_logUpdateManyWithoutUserNestedInput
    logo?: logoUpdateManyWithoutUserNestedInput
    url_tag?: url_tagUpdateManyWithoutUserNestedInput
    user_role?: user_roleUpdateOneRequiredWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutUrlInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    api_key?: api_keyUncheckedUpdateManyWithoutUserNestedInput
    audit_log?: audit_logUncheckedUpdateManyWithoutUserNestedInput
    logo?: logoUncheckedUpdateManyWithoutUserNestedInput
    url_tag?: url_tagUncheckedUpdateManyWithoutUserNestedInput
  }

  export type url_clickUpsertWithWhereUniqueWithoutUrlInput = {
    where: url_clickWhereUniqueInput
    update: XOR<url_clickUpdateWithoutUrlInput, url_clickUncheckedUpdateWithoutUrlInput>
    create: XOR<url_clickCreateWithoutUrlInput, url_clickUncheckedCreateWithoutUrlInput>
  }

  export type url_clickUpdateWithWhereUniqueWithoutUrlInput = {
    where: url_clickWhereUniqueInput
    data: XOR<url_clickUpdateWithoutUrlInput, url_clickUncheckedUpdateWithoutUrlInput>
  }

  export type url_clickUpdateManyWithWhereWithoutUrlInput = {
    where: url_clickScalarWhereInput
    data: XOR<url_clickUpdateManyMutationInput, url_clickUncheckedUpdateManyWithoutUrlInput>
  }

  export type url_clickScalarWhereInput = {
    AND?: url_clickScalarWhereInput | url_clickScalarWhereInput[]
    OR?: url_clickScalarWhereInput[]
    NOT?: url_clickScalarWhereInput | url_clickScalarWhereInput[]
    click_id?: IntFilter<"url_click"> | number
    url_id?: UuidFilter<"url_click"> | string
    access_date?: DateTimeFilter<"url_click"> | Date | string
    access_time?: DateTimeFilter<"url_click"> | Date | string
    ip_address?: StringFilter<"url_click"> | string
    user_agent?: StringFilter<"url_click"> | string
    referrer?: StringNullableFilter<"url_click"> | string | null
    country?: StringNullableFilter<"url_click"> | string | null
    city?: StringNullableFilter<"url_click"> | string | null
    created_at?: DateTimeFilter<"url_click"> | Date | string
    updated_at?: DateTimeFilter<"url_click"> | Date | string
    deleted_at?: DateTimeNullableFilter<"url_click"> | Date | string | null
    is_deleted?: BoolFilter<"url_click"> | boolean
  }

  export type urlCreateWithoutUrl_clickInput = {
    url_id?: string
    original_url?: string | null
    short_url: string
    url_type?: string | null
    associated?: boolean
    expiration_date?: Date | string | null
    status?: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
    is_pre_generated?: boolean
    associated_at?: Date | string | null
    audit_log?: audit_logCreateNestedManyWithoutUrlInput
    logo?: logoCreateNestedOneWithoutUrlInput
    url_tag?: url_tagCreateNestedOneWithoutUrlInput
    user?: userCreateNestedOneWithoutUrlInput
  }

  export type urlUncheckedCreateWithoutUrl_clickInput = {
    url_id?: string
    user_id?: string | null
    original_url?: string | null
    short_url: string
    logo_id?: number | null
    tag_id?: number | null
    url_type?: string | null
    associated?: boolean
    expiration_date?: Date | string | null
    status?: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
    is_pre_generated?: boolean
    associated_at?: Date | string | null
    audit_log?: audit_logUncheckedCreateNestedManyWithoutUrlInput
  }

  export type urlCreateOrConnectWithoutUrl_clickInput = {
    where: urlWhereUniqueInput
    create: XOR<urlCreateWithoutUrl_clickInput, urlUncheckedCreateWithoutUrl_clickInput>
  }

  export type urlUpsertWithoutUrl_clickInput = {
    update: XOR<urlUpdateWithoutUrl_clickInput, urlUncheckedUpdateWithoutUrl_clickInput>
    create: XOR<urlCreateWithoutUrl_clickInput, urlUncheckedCreateWithoutUrl_clickInput>
    where?: urlWhereInput
  }

  export type urlUpdateToOneWithWhereWithoutUrl_clickInput = {
    where?: urlWhereInput
    data: XOR<urlUpdateWithoutUrl_clickInput, urlUncheckedUpdateWithoutUrl_clickInput>
  }

  export type urlUpdateWithoutUrl_clickInput = {
    url_id?: StringFieldUpdateOperationsInput | string
    original_url?: NullableStringFieldUpdateOperationsInput | string | null
    short_url?: StringFieldUpdateOperationsInput | string
    url_type?: NullableStringFieldUpdateOperationsInput | string | null
    associated?: BoolFieldUpdateOperationsInput | boolean
    expiration_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    is_pre_generated?: BoolFieldUpdateOperationsInput | boolean
    associated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    audit_log?: audit_logUpdateManyWithoutUrlNestedInput
    logo?: logoUpdateOneWithoutUrlNestedInput
    url_tag?: url_tagUpdateOneWithoutUrlNestedInput
    user?: userUpdateOneWithoutUrlNestedInput
  }

  export type urlUncheckedUpdateWithoutUrl_clickInput = {
    url_id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    original_url?: NullableStringFieldUpdateOperationsInput | string | null
    short_url?: StringFieldUpdateOperationsInput | string
    logo_id?: NullableIntFieldUpdateOperationsInput | number | null
    tag_id?: NullableIntFieldUpdateOperationsInput | number | null
    url_type?: NullableStringFieldUpdateOperationsInput | string | null
    associated?: BoolFieldUpdateOperationsInput | boolean
    expiration_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    is_pre_generated?: BoolFieldUpdateOperationsInput | boolean
    associated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    audit_log?: audit_logUncheckedUpdateManyWithoutUrlNestedInput
  }

  export type urlCreateWithoutUrl_tagInput = {
    url_id?: string
    original_url?: string | null
    short_url: string
    url_type?: string | null
    associated?: boolean
    expiration_date?: Date | string | null
    status?: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
    is_pre_generated?: boolean
    associated_at?: Date | string | null
    audit_log?: audit_logCreateNestedManyWithoutUrlInput
    logo?: logoCreateNestedOneWithoutUrlInput
    user?: userCreateNestedOneWithoutUrlInput
    url_click?: url_clickCreateNestedManyWithoutUrlInput
  }

  export type urlUncheckedCreateWithoutUrl_tagInput = {
    url_id?: string
    user_id?: string | null
    original_url?: string | null
    short_url: string
    logo_id?: number | null
    url_type?: string | null
    associated?: boolean
    expiration_date?: Date | string | null
    status?: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
    is_pre_generated?: boolean
    associated_at?: Date | string | null
    audit_log?: audit_logUncheckedCreateNestedManyWithoutUrlInput
    url_click?: url_clickUncheckedCreateNestedManyWithoutUrlInput
  }

  export type urlCreateOrConnectWithoutUrl_tagInput = {
    where: urlWhereUniqueInput
    create: XOR<urlCreateWithoutUrl_tagInput, urlUncheckedCreateWithoutUrl_tagInput>
  }

  export type urlCreateManyUrl_tagInputEnvelope = {
    data: urlCreateManyUrl_tagInput | urlCreateManyUrl_tagInput[]
    skipDuplicates?: boolean
  }

  export type userCreateWithoutUrl_tagInput = {
    user_id?: string
    username: string
    email: string
    password_hash: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
    api_key?: api_keyCreateNestedManyWithoutUserInput
    audit_log?: audit_logCreateNestedManyWithoutUserInput
    logo?: logoCreateNestedManyWithoutUserInput
    url?: urlCreateNestedManyWithoutUserInput
    user_role: user_roleCreateNestedOneWithoutUserInput
  }

  export type userUncheckedCreateWithoutUrl_tagInput = {
    user_id?: string
    username: string
    email: string
    password_hash: string
    role_id: number
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
    api_key?: api_keyUncheckedCreateNestedManyWithoutUserInput
    audit_log?: audit_logUncheckedCreateNestedManyWithoutUserInput
    logo?: logoUncheckedCreateNestedManyWithoutUserInput
    url?: urlUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutUrl_tagInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutUrl_tagInput, userUncheckedCreateWithoutUrl_tagInput>
  }

  export type urlUpsertWithWhereUniqueWithoutUrl_tagInput = {
    where: urlWhereUniqueInput
    update: XOR<urlUpdateWithoutUrl_tagInput, urlUncheckedUpdateWithoutUrl_tagInput>
    create: XOR<urlCreateWithoutUrl_tagInput, urlUncheckedCreateWithoutUrl_tagInput>
  }

  export type urlUpdateWithWhereUniqueWithoutUrl_tagInput = {
    where: urlWhereUniqueInput
    data: XOR<urlUpdateWithoutUrl_tagInput, urlUncheckedUpdateWithoutUrl_tagInput>
  }

  export type urlUpdateManyWithWhereWithoutUrl_tagInput = {
    where: urlScalarWhereInput
    data: XOR<urlUpdateManyMutationInput, urlUncheckedUpdateManyWithoutUrl_tagInput>
  }

  export type userUpsertWithoutUrl_tagInput = {
    update: XOR<userUpdateWithoutUrl_tagInput, userUncheckedUpdateWithoutUrl_tagInput>
    create: XOR<userCreateWithoutUrl_tagInput, userUncheckedCreateWithoutUrl_tagInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutUrl_tagInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutUrl_tagInput, userUncheckedUpdateWithoutUrl_tagInput>
  }

  export type userUpdateWithoutUrl_tagInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    api_key?: api_keyUpdateManyWithoutUserNestedInput
    audit_log?: audit_logUpdateManyWithoutUserNestedInput
    logo?: logoUpdateManyWithoutUserNestedInput
    url?: urlUpdateManyWithoutUserNestedInput
    user_role?: user_roleUpdateOneRequiredWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutUrl_tagInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    api_key?: api_keyUncheckedUpdateManyWithoutUserNestedInput
    audit_log?: audit_logUncheckedUpdateManyWithoutUserNestedInput
    logo?: logoUncheckedUpdateManyWithoutUserNestedInput
    url?: urlUncheckedUpdateManyWithoutUserNestedInput
  }

  export type api_keyCreateWithoutUserInput = {
    api_key: string
    created_at?: Date | string
    expires_at?: Date | string | null
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
  }

  export type api_keyUncheckedCreateWithoutUserInput = {
    api_key_id?: number
    api_key: string
    created_at?: Date | string
    expires_at?: Date | string | null
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
  }

  export type api_keyCreateOrConnectWithoutUserInput = {
    where: api_keyWhereUniqueInput
    create: XOR<api_keyCreateWithoutUserInput, api_keyUncheckedCreateWithoutUserInput>
  }

  export type api_keyCreateManyUserInputEnvelope = {
    data: api_keyCreateManyUserInput | api_keyCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type audit_logCreateWithoutUserInput = {
    action: string
    change_date?: Date | string
    details?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
    url: urlCreateNestedOneWithoutAudit_logInput
  }

  export type audit_logUncheckedCreateWithoutUserInput = {
    audit_id?: number
    url_id: string
    action: string
    change_date?: Date | string
    details?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
  }

  export type audit_logCreateOrConnectWithoutUserInput = {
    where: audit_logWhereUniqueInput
    create: XOR<audit_logCreateWithoutUserInput, audit_logUncheckedCreateWithoutUserInput>
  }

  export type audit_logCreateManyUserInputEnvelope = {
    data: audit_logCreateManyUserInput | audit_logCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type logoCreateWithoutUserInput = {
    logo_path: string
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    is_deleted?: boolean
    url?: urlCreateNestedManyWithoutLogoInput
  }

  export type logoUncheckedCreateWithoutUserInput = {
    logo_id?: number
    logo_path: string
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    is_deleted?: boolean
    url?: urlUncheckedCreateNestedManyWithoutLogoInput
  }

  export type logoCreateOrConnectWithoutUserInput = {
    where: logoWhereUniqueInput
    create: XOR<logoCreateWithoutUserInput, logoUncheckedCreateWithoutUserInput>
  }

  export type logoCreateManyUserInputEnvelope = {
    data: logoCreateManyUserInput | logoCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type urlCreateWithoutUserInput = {
    url_id?: string
    original_url?: string | null
    short_url: string
    url_type?: string | null
    associated?: boolean
    expiration_date?: Date | string | null
    status?: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
    is_pre_generated?: boolean
    associated_at?: Date | string | null
    audit_log?: audit_logCreateNestedManyWithoutUrlInput
    logo?: logoCreateNestedOneWithoutUrlInput
    url_tag?: url_tagCreateNestedOneWithoutUrlInput
    url_click?: url_clickCreateNestedManyWithoutUrlInput
  }

  export type urlUncheckedCreateWithoutUserInput = {
    url_id?: string
    original_url?: string | null
    short_url: string
    logo_id?: number | null
    tag_id?: number | null
    url_type?: string | null
    associated?: boolean
    expiration_date?: Date | string | null
    status?: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
    is_pre_generated?: boolean
    associated_at?: Date | string | null
    audit_log?: audit_logUncheckedCreateNestedManyWithoutUrlInput
    url_click?: url_clickUncheckedCreateNestedManyWithoutUrlInput
  }

  export type urlCreateOrConnectWithoutUserInput = {
    where: urlWhereUniqueInput
    create: XOR<urlCreateWithoutUserInput, urlUncheckedCreateWithoutUserInput>
  }

  export type urlCreateManyUserInputEnvelope = {
    data: urlCreateManyUserInput | urlCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type url_tagCreateWithoutUserInput = {
    tag_name: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
    url?: urlCreateNestedManyWithoutUrl_tagInput
  }

  export type url_tagUncheckedCreateWithoutUserInput = {
    tag_id?: number
    tag_name: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
    url?: urlUncheckedCreateNestedManyWithoutUrl_tagInput
  }

  export type url_tagCreateOrConnectWithoutUserInput = {
    where: url_tagWhereUniqueInput
    create: XOR<url_tagCreateWithoutUserInput, url_tagUncheckedCreateWithoutUserInput>
  }

  export type url_tagCreateManyUserInputEnvelope = {
    data: url_tagCreateManyUserInput | url_tagCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type user_roleCreateWithoutUserInput = {
    role_name: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
  }

  export type user_roleUncheckedCreateWithoutUserInput = {
    role_id?: number
    role_name: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
  }

  export type user_roleCreateOrConnectWithoutUserInput = {
    where: user_roleWhereUniqueInput
    create: XOR<user_roleCreateWithoutUserInput, user_roleUncheckedCreateWithoutUserInput>
  }

  export type api_keyUpsertWithWhereUniqueWithoutUserInput = {
    where: api_keyWhereUniqueInput
    update: XOR<api_keyUpdateWithoutUserInput, api_keyUncheckedUpdateWithoutUserInput>
    create: XOR<api_keyCreateWithoutUserInput, api_keyUncheckedCreateWithoutUserInput>
  }

  export type api_keyUpdateWithWhereUniqueWithoutUserInput = {
    where: api_keyWhereUniqueInput
    data: XOR<api_keyUpdateWithoutUserInput, api_keyUncheckedUpdateWithoutUserInput>
  }

  export type api_keyUpdateManyWithWhereWithoutUserInput = {
    where: api_keyScalarWhereInput
    data: XOR<api_keyUpdateManyMutationInput, api_keyUncheckedUpdateManyWithoutUserInput>
  }

  export type api_keyScalarWhereInput = {
    AND?: api_keyScalarWhereInput | api_keyScalarWhereInput[]
    OR?: api_keyScalarWhereInput[]
    NOT?: api_keyScalarWhereInput | api_keyScalarWhereInput[]
    api_key_id?: IntFilter<"api_key"> | number
    user_id?: UuidFilter<"api_key"> | string
    api_key?: StringFilter<"api_key"> | string
    created_at?: DateTimeFilter<"api_key"> | Date | string
    expires_at?: DateTimeNullableFilter<"api_key"> | Date | string | null
    updated_at?: DateTimeFilter<"api_key"> | Date | string
    deleted_at?: DateTimeNullableFilter<"api_key"> | Date | string | null
    is_deleted?: BoolFilter<"api_key"> | boolean
  }

  export type audit_logUpsertWithWhereUniqueWithoutUserInput = {
    where: audit_logWhereUniqueInput
    update: XOR<audit_logUpdateWithoutUserInput, audit_logUncheckedUpdateWithoutUserInput>
    create: XOR<audit_logCreateWithoutUserInput, audit_logUncheckedCreateWithoutUserInput>
  }

  export type audit_logUpdateWithWhereUniqueWithoutUserInput = {
    where: audit_logWhereUniqueInput
    data: XOR<audit_logUpdateWithoutUserInput, audit_logUncheckedUpdateWithoutUserInput>
  }

  export type audit_logUpdateManyWithWhereWithoutUserInput = {
    where: audit_logScalarWhereInput
    data: XOR<audit_logUpdateManyMutationInput, audit_logUncheckedUpdateManyWithoutUserInput>
  }

  export type logoUpsertWithWhereUniqueWithoutUserInput = {
    where: logoWhereUniqueInput
    update: XOR<logoUpdateWithoutUserInput, logoUncheckedUpdateWithoutUserInput>
    create: XOR<logoCreateWithoutUserInput, logoUncheckedCreateWithoutUserInput>
  }

  export type logoUpdateWithWhereUniqueWithoutUserInput = {
    where: logoWhereUniqueInput
    data: XOR<logoUpdateWithoutUserInput, logoUncheckedUpdateWithoutUserInput>
  }

  export type logoUpdateManyWithWhereWithoutUserInput = {
    where: logoScalarWhereInput
    data: XOR<logoUpdateManyMutationInput, logoUncheckedUpdateManyWithoutUserInput>
  }

  export type logoScalarWhereInput = {
    AND?: logoScalarWhereInput | logoScalarWhereInput[]
    OR?: logoScalarWhereInput[]
    NOT?: logoScalarWhereInput | logoScalarWhereInput[]
    logo_id?: IntFilter<"logo"> | number
    user_id?: UuidFilter<"logo"> | string
    logo_path?: StringFilter<"logo"> | string
    created_at?: DateTimeFilter<"logo"> | Date | string
    updated_at?: DateTimeNullableFilter<"logo"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"logo"> | Date | string | null
    is_deleted?: BoolFilter<"logo"> | boolean
  }

  export type urlUpsertWithWhereUniqueWithoutUserInput = {
    where: urlWhereUniqueInput
    update: XOR<urlUpdateWithoutUserInput, urlUncheckedUpdateWithoutUserInput>
    create: XOR<urlCreateWithoutUserInput, urlUncheckedCreateWithoutUserInput>
  }

  export type urlUpdateWithWhereUniqueWithoutUserInput = {
    where: urlWhereUniqueInput
    data: XOR<urlUpdateWithoutUserInput, urlUncheckedUpdateWithoutUserInput>
  }

  export type urlUpdateManyWithWhereWithoutUserInput = {
    where: urlScalarWhereInput
    data: XOR<urlUpdateManyMutationInput, urlUncheckedUpdateManyWithoutUserInput>
  }

  export type url_tagUpsertWithWhereUniqueWithoutUserInput = {
    where: url_tagWhereUniqueInput
    update: XOR<url_tagUpdateWithoutUserInput, url_tagUncheckedUpdateWithoutUserInput>
    create: XOR<url_tagCreateWithoutUserInput, url_tagUncheckedCreateWithoutUserInput>
  }

  export type url_tagUpdateWithWhereUniqueWithoutUserInput = {
    where: url_tagWhereUniqueInput
    data: XOR<url_tagUpdateWithoutUserInput, url_tagUncheckedUpdateWithoutUserInput>
  }

  export type url_tagUpdateManyWithWhereWithoutUserInput = {
    where: url_tagScalarWhereInput
    data: XOR<url_tagUpdateManyMutationInput, url_tagUncheckedUpdateManyWithoutUserInput>
  }

  export type url_tagScalarWhereInput = {
    AND?: url_tagScalarWhereInput | url_tagScalarWhereInput[]
    OR?: url_tagScalarWhereInput[]
    NOT?: url_tagScalarWhereInput | url_tagScalarWhereInput[]
    tag_id?: IntFilter<"url_tag"> | number
    user_id?: UuidFilter<"url_tag"> | string
    tag_name?: StringFilter<"url_tag"> | string
    created_at?: DateTimeFilter<"url_tag"> | Date | string
    updated_at?: DateTimeFilter<"url_tag"> | Date | string
    deleted_at?: DateTimeNullableFilter<"url_tag"> | Date | string | null
    is_deleted?: BoolFilter<"url_tag"> | boolean
  }

  export type user_roleUpsertWithoutUserInput = {
    update: XOR<user_roleUpdateWithoutUserInput, user_roleUncheckedUpdateWithoutUserInput>
    create: XOR<user_roleCreateWithoutUserInput, user_roleUncheckedCreateWithoutUserInput>
    where?: user_roleWhereInput
  }

  export type user_roleUpdateToOneWithWhereWithoutUserInput = {
    where?: user_roleWhereInput
    data: XOR<user_roleUpdateWithoutUserInput, user_roleUncheckedUpdateWithoutUserInput>
  }

  export type user_roleUpdateWithoutUserInput = {
    role_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type user_roleUncheckedUpdateWithoutUserInput = {
    role_id?: IntFieldUpdateOperationsInput | number
    role_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type userCreateWithoutUser_roleInput = {
    user_id?: string
    username: string
    email: string
    password_hash: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
    api_key?: api_keyCreateNestedManyWithoutUserInput
    audit_log?: audit_logCreateNestedManyWithoutUserInput
    logo?: logoCreateNestedManyWithoutUserInput
    url?: urlCreateNestedManyWithoutUserInput
    url_tag?: url_tagCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutUser_roleInput = {
    user_id?: string
    username: string
    email: string
    password_hash: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
    api_key?: api_keyUncheckedCreateNestedManyWithoutUserInput
    audit_log?: audit_logUncheckedCreateNestedManyWithoutUserInput
    logo?: logoUncheckedCreateNestedManyWithoutUserInput
    url?: urlUncheckedCreateNestedManyWithoutUserInput
    url_tag?: url_tagUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutUser_roleInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutUser_roleInput, userUncheckedCreateWithoutUser_roleInput>
  }

  export type userCreateManyUser_roleInputEnvelope = {
    data: userCreateManyUser_roleInput | userCreateManyUser_roleInput[]
    skipDuplicates?: boolean
  }

  export type userUpsertWithWhereUniqueWithoutUser_roleInput = {
    where: userWhereUniqueInput
    update: XOR<userUpdateWithoutUser_roleInput, userUncheckedUpdateWithoutUser_roleInput>
    create: XOR<userCreateWithoutUser_roleInput, userUncheckedCreateWithoutUser_roleInput>
  }

  export type userUpdateWithWhereUniqueWithoutUser_roleInput = {
    where: userWhereUniqueInput
    data: XOR<userUpdateWithoutUser_roleInput, userUncheckedUpdateWithoutUser_roleInput>
  }

  export type userUpdateManyWithWhereWithoutUser_roleInput = {
    where: userScalarWhereInput
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyWithoutUser_roleInput>
  }

  export type userScalarWhereInput = {
    AND?: userScalarWhereInput | userScalarWhereInput[]
    OR?: userScalarWhereInput[]
    NOT?: userScalarWhereInput | userScalarWhereInput[]
    user_id?: UuidFilter<"user"> | string
    username?: StringFilter<"user"> | string
    email?: StringFilter<"user"> | string
    password_hash?: StringFilter<"user"> | string
    role_id?: IntFilter<"user"> | number
    created_at?: DateTimeFilter<"user"> | Date | string
    updated_at?: DateTimeFilter<"user"> | Date | string
    deleted_at?: DateTimeNullableFilter<"user"> | Date | string | null
    is_deleted?: BoolFilter<"user"> | boolean
  }

  export type urlCreateManyLogoInput = {
    url_id?: string
    user_id?: string | null
    original_url?: string | null
    short_url: string
    tag_id?: number | null
    url_type?: string | null
    associated?: boolean
    expiration_date?: Date | string | null
    status?: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
    is_pre_generated?: boolean
    associated_at?: Date | string | null
  }

  export type urlUpdateWithoutLogoInput = {
    url_id?: StringFieldUpdateOperationsInput | string
    original_url?: NullableStringFieldUpdateOperationsInput | string | null
    short_url?: StringFieldUpdateOperationsInput | string
    url_type?: NullableStringFieldUpdateOperationsInput | string | null
    associated?: BoolFieldUpdateOperationsInput | boolean
    expiration_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    is_pre_generated?: BoolFieldUpdateOperationsInput | boolean
    associated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    audit_log?: audit_logUpdateManyWithoutUrlNestedInput
    url_tag?: url_tagUpdateOneWithoutUrlNestedInput
    user?: userUpdateOneWithoutUrlNestedInput
    url_click?: url_clickUpdateManyWithoutUrlNestedInput
  }

  export type urlUncheckedUpdateWithoutLogoInput = {
    url_id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    original_url?: NullableStringFieldUpdateOperationsInput | string | null
    short_url?: StringFieldUpdateOperationsInput | string
    tag_id?: NullableIntFieldUpdateOperationsInput | number | null
    url_type?: NullableStringFieldUpdateOperationsInput | string | null
    associated?: BoolFieldUpdateOperationsInput | boolean
    expiration_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    is_pre_generated?: BoolFieldUpdateOperationsInput | boolean
    associated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    audit_log?: audit_logUncheckedUpdateManyWithoutUrlNestedInput
    url_click?: url_clickUncheckedUpdateManyWithoutUrlNestedInput
  }

  export type urlUncheckedUpdateManyWithoutLogoInput = {
    url_id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    original_url?: NullableStringFieldUpdateOperationsInput | string | null
    short_url?: StringFieldUpdateOperationsInput | string
    tag_id?: NullableIntFieldUpdateOperationsInput | number | null
    url_type?: NullableStringFieldUpdateOperationsInput | string | null
    associated?: BoolFieldUpdateOperationsInput | boolean
    expiration_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    is_pre_generated?: BoolFieldUpdateOperationsInput | boolean
    associated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type audit_logCreateManyUrlInput = {
    audit_id?: number
    action: string
    changed_by: string
    change_date?: Date | string
    details?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
  }

  export type url_clickCreateManyUrlInput = {
    click_id?: number
    access_date: Date | string
    access_time: Date | string
    ip_address: string
    user_agent: string
    referrer?: string | null
    country?: string | null
    city?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
  }

  export type audit_logUpdateWithoutUrlInput = {
    action?: StringFieldUpdateOperationsInput | string
    change_date?: DateTimeFieldUpdateOperationsInput | Date | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    user?: userUpdateOneRequiredWithoutAudit_logNestedInput
  }

  export type audit_logUncheckedUpdateWithoutUrlInput = {
    audit_id?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    changed_by?: StringFieldUpdateOperationsInput | string
    change_date?: DateTimeFieldUpdateOperationsInput | Date | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type audit_logUncheckedUpdateManyWithoutUrlInput = {
    audit_id?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    changed_by?: StringFieldUpdateOperationsInput | string
    change_date?: DateTimeFieldUpdateOperationsInput | Date | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type url_clickUpdateWithoutUrlInput = {
    access_date?: DateTimeFieldUpdateOperationsInput | Date | string
    access_time?: DateTimeFieldUpdateOperationsInput | Date | string
    ip_address?: StringFieldUpdateOperationsInput | string
    user_agent?: StringFieldUpdateOperationsInput | string
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type url_clickUncheckedUpdateWithoutUrlInput = {
    click_id?: IntFieldUpdateOperationsInput | number
    access_date?: DateTimeFieldUpdateOperationsInput | Date | string
    access_time?: DateTimeFieldUpdateOperationsInput | Date | string
    ip_address?: StringFieldUpdateOperationsInput | string
    user_agent?: StringFieldUpdateOperationsInput | string
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type url_clickUncheckedUpdateManyWithoutUrlInput = {
    click_id?: IntFieldUpdateOperationsInput | number
    access_date?: DateTimeFieldUpdateOperationsInput | Date | string
    access_time?: DateTimeFieldUpdateOperationsInput | Date | string
    ip_address?: StringFieldUpdateOperationsInput | string
    user_agent?: StringFieldUpdateOperationsInput | string
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type urlCreateManyUrl_tagInput = {
    url_id?: string
    user_id?: string | null
    original_url?: string | null
    short_url: string
    logo_id?: number | null
    url_type?: string | null
    associated?: boolean
    expiration_date?: Date | string | null
    status?: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
    is_pre_generated?: boolean
    associated_at?: Date | string | null
  }

  export type urlUpdateWithoutUrl_tagInput = {
    url_id?: StringFieldUpdateOperationsInput | string
    original_url?: NullableStringFieldUpdateOperationsInput | string | null
    short_url?: StringFieldUpdateOperationsInput | string
    url_type?: NullableStringFieldUpdateOperationsInput | string | null
    associated?: BoolFieldUpdateOperationsInput | boolean
    expiration_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    is_pre_generated?: BoolFieldUpdateOperationsInput | boolean
    associated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    audit_log?: audit_logUpdateManyWithoutUrlNestedInput
    logo?: logoUpdateOneWithoutUrlNestedInput
    user?: userUpdateOneWithoutUrlNestedInput
    url_click?: url_clickUpdateManyWithoutUrlNestedInput
  }

  export type urlUncheckedUpdateWithoutUrl_tagInput = {
    url_id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    original_url?: NullableStringFieldUpdateOperationsInput | string | null
    short_url?: StringFieldUpdateOperationsInput | string
    logo_id?: NullableIntFieldUpdateOperationsInput | number | null
    url_type?: NullableStringFieldUpdateOperationsInput | string | null
    associated?: BoolFieldUpdateOperationsInput | boolean
    expiration_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    is_pre_generated?: BoolFieldUpdateOperationsInput | boolean
    associated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    audit_log?: audit_logUncheckedUpdateManyWithoutUrlNestedInput
    url_click?: url_clickUncheckedUpdateManyWithoutUrlNestedInput
  }

  export type urlUncheckedUpdateManyWithoutUrl_tagInput = {
    url_id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    original_url?: NullableStringFieldUpdateOperationsInput | string | null
    short_url?: StringFieldUpdateOperationsInput | string
    logo_id?: NullableIntFieldUpdateOperationsInput | number | null
    url_type?: NullableStringFieldUpdateOperationsInput | string | null
    associated?: BoolFieldUpdateOperationsInput | boolean
    expiration_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    is_pre_generated?: BoolFieldUpdateOperationsInput | boolean
    associated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type api_keyCreateManyUserInput = {
    api_key_id?: number
    api_key: string
    created_at?: Date | string
    expires_at?: Date | string | null
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
  }

  export type audit_logCreateManyUserInput = {
    audit_id?: number
    url_id: string
    action: string
    change_date?: Date | string
    details?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
  }

  export type logoCreateManyUserInput = {
    logo_id?: number
    logo_path: string
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    is_deleted?: boolean
  }

  export type urlCreateManyUserInput = {
    url_id?: string
    original_url?: string | null
    short_url: string
    logo_id?: number | null
    tag_id?: number | null
    url_type?: string | null
    associated?: boolean
    expiration_date?: Date | string | null
    status?: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
    is_pre_generated?: boolean
    associated_at?: Date | string | null
  }

  export type url_tagCreateManyUserInput = {
    tag_id?: number
    tag_name: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
  }

  export type api_keyUpdateWithoutUserInput = {
    api_key?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type api_keyUncheckedUpdateWithoutUserInput = {
    api_key_id?: IntFieldUpdateOperationsInput | number
    api_key?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type api_keyUncheckedUpdateManyWithoutUserInput = {
    api_key_id?: IntFieldUpdateOperationsInput | number
    api_key?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type audit_logUpdateWithoutUserInput = {
    action?: StringFieldUpdateOperationsInput | string
    change_date?: DateTimeFieldUpdateOperationsInput | Date | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    url?: urlUpdateOneRequiredWithoutAudit_logNestedInput
  }

  export type audit_logUncheckedUpdateWithoutUserInput = {
    audit_id?: IntFieldUpdateOperationsInput | number
    url_id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    change_date?: DateTimeFieldUpdateOperationsInput | Date | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type audit_logUncheckedUpdateManyWithoutUserInput = {
    audit_id?: IntFieldUpdateOperationsInput | number
    url_id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    change_date?: DateTimeFieldUpdateOperationsInput | Date | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type logoUpdateWithoutUserInput = {
    logo_path?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    url?: urlUpdateManyWithoutLogoNestedInput
  }

  export type logoUncheckedUpdateWithoutUserInput = {
    logo_id?: IntFieldUpdateOperationsInput | number
    logo_path?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    url?: urlUncheckedUpdateManyWithoutLogoNestedInput
  }

  export type logoUncheckedUpdateManyWithoutUserInput = {
    logo_id?: IntFieldUpdateOperationsInput | number
    logo_path?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type urlUpdateWithoutUserInput = {
    url_id?: StringFieldUpdateOperationsInput | string
    original_url?: NullableStringFieldUpdateOperationsInput | string | null
    short_url?: StringFieldUpdateOperationsInput | string
    url_type?: NullableStringFieldUpdateOperationsInput | string | null
    associated?: BoolFieldUpdateOperationsInput | boolean
    expiration_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    is_pre_generated?: BoolFieldUpdateOperationsInput | boolean
    associated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    audit_log?: audit_logUpdateManyWithoutUrlNestedInput
    logo?: logoUpdateOneWithoutUrlNestedInput
    url_tag?: url_tagUpdateOneWithoutUrlNestedInput
    url_click?: url_clickUpdateManyWithoutUrlNestedInput
  }

  export type urlUncheckedUpdateWithoutUserInput = {
    url_id?: StringFieldUpdateOperationsInput | string
    original_url?: NullableStringFieldUpdateOperationsInput | string | null
    short_url?: StringFieldUpdateOperationsInput | string
    logo_id?: NullableIntFieldUpdateOperationsInput | number | null
    tag_id?: NullableIntFieldUpdateOperationsInput | number | null
    url_type?: NullableStringFieldUpdateOperationsInput | string | null
    associated?: BoolFieldUpdateOperationsInput | boolean
    expiration_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    is_pre_generated?: BoolFieldUpdateOperationsInput | boolean
    associated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    audit_log?: audit_logUncheckedUpdateManyWithoutUrlNestedInput
    url_click?: url_clickUncheckedUpdateManyWithoutUrlNestedInput
  }

  export type urlUncheckedUpdateManyWithoutUserInput = {
    url_id?: StringFieldUpdateOperationsInput | string
    original_url?: NullableStringFieldUpdateOperationsInput | string | null
    short_url?: StringFieldUpdateOperationsInput | string
    logo_id?: NullableIntFieldUpdateOperationsInput | number | null
    tag_id?: NullableIntFieldUpdateOperationsInput | number | null
    url_type?: NullableStringFieldUpdateOperationsInput | string | null
    associated?: BoolFieldUpdateOperationsInput | boolean
    expiration_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    is_pre_generated?: BoolFieldUpdateOperationsInput | boolean
    associated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type url_tagUpdateWithoutUserInput = {
    tag_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    url?: urlUpdateManyWithoutUrl_tagNestedInput
  }

  export type url_tagUncheckedUpdateWithoutUserInput = {
    tag_id?: IntFieldUpdateOperationsInput | number
    tag_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    url?: urlUncheckedUpdateManyWithoutUrl_tagNestedInput
  }

  export type url_tagUncheckedUpdateManyWithoutUserInput = {
    tag_id?: IntFieldUpdateOperationsInput | number
    tag_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type userCreateManyUser_roleInput = {
    user_id?: string
    username: string
    email: string
    password_hash: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
  }

  export type userUpdateWithoutUser_roleInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    api_key?: api_keyUpdateManyWithoutUserNestedInput
    audit_log?: audit_logUpdateManyWithoutUserNestedInput
    logo?: logoUpdateManyWithoutUserNestedInput
    url?: urlUpdateManyWithoutUserNestedInput
    url_tag?: url_tagUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutUser_roleInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    api_key?: api_keyUncheckedUpdateManyWithoutUserNestedInput
    audit_log?: audit_logUncheckedUpdateManyWithoutUserNestedInput
    logo?: logoUncheckedUpdateManyWithoutUserNestedInput
    url?: urlUncheckedUpdateManyWithoutUserNestedInput
    url_tag?: url_tagUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateManyWithoutUser_roleInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
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