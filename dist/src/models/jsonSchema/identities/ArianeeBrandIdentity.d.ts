/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */
export declare type $Schema = string;
export declare type Name = string;
export declare type Website = string;
export declare type MotherCompany = string;
export declare type CertificateURI = string;
export declare type ArianeeMember = boolean;
export declare type StreetAddress = string;
export declare type ZipCode = string;
export declare type City = string;
export declare type State = string;
export declare type Country = string;
export declare type Name1 = string;
export declare type Email = string;
export declare type Title = string;
export declare type Contacts1 = Contacts[];
/**
 * url
 */
export declare type BrandLogoHeader = string;
/**
 * url
 */
export declare type BrandLogoSquare = string;
export declare type InAppHTML = string;
/**
 * Facebook Page Id
 */
export declare type Facebook = string;
/**
 * account
 */
export declare type Instagram = string;
/**
 * account
 */
export declare type Twitter = string;
export declare type Title1 = string;
export declare type Url = string;
export declare type BackgroundColor = string;
export declare type Color = string;
/**
 * URL
 */
export declare type Icon = string;
export declare type ExternalContents1 = ExternalContents[];
export interface ArianeeIdentity {
    $schema: $Schema;
    name?: Name;
    website?: Website;
    mother_company?: MotherCompany;
    certificate_uri?: CertificateURI;
    arianee_member?: ArianeeMember;
    address?: Address;
    contacts?: Contacts1;
    brandLogoHeader?: BrandLogoHeader;
    brandLogoSquare?: BrandLogoSquare;
    inAppHTML?: InAppHTML;
    socialmedia?: SocialMedia;
    externalContents?: ExternalContents1;
    [k: string]: any;
}
export interface Address {
    street_address: StreetAddress;
    zipcode: ZipCode;
    city: City;
    state: State;
    country: Country;
    [k: string]: any;
}
export interface Contacts {
    name?: Name1;
    email?: Email;
    title?: Title;
    [k: string]: any;
}
export interface SocialMedia {
    facebook?: Facebook;
    instagram?: Instagram;
    twitter?: Twitter;
    [k: string]: any;
}
export interface ExternalContents {
    title?: Title1;
    url?: Url;
    backgroundColor?: BackgroundColor;
    color?: Color;
    icon?: Icon;
    [k: string]: any;
}
