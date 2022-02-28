import * as Types from '../../../graphql/generated/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int'];
};

export type AggregateDialog = {
  __typename?: 'AggregateDialog';
  _avg?: Maybe<DialogAvgAggregate>;
  _count?: Maybe<DialogCountAggregate>;
  _max?: Maybe<DialogMaxAggregate>;
  _min?: Maybe<DialogMinAggregate>;
  _sum?: Maybe<DialogSumAggregate>;
};

export type AggregatePlayer = {
  __typename?: 'AggregatePlayer';
  _avg?: Maybe<PlayerAvgAggregate>;
  _count?: Maybe<PlayerCountAggregate>;
  _max?: Maybe<PlayerMaxAggregate>;
  _min?: Maybe<PlayerMinAggregate>;
  _sum?: Maybe<PlayerSumAggregate>;
};

export type AggregateUser = {
  __typename?: 'AggregateUser';
  _avg?: Maybe<UserAvgAggregate>;
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
  _sum?: Maybe<UserSumAggregate>;
};

export type AggregateUserDialogHistory = {
  __typename?: 'AggregateUserDialogHistory';
  _avg?: Maybe<UserDialogHistoryAvgAggregate>;
  _count?: Maybe<UserDialogHistoryCountAggregate>;
  _max?: Maybe<UserDialogHistoryMaxAggregate>;
  _min?: Maybe<UserDialogHistoryMinAggregate>;
  _sum?: Maybe<UserDialogHistorySumAggregate>;
};

export type AuthenticationResult = {
  __typename?: 'AuthenticationResult';
  AccessToken: Scalars['String'];
  ExpiresIn: Scalars['Float'];
  RefreshToken?: Maybe<Scalars['String']>;
  TokenType: Scalars['String'];
};

export type ChangePasswordInput = {
  previousPassword: Scalars['String'];
  proposedPassword: Scalars['String'];
};

export type ChangePasswordOutput = {
  __typename?: 'ChangePasswordOutput';
  success: Scalars['Boolean'];
};

export type ConfirmForgotPasswordInput = {
  code: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type ConfirmForgotPasswordOutput = {
  __typename?: 'ConfirmForgotPasswordOutput';
  success: Scalars['Boolean'];
};

export type ConfirmInput = {
  code: Scalars['String'];
  email: Scalars['String'];
};

export type ConfirmOutput = {
  __typename?: 'ConfirmOutput';
  success: Scalars['Boolean'];
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type Dialog = {
  __typename?: 'Dialog';
  UserDialogHistory: Array<UserDialogHistory>;
  _count?: Maybe<DialogCount>;
  category: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  publishedFrom: Scalars['DateTime'];
  publishedTo: Scalars['DateTime'];
  type: DialogType;
  updatedAt: Scalars['DateTime'];
  uuid: Scalars['String'];
};


export type DialogUserDialogHistoryArgs = {
  cursor?: InputMaybe<UserDialogHistoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserDialogHistoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserDialogHistoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserDialogHistoryWhereInput>;
};

export type DialogAvgAggregate = {
  __typename?: 'DialogAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type DialogAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type DialogCount = {
  __typename?: 'DialogCount';
  UserDialogHistory: Scalars['Int'];
};

export type DialogCountAggregate = {
  __typename?: 'DialogCountAggregate';
  _all: Scalars['Int'];
  category: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  publishedFrom: Scalars['Int'];
  publishedTo: Scalars['Int'];
  type: Scalars['Int'];
  updatedAt: Scalars['Int'];
  uuid: Scalars['Int'];
};

export type DialogCountOrderByAggregateInput = {
  category?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  publishedFrom?: InputMaybe<SortOrder>;
  publishedTo?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  uuid?: InputMaybe<SortOrder>;
};

export type DialogCreateInput = {
  UserDialogHistory?: InputMaybe<UserDialogHistoryCreateNestedManyWithoutDialogInput>;
  category: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  publishedFrom: Scalars['DateTime'];
  publishedTo: Scalars['DateTime'];
  type: DialogType;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  uuid: Scalars['String'];
};

export type DialogCreateManyInput = {
  category: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  publishedFrom: Scalars['DateTime'];
  publishedTo: Scalars['DateTime'];
  type: DialogType;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  uuid: Scalars['String'];
};

export type DialogCreateNestedOneWithoutUserDialogHistoryInput = {
  connect?: InputMaybe<DialogWhereUniqueInput>;
  connectOrCreate?: InputMaybe<DialogCreateOrConnectWithoutUserDialogHistoryInput>;
  create?: InputMaybe<DialogCreateWithoutUserDialogHistoryInput>;
};

export type DialogCreateOrConnectWithoutUserDialogHistoryInput = {
  create: DialogCreateWithoutUserDialogHistoryInput;
  where: DialogWhereUniqueInput;
};

export type DialogCreateWithoutUserDialogHistoryInput = {
  category: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  publishedFrom: Scalars['DateTime'];
  publishedTo: Scalars['DateTime'];
  type: DialogType;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  uuid: Scalars['String'];
};

export type DialogGroupBy = {
  __typename?: 'DialogGroupBy';
  _avg?: Maybe<DialogAvgAggregate>;
  _count?: Maybe<DialogCountAggregate>;
  _max?: Maybe<DialogMaxAggregate>;
  _min?: Maybe<DialogMinAggregate>;
  _sum?: Maybe<DialogSumAggregate>;
  category: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  publishedFrom: Scalars['DateTime'];
  publishedTo: Scalars['DateTime'];
  type: DialogType;
  updatedAt: Scalars['DateTime'];
  uuid: Scalars['String'];
};

export type DialogMaxAggregate = {
  __typename?: 'DialogMaxAggregate';
  category?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  publishedFrom?: Maybe<Scalars['DateTime']>;
  publishedTo?: Maybe<Scalars['DateTime']>;
  type?: Maybe<DialogType>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  uuid?: Maybe<Scalars['String']>;
};

export type DialogMaxOrderByAggregateInput = {
  category?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  publishedFrom?: InputMaybe<SortOrder>;
  publishedTo?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  uuid?: InputMaybe<SortOrder>;
};

export type DialogMinAggregate = {
  __typename?: 'DialogMinAggregate';
  category?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  publishedFrom?: Maybe<Scalars['DateTime']>;
  publishedTo?: Maybe<Scalars['DateTime']>;
  type?: Maybe<DialogType>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  uuid?: Maybe<Scalars['String']>;
};

export type DialogMinOrderByAggregateInput = {
  category?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  publishedFrom?: InputMaybe<SortOrder>;
  publishedTo?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  uuid?: InputMaybe<SortOrder>;
};

export type DialogOrderByWithAggregationInput = {
  _avg?: InputMaybe<DialogAvgOrderByAggregateInput>;
  _count?: InputMaybe<DialogCountOrderByAggregateInput>;
  _max?: InputMaybe<DialogMaxOrderByAggregateInput>;
  _min?: InputMaybe<DialogMinOrderByAggregateInput>;
  _sum?: InputMaybe<DialogSumOrderByAggregateInput>;
  category?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  publishedFrom?: InputMaybe<SortOrder>;
  publishedTo?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  uuid?: InputMaybe<SortOrder>;
};

export type DialogOrderByWithRelationInput = {
  UserDialogHistory?: InputMaybe<UserDialogHistoryOrderByRelationAggregateInput>;
  category?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  publishedFrom?: InputMaybe<SortOrder>;
  publishedTo?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  uuid?: InputMaybe<SortOrder>;
};

export type DialogRelationFilter = {
  is?: InputMaybe<DialogWhereInput>;
  isNot?: InputMaybe<DialogWhereInput>;
};

export enum DialogScalarFieldEnum {
  Category = 'category',
  CreatedAt = 'createdAt',
  Id = 'id',
  PublishedFrom = 'publishedFrom',
  PublishedTo = 'publishedTo',
  Type = 'type',
  UpdatedAt = 'updatedAt',
  Uuid = 'uuid'
}

export type DialogScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<DialogScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<DialogScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<DialogScalarWhereWithAggregatesInput>>;
  category?: InputMaybe<StringWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  publishedFrom?: InputMaybe<DateTimeWithAggregatesFilter>;
  publishedTo?: InputMaybe<DateTimeWithAggregatesFilter>;
  type?: InputMaybe<EnumDialogTypeWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  uuid?: InputMaybe<StringWithAggregatesFilter>;
};

export type DialogSumAggregate = {
  __typename?: 'DialogSumAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type DialogSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export enum DialogType {
  Mobile = 'MOBILE',
  Pc = 'PC',
  PcOrMobile = 'PC_OR_MOBILE'
}

export type DialogUpdateInput = {
  UserDialogHistory?: InputMaybe<UserDialogHistoryUpdateManyWithoutDialogInput>;
  category?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  publishedFrom?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  publishedTo?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumDialogTypeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  uuid?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type DialogUpdateManyMutationInput = {
  category?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  publishedFrom?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  publishedTo?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumDialogTypeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  uuid?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type DialogUpdateOneRequiredWithoutUserDialogHistoryInput = {
  connect?: InputMaybe<DialogWhereUniqueInput>;
  connectOrCreate?: InputMaybe<DialogCreateOrConnectWithoutUserDialogHistoryInput>;
  create?: InputMaybe<DialogCreateWithoutUserDialogHistoryInput>;
  update?: InputMaybe<DialogUpdateWithoutUserDialogHistoryInput>;
  upsert?: InputMaybe<DialogUpsertWithoutUserDialogHistoryInput>;
};

export type DialogUpdateWithoutUserDialogHistoryInput = {
  category?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  publishedFrom?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  publishedTo?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumDialogTypeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  uuid?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type DialogUpsertWithoutUserDialogHistoryInput = {
  create: DialogCreateWithoutUserDialogHistoryInput;
  update: DialogUpdateWithoutUserDialogHistoryInput;
};

export type DialogWhereInput = {
  AND?: InputMaybe<Array<DialogWhereInput>>;
  NOT?: InputMaybe<Array<DialogWhereInput>>;
  OR?: InputMaybe<Array<DialogWhereInput>>;
  UserDialogHistory?: InputMaybe<UserDialogHistoryListRelationFilter>;
  category?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  publishedFrom?: InputMaybe<DateTimeFilter>;
  publishedTo?: InputMaybe<DateTimeFilter>;
  type?: InputMaybe<EnumDialogTypeFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  uuid?: InputMaybe<StringFilter>;
};

export type DialogWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type EnumDialogTypeFieldUpdateOperationsInput = {
  set?: InputMaybe<DialogType>;
};

export type EnumDialogTypeFilter = {
  equals?: InputMaybe<DialogType>;
  in?: InputMaybe<Array<DialogType>>;
  not?: InputMaybe<NestedEnumDialogTypeFilter>;
  notIn?: InputMaybe<Array<DialogType>>;
};

export type EnumDialogTypeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumDialogTypeFilter>;
  _min?: InputMaybe<NestedEnumDialogTypeFilter>;
  equals?: InputMaybe<DialogType>;
  in?: InputMaybe<Array<DialogType>>;
  not?: InputMaybe<NestedEnumDialogTypeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<DialogType>>;
};

export type ForgotPasswordInput = {
  email: Scalars['String'];
};

export type ForgotPasswordOutput = {
  __typename?: 'ForgotPasswordOutput';
  success: Scalars['Boolean'];
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type IntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type LoginOutput = {
  __typename?: 'LoginOutput';
  AuthenticationResult: AuthenticationResult;
  success: Scalars['Boolean'];
};

export type Mutation = {
  __typename?: 'Mutation';
  changePassword: ChangePasswordOutput;
  confirm: ConfirmOutput;
  confirmForgotPassword: ConfirmForgotPasswordOutput;
  createDialog: Dialog;
  createManyDialog: AffectedRowsOutput;
  createManyPlayer: AffectedRowsOutput;
  createManyUser: AffectedRowsOutput;
  createManyUserDialogHistory: AffectedRowsOutput;
  createPlayer: Player;
  createUser: User;
  createUserDialogHistory: UserDialogHistory;
  deleteDialog?: Maybe<Dialog>;
  deleteManyDialog: AffectedRowsOutput;
  deleteManyPlayer: AffectedRowsOutput;
  deleteManyUser: AffectedRowsOutput;
  deleteManyUserDialogHistory: AffectedRowsOutput;
  deletePlayer?: Maybe<Player>;
  deleteUser?: Maybe<User>;
  deleteUserDialogHistory?: Maybe<UserDialogHistory>;
  forgotPassword: ForgotPasswordOutput;
  login: LoginOutput;
  refreshToken: RefreshTokenOutput;
  resendConfirmationCode: ResendConfirmationCodeOutput;
  signUp: SignUpOutput;
  updateDialog?: Maybe<Dialog>;
  updateManyDialog: AffectedRowsOutput;
  updateManyPlayer: AffectedRowsOutput;
  updateManyUser: AffectedRowsOutput;
  updateManyUserDialogHistory: AffectedRowsOutput;
  updatePlayer?: Maybe<Player>;
  updateUser?: Maybe<User>;
  updateUserDialogHistory?: Maybe<UserDialogHistory>;
  upsertDialog: Dialog;
  upsertPlayer: Player;
  upsertUser: User;
  upsertUserDialogHistory: UserDialogHistory;
};


export type MutationChangePasswordArgs = {
  input: ChangePasswordInput;
};


export type MutationConfirmArgs = {
  input: ConfirmInput;
};


export type MutationConfirmForgotPasswordArgs = {
  input: ConfirmForgotPasswordInput;
};


export type MutationCreateDialogArgs = {
  data: DialogCreateInput;
};


export type MutationCreateManyDialogArgs = {
  data: Array<DialogCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyPlayerArgs = {
  data: Array<PlayerCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyUserArgs = {
  data: Array<UserCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyUserDialogHistoryArgs = {
  data: Array<UserDialogHistoryCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreatePlayerArgs = {
  data: PlayerCreateInput;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationCreateUserDialogHistoryArgs = {
  data: UserDialogHistoryCreateInput;
};


export type MutationDeleteDialogArgs = {
  where: DialogWhereUniqueInput;
};


export type MutationDeleteManyDialogArgs = {
  where?: InputMaybe<DialogWhereInput>;
};


export type MutationDeleteManyPlayerArgs = {
  where?: InputMaybe<PlayerWhereInput>;
};


export type MutationDeleteManyUserArgs = {
  where?: InputMaybe<UserWhereInput>;
};


export type MutationDeleteManyUserDialogHistoryArgs = {
  where?: InputMaybe<UserDialogHistoryWhereInput>;
};


export type MutationDeletePlayerArgs = {
  where: PlayerWhereUniqueInput;
};


export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationDeleteUserDialogHistoryArgs = {
  where: UserDialogHistoryWhereUniqueInput;
};


export type MutationForgotPasswordArgs = {
  input: ForgotPasswordInput;
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationRefreshTokenArgs = {
  input: RefreshTokenInput;
};


export type MutationResendConfirmationCodeArgs = {
  input: ResendConfirmationCodeInput;
};


export type MutationSignUpArgs = {
  input: SignUpInput;
};


export type MutationUpdateDialogArgs = {
  data: DialogUpdateInput;
  where: DialogWhereUniqueInput;
};


export type MutationUpdateManyDialogArgs = {
  data: DialogUpdateManyMutationInput;
  where?: InputMaybe<DialogWhereInput>;
};


export type MutationUpdateManyPlayerArgs = {
  data: PlayerUpdateManyMutationInput;
  where?: InputMaybe<PlayerWhereInput>;
};


export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput;
  where?: InputMaybe<UserWhereInput>;
};


export type MutationUpdateManyUserDialogHistoryArgs = {
  data: UserDialogHistoryUpdateManyMutationInput;
  where?: InputMaybe<UserDialogHistoryWhereInput>;
};


export type MutationUpdatePlayerArgs = {
  data: PlayerUpdateInput;
  where: PlayerWhereUniqueInput;
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpdateUserDialogHistoryArgs = {
  data: UserDialogHistoryUpdateInput;
  where: UserDialogHistoryWhereUniqueInput;
};


export type MutationUpsertDialogArgs = {
  create: DialogCreateInput;
  update: DialogUpdateInput;
  where: DialogWhereUniqueInput;
};


export type MutationUpsertPlayerArgs = {
  create: PlayerCreateInput;
  update: PlayerUpdateInput;
  where: PlayerWhereUniqueInput;
};


export type MutationUpsertUserArgs = {
  create: UserCreateInput;
  update: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpsertUserDialogHistoryArgs = {
  create: UserDialogHistoryCreateInput;
  update: UserDialogHistoryUpdateInput;
  where: UserDialogHistoryWhereUniqueInput;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedEnumDialogTypeFilter = {
  equals?: InputMaybe<DialogType>;
  in?: InputMaybe<Array<DialogType>>;
  not?: InputMaybe<NestedEnumDialogTypeFilter>;
  notIn?: InputMaybe<Array<DialogType>>;
};

export type NestedEnumDialogTypeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumDialogTypeFilter>;
  _min?: InputMaybe<NestedEnumDialogTypeFilter>;
  equals?: InputMaybe<DialogType>;
  in?: InputMaybe<Array<DialogType>>;
  not?: InputMaybe<NestedEnumDialogTypeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<DialogType>>;
};

export type NestedFloatFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type Player = {
  __typename?: 'Player';
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['Int'];
};

export type PlayerAvgAggregate = {
  __typename?: 'PlayerAvgAggregate';
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

export type PlayerAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type PlayerCountAggregate = {
  __typename?: 'PlayerCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  updatedAt: Scalars['Int'];
  userId: Scalars['Int'];
};

export type PlayerCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type PlayerCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutPlayerInput;
};

export type PlayerCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['Int'];
};

export type PlayerCreateNestedOneWithoutUserInput = {
  connect?: InputMaybe<PlayerWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PlayerCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<PlayerCreateWithoutUserInput>;
};

export type PlayerCreateOrConnectWithoutUserInput = {
  create: PlayerCreateWithoutUserInput;
  where: PlayerWhereUniqueInput;
};

export type PlayerCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PlayerGroupBy = {
  __typename?: 'PlayerGroupBy';
  _avg?: Maybe<PlayerAvgAggregate>;
  _count?: Maybe<PlayerCountAggregate>;
  _max?: Maybe<PlayerMaxAggregate>;
  _min?: Maybe<PlayerMinAggregate>;
  _sum?: Maybe<PlayerSumAggregate>;
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
  userId: Scalars['Int'];
};

export type PlayerMaxAggregate = {
  __typename?: 'PlayerMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['Int']>;
};

export type PlayerMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type PlayerMinAggregate = {
  __typename?: 'PlayerMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['Int']>;
};

export type PlayerMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type PlayerOrderByWithAggregationInput = {
  _avg?: InputMaybe<PlayerAvgOrderByAggregateInput>;
  _count?: InputMaybe<PlayerCountOrderByAggregateInput>;
  _max?: InputMaybe<PlayerMaxOrderByAggregateInput>;
  _min?: InputMaybe<PlayerMinOrderByAggregateInput>;
  _sum?: InputMaybe<PlayerSumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type PlayerOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export type PlayerRelationFilter = {
  is?: InputMaybe<PlayerWhereInput>;
  isNot?: InputMaybe<PlayerWhereInput>;
};

export enum PlayerScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  UpdatedAt = 'updatedAt',
  UserId = 'userId'
}

export type PlayerScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<PlayerScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<PlayerScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<PlayerScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  userId?: InputMaybe<IntWithAggregatesFilter>;
};

export type PlayerSumAggregate = {
  __typename?: 'PlayerSumAggregate';
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type PlayerSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type PlayerUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutPlayerInput>;
};

export type PlayerUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PlayerUpdateOneWithoutUserInput = {
  connect?: InputMaybe<PlayerWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PlayerCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<PlayerCreateWithoutUserInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<PlayerUpdateWithoutUserInput>;
  upsert?: InputMaybe<PlayerUpsertWithoutUserInput>;
};

export type PlayerUpdateWithoutUserInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PlayerUpsertWithoutUserInput = {
  create: PlayerCreateWithoutUserInput;
  update: PlayerUpdateWithoutUserInput;
};

export type PlayerWhereInput = {
  AND?: InputMaybe<Array<PlayerWhereInput>>;
  NOT?: InputMaybe<Array<PlayerWhereInput>>;
  OR?: InputMaybe<Array<PlayerWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type PlayerWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  aggregateDialog: AggregateDialog;
  aggregatePlayer: AggregatePlayer;
  aggregateUser: AggregateUser;
  aggregateUserDialogHistory: AggregateUserDialogHistory;
  dialog?: Maybe<Dialog>;
  dialogs: Array<Dialog>;
  findFirstDialog?: Maybe<Dialog>;
  findFirstPlayer?: Maybe<Player>;
  findFirstUser?: Maybe<User>;
  findFirstUserDialogHistory?: Maybe<UserDialogHistory>;
  groupByDialog: Array<DialogGroupBy>;
  groupByPlayer: Array<PlayerGroupBy>;
  groupByUser: Array<UserGroupBy>;
  groupByUserDialogHistory: Array<UserDialogHistoryGroupBy>;
  player?: Maybe<Player>;
  players: Array<Player>;
  user?: Maybe<User>;
  userDialogHistories: Array<UserDialogHistory>;
  userDialogHistory?: Maybe<UserDialogHistory>;
  users: Array<User>;
};


export type QueryAggregateDialogArgs = {
  cursor?: InputMaybe<DialogWhereUniqueInput>;
  orderBy?: InputMaybe<Array<DialogOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DialogWhereInput>;
};


export type QueryAggregatePlayerArgs = {
  cursor?: InputMaybe<PlayerWhereUniqueInput>;
  orderBy?: InputMaybe<Array<PlayerOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PlayerWhereInput>;
};


export type QueryAggregateUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryAggregateUserDialogHistoryArgs = {
  cursor?: InputMaybe<UserDialogHistoryWhereUniqueInput>;
  orderBy?: InputMaybe<Array<UserDialogHistoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserDialogHistoryWhereInput>;
};


export type QueryDialogArgs = {
  where: DialogWhereUniqueInput;
};


export type QueryDialogsArgs = {
  cursor?: InputMaybe<DialogWhereUniqueInput>;
  distinct?: InputMaybe<Array<DialogScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<DialogOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DialogWhereInput>;
};


export type QueryFindFirstDialogArgs = {
  cursor?: InputMaybe<DialogWhereUniqueInput>;
  distinct?: InputMaybe<Array<DialogScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<DialogOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DialogWhereInput>;
};


export type QueryFindFirstPlayerArgs = {
  cursor?: InputMaybe<PlayerWhereUniqueInput>;
  distinct?: InputMaybe<Array<PlayerScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PlayerOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PlayerWhereInput>;
};


export type QueryFindFirstUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryFindFirstUserDialogHistoryArgs = {
  cursor?: InputMaybe<UserDialogHistoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserDialogHistoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserDialogHistoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserDialogHistoryWhereInput>;
};


export type QueryGroupByDialogArgs = {
  by: Array<DialogScalarFieldEnum>;
  having?: InputMaybe<DialogScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<DialogOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DialogWhereInput>;
};


export type QueryGroupByPlayerArgs = {
  by: Array<PlayerScalarFieldEnum>;
  having?: InputMaybe<PlayerScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<PlayerOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PlayerWhereInput>;
};


export type QueryGroupByUserArgs = {
  by: Array<UserScalarFieldEnum>;
  having?: InputMaybe<UserScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryGroupByUserDialogHistoryArgs = {
  by: Array<UserDialogHistoryScalarFieldEnum>;
  having?: InputMaybe<UserDialogHistoryScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<UserDialogHistoryOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserDialogHistoryWhereInput>;
};


export type QueryPlayerArgs = {
  where: PlayerWhereUniqueInput;
};


export type QueryPlayersArgs = {
  cursor?: InputMaybe<PlayerWhereUniqueInput>;
  distinct?: InputMaybe<Array<PlayerScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PlayerOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PlayerWhereInput>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUserDialogHistoriesArgs = {
  cursor?: InputMaybe<UserDialogHistoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserDialogHistoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserDialogHistoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserDialogHistoryWhereInput>;
};


export type QueryUserDialogHistoryArgs = {
  where: UserDialogHistoryWhereUniqueInput;
};


export type QueryUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};

export type RefreshTokenInput = {
  email: Scalars['String'];
};

export type RefreshTokenOutput = {
  __typename?: 'RefreshTokenOutput';
  AuthenticationResult: AuthenticationResult;
  success: Scalars['Boolean'];
};

export type ResendConfirmationCodeInput = {
  email: Scalars['String'];
};

export type ResendConfirmationCodeOutput = {
  __typename?: 'ResendConfirmationCodeOutput';
  success: Scalars['Boolean'];
};

export type SignUpInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type SignUpOutput = {
  __typename?: 'SignUpOutput';
  success: Scalars['Boolean'];
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  UserDialogHistory: Array<UserDialogHistory>;
  _count?: Maybe<UserCount>;
  cognitUserSub: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  player?: Maybe<Player>;
  updatedAt: Scalars['DateTime'];
};


export type UserUserDialogHistoryArgs = {
  cursor?: InputMaybe<UserDialogHistoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserDialogHistoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserDialogHistoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserDialogHistoryWhereInput>;
};

export type UserAvgAggregate = {
  __typename?: 'UserAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type UserAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type UserCount = {
  __typename?: 'UserCount';
  UserDialogHistory: Scalars['Int'];
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  _all: Scalars['Int'];
  cognitUserSub: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type UserCountOrderByAggregateInput = {
  cognitUserSub?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserCreateInput = {
  UserDialogHistory?: InputMaybe<UserDialogHistoryCreateNestedManyWithoutUserInput>;
  cognitUserSub: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  player?: InputMaybe<PlayerCreateNestedOneWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateManyInput = {
  cognitUserSub: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateNestedOneWithoutPlayerInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutPlayerInput>;
  create?: InputMaybe<UserCreateWithoutPlayerInput>;
};

export type UserCreateNestedOneWithoutUserDialogHistoryInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutUserDialogHistoryInput>;
  create?: InputMaybe<UserCreateWithoutUserDialogHistoryInput>;
};

export type UserCreateOrConnectWithoutPlayerInput = {
  create: UserCreateWithoutPlayerInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutUserDialogHistoryInput = {
  create: UserCreateWithoutUserDialogHistoryInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutPlayerInput = {
  UserDialogHistory?: InputMaybe<UserDialogHistoryCreateNestedManyWithoutUserInput>;
  cognitUserSub: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateWithoutUserDialogHistoryInput = {
  cognitUserSub: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  player?: InputMaybe<PlayerCreateNestedOneWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserDialogHistory = {
  __typename?: 'UserDialogHistory';
  createdAt: Scalars['DateTime'];
  dialog: Dialog;
  dialogId: Scalars['Int'];
  id: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['Int'];
};

export type UserDialogHistoryAvgAggregate = {
  __typename?: 'UserDialogHistoryAvgAggregate';
  dialogId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

export type UserDialogHistoryAvgOrderByAggregateInput = {
  dialogId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type UserDialogHistoryCountAggregate = {
  __typename?: 'UserDialogHistoryCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  dialogId: Scalars['Int'];
  id: Scalars['Int'];
  updatedAt: Scalars['Int'];
  userId: Scalars['Int'];
};

export type UserDialogHistoryCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  dialogId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type UserDialogHistoryCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  dialog: DialogCreateNestedOneWithoutUserDialogHistoryInput;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutUserDialogHistoryInput;
};

export type UserDialogHistoryCreateManyDialogInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['Int'];
};

export type UserDialogHistoryCreateManyDialogInputEnvelope = {
  data: Array<UserDialogHistoryCreateManyDialogInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type UserDialogHistoryCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  dialogId: Scalars['Int'];
  id?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['Int'];
};

export type UserDialogHistoryCreateManyUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  dialogId: Scalars['Int'];
  id?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserDialogHistoryCreateManyUserInputEnvelope = {
  data: Array<UserDialogHistoryCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type UserDialogHistoryCreateNestedManyWithoutDialogInput = {
  connect?: InputMaybe<Array<UserDialogHistoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserDialogHistoryCreateOrConnectWithoutDialogInput>>;
  create?: InputMaybe<Array<UserDialogHistoryCreateWithoutDialogInput>>;
  createMany?: InputMaybe<UserDialogHistoryCreateManyDialogInputEnvelope>;
};

export type UserDialogHistoryCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<UserDialogHistoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserDialogHistoryCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<UserDialogHistoryCreateWithoutUserInput>>;
  createMany?: InputMaybe<UserDialogHistoryCreateManyUserInputEnvelope>;
};

export type UserDialogHistoryCreateOrConnectWithoutDialogInput = {
  create: UserDialogHistoryCreateWithoutDialogInput;
  where: UserDialogHistoryWhereUniqueInput;
};

export type UserDialogHistoryCreateOrConnectWithoutUserInput = {
  create: UserDialogHistoryCreateWithoutUserInput;
  where: UserDialogHistoryWhereUniqueInput;
};

export type UserDialogHistoryCreateWithoutDialogInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutUserDialogHistoryInput;
};

export type UserDialogHistoryCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  dialog: DialogCreateNestedOneWithoutUserDialogHistoryInput;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserDialogHistoryGroupBy = {
  __typename?: 'UserDialogHistoryGroupBy';
  _avg?: Maybe<UserDialogHistoryAvgAggregate>;
  _count?: Maybe<UserDialogHistoryCountAggregate>;
  _max?: Maybe<UserDialogHistoryMaxAggregate>;
  _min?: Maybe<UserDialogHistoryMinAggregate>;
  _sum?: Maybe<UserDialogHistorySumAggregate>;
  createdAt: Scalars['DateTime'];
  dialogId: Scalars['Int'];
  id: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
  userId: Scalars['Int'];
};

export type UserDialogHistoryListRelationFilter = {
  every?: InputMaybe<UserDialogHistoryWhereInput>;
  none?: InputMaybe<UserDialogHistoryWhereInput>;
  some?: InputMaybe<UserDialogHistoryWhereInput>;
};

export type UserDialogHistoryMaxAggregate = {
  __typename?: 'UserDialogHistoryMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  dialogId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['Int']>;
};

export type UserDialogHistoryMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  dialogId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type UserDialogHistoryMinAggregate = {
  __typename?: 'UserDialogHistoryMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  dialogId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['Int']>;
};

export type UserDialogHistoryMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  dialogId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type UserDialogHistoryOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type UserDialogHistoryOrderByWithAggregationInput = {
  _avg?: InputMaybe<UserDialogHistoryAvgOrderByAggregateInput>;
  _count?: InputMaybe<UserDialogHistoryCountOrderByAggregateInput>;
  _max?: InputMaybe<UserDialogHistoryMaxOrderByAggregateInput>;
  _min?: InputMaybe<UserDialogHistoryMinOrderByAggregateInput>;
  _sum?: InputMaybe<UserDialogHistorySumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  dialogId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type UserDialogHistoryOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  dialog?: InputMaybe<DialogOrderByWithRelationInput>;
  dialogId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum UserDialogHistoryScalarFieldEnum {
  CreatedAt = 'createdAt',
  DialogId = 'dialogId',
  Id = 'id',
  UpdatedAt = 'updatedAt',
  UserId = 'userId'
}

export type UserDialogHistoryScalarWhereInput = {
  AND?: InputMaybe<Array<UserDialogHistoryScalarWhereInput>>;
  NOT?: InputMaybe<Array<UserDialogHistoryScalarWhereInput>>;
  OR?: InputMaybe<Array<UserDialogHistoryScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  dialogId?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type UserDialogHistoryScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<UserDialogHistoryScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<UserDialogHistoryScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<UserDialogHistoryScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  dialogId?: InputMaybe<IntWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  userId?: InputMaybe<IntWithAggregatesFilter>;
};

export type UserDialogHistorySumAggregate = {
  __typename?: 'UserDialogHistorySumAggregate';
  dialogId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type UserDialogHistorySumOrderByAggregateInput = {
  dialogId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type UserDialogHistoryUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  dialog?: InputMaybe<DialogUpdateOneRequiredWithoutUserDialogHistoryInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutUserDialogHistoryInput>;
};

export type UserDialogHistoryUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserDialogHistoryUpdateManyWithWhereWithoutDialogInput = {
  data: UserDialogHistoryUpdateManyMutationInput;
  where: UserDialogHistoryScalarWhereInput;
};

export type UserDialogHistoryUpdateManyWithWhereWithoutUserInput = {
  data: UserDialogHistoryUpdateManyMutationInput;
  where: UserDialogHistoryScalarWhereInput;
};

export type UserDialogHistoryUpdateManyWithoutDialogInput = {
  connect?: InputMaybe<Array<UserDialogHistoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserDialogHistoryCreateOrConnectWithoutDialogInput>>;
  create?: InputMaybe<Array<UserDialogHistoryCreateWithoutDialogInput>>;
  createMany?: InputMaybe<UserDialogHistoryCreateManyDialogInputEnvelope>;
  delete?: InputMaybe<Array<UserDialogHistoryWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserDialogHistoryScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserDialogHistoryWhereUniqueInput>>;
  set?: InputMaybe<Array<UserDialogHistoryWhereUniqueInput>>;
  update?: InputMaybe<Array<UserDialogHistoryUpdateWithWhereUniqueWithoutDialogInput>>;
  updateMany?: InputMaybe<Array<UserDialogHistoryUpdateManyWithWhereWithoutDialogInput>>;
  upsert?: InputMaybe<Array<UserDialogHistoryUpsertWithWhereUniqueWithoutDialogInput>>;
};

export type UserDialogHistoryUpdateManyWithoutUserInput = {
  connect?: InputMaybe<Array<UserDialogHistoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserDialogHistoryCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<UserDialogHistoryCreateWithoutUserInput>>;
  createMany?: InputMaybe<UserDialogHistoryCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<UserDialogHistoryWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserDialogHistoryScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserDialogHistoryWhereUniqueInput>>;
  set?: InputMaybe<Array<UserDialogHistoryWhereUniqueInput>>;
  update?: InputMaybe<Array<UserDialogHistoryUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<UserDialogHistoryUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<UserDialogHistoryUpsertWithWhereUniqueWithoutUserInput>>;
};

export type UserDialogHistoryUpdateWithWhereUniqueWithoutDialogInput = {
  data: UserDialogHistoryUpdateWithoutDialogInput;
  where: UserDialogHistoryWhereUniqueInput;
};

export type UserDialogHistoryUpdateWithWhereUniqueWithoutUserInput = {
  data: UserDialogHistoryUpdateWithoutUserInput;
  where: UserDialogHistoryWhereUniqueInput;
};

export type UserDialogHistoryUpdateWithoutDialogInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutUserDialogHistoryInput>;
};

export type UserDialogHistoryUpdateWithoutUserInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  dialog?: InputMaybe<DialogUpdateOneRequiredWithoutUserDialogHistoryInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserDialogHistoryUpsertWithWhereUniqueWithoutDialogInput = {
  create: UserDialogHistoryCreateWithoutDialogInput;
  update: UserDialogHistoryUpdateWithoutDialogInput;
  where: UserDialogHistoryWhereUniqueInput;
};

export type UserDialogHistoryUpsertWithWhereUniqueWithoutUserInput = {
  create: UserDialogHistoryCreateWithoutUserInput;
  update: UserDialogHistoryUpdateWithoutUserInput;
  where: UserDialogHistoryWhereUniqueInput;
};

export type UserDialogHistoryWhereInput = {
  AND?: InputMaybe<Array<UserDialogHistoryWhereInput>>;
  NOT?: InputMaybe<Array<UserDialogHistoryWhereInput>>;
  OR?: InputMaybe<Array<UserDialogHistoryWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  dialog?: InputMaybe<DialogRelationFilter>;
  dialogId?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type UserDialogHistoryWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type UserGroupBy = {
  __typename?: 'UserGroupBy';
  _avg?: Maybe<UserAvgAggregate>;
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
  _sum?: Maybe<UserSumAggregate>;
  cognitUserSub: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  cognitUserSub?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserMaxOrderByAggregateInput = {
  cognitUserSub?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  cognitUserSub?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserMinOrderByAggregateInput = {
  cognitUserSub?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserOrderByWithAggregationInput = {
  _avg?: InputMaybe<UserAvgOrderByAggregateInput>;
  _count?: InputMaybe<UserCountOrderByAggregateInput>;
  _max?: InputMaybe<UserMaxOrderByAggregateInput>;
  _min?: InputMaybe<UserMinOrderByAggregateInput>;
  _sum?: InputMaybe<UserSumOrderByAggregateInput>;
  cognitUserSub?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserOrderByWithRelationInput = {
  UserDialogHistory?: InputMaybe<UserDialogHistoryOrderByRelationAggregateInput>;
  cognitUserSub?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  player?: InputMaybe<PlayerOrderByWithRelationInput>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export enum UserScalarFieldEnum {
  CognitUserSub = 'cognitUserSub',
  CreatedAt = 'createdAt',
  Id = 'id',
  UpdatedAt = 'updatedAt'
}

export type UserScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  cognitUserSub?: InputMaybe<StringWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type UserSumAggregate = {
  __typename?: 'UserSumAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type UserSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type UserUpdateInput = {
  UserDialogHistory?: InputMaybe<UserDialogHistoryUpdateManyWithoutUserInput>;
  cognitUserSub?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  player?: InputMaybe<PlayerUpdateOneWithoutUserInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateManyMutationInput = {
  cognitUserSub?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateOneRequiredWithoutPlayerInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutPlayerInput>;
  create?: InputMaybe<UserCreateWithoutPlayerInput>;
  update?: InputMaybe<UserUpdateWithoutPlayerInput>;
  upsert?: InputMaybe<UserUpsertWithoutPlayerInput>;
};

export type UserUpdateOneRequiredWithoutUserDialogHistoryInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutUserDialogHistoryInput>;
  create?: InputMaybe<UserCreateWithoutUserDialogHistoryInput>;
  update?: InputMaybe<UserUpdateWithoutUserDialogHistoryInput>;
  upsert?: InputMaybe<UserUpsertWithoutUserDialogHistoryInput>;
};

export type UserUpdateWithoutPlayerInput = {
  UserDialogHistory?: InputMaybe<UserDialogHistoryUpdateManyWithoutUserInput>;
  cognitUserSub?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutUserDialogHistoryInput = {
  cognitUserSub?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  player?: InputMaybe<PlayerUpdateOneWithoutUserInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpsertWithoutPlayerInput = {
  create: UserCreateWithoutPlayerInput;
  update: UserUpdateWithoutPlayerInput;
};

export type UserUpsertWithoutUserDialogHistoryInput = {
  create: UserCreateWithoutUserDialogHistoryInput;
  update: UserUpdateWithoutUserDialogHistoryInput;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  UserDialogHistory?: InputMaybe<UserDialogHistoryListRelationFilter>;
  cognitUserSub?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  player?: InputMaybe<PlayerRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type UserWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type SignUpMutationVariables = Types.Exact<{
  input: Types.SignUpInput;
}>;


export type SignUpMutation = { __typename?: 'Mutation', signUp: { __typename?: 'SignUpOutput', success: boolean } };


export const SignUpDocument = gql`
    mutation SignUp($input: SignUpInput!) {
  signUp(input: $input) {
    success
  }
}
    `;
export type SignUpMutationFn = Apollo.MutationFunction<SignUpMutation, SignUpMutationVariables>;

/**
 * __useSignUpMutation__
 *
 * To run a mutation, you first call `useSignUpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpMutation, { data, loading, error }] = useSignUpMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSignUpMutation(baseOptions?: Apollo.MutationHookOptions<SignUpMutation, SignUpMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignUpMutation, SignUpMutationVariables>(SignUpDocument, options);
      }
export type SignUpMutationHookResult = ReturnType<typeof useSignUpMutation>;
export type SignUpMutationResult = Apollo.MutationResult<SignUpMutation>;
export type SignUpMutationOptions = Apollo.BaseMutationOptions<SignUpMutation, SignUpMutationVariables>;