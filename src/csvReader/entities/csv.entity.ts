import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Csv extends BaseEntity {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ name: 'listingUrl', type: 'varchar', length: 50 })
    listingUrl: string;

    @Column({ name: 'scrapeId', type: 'int' })
    scrapeId: number;

    @Column({ name: 'lastScraped', type: 'varchar', length: 50 })
    lastScraped: string;

    @Column({ name: 'name', type: 'varchar', length: 50 })
    name: string;

    @Column({ name: 'summary', type: 'varchar', length: 50 })
    summary: string;

    @Column({ name: 'space', type: 'varchar', length: 50 })
    space: string;

    @Column({ name: 'description', type: 'varchar', length: 50 })
    description: string;

    @Column({ name: 'experiencesOffered', type: 'varchar', length: 50 })
    experiencesOffered: string;

    @Column({ name: 'neighbourhoodOverview', type: 'varchar', length: 50 })
    neighbourhoodOverview: string;

    @Column({ name: 'notes', type: 'varchar', length: 50 })
    notes: string;

    @Column({ name: 'transit', type: 'varchar', length: 50 })
    transit: string;

    @Column({ name: 'thumbnailUrl', type: 'varchar', length: 50 })
    thumbnailUrl: string;

    @Column({ name: 'mediumUrl', type: 'varchar', length: 50 })
    mediumUrl: string;

    @Column({ name: 'pictureUrl', type: 'varchar', length: 50 })
    pictureUrl: string;

    @Column({ name: 'xiPictureUrl', type: 'varchar', length: 50 })
    xiPictureUrl: string;

    @Column({ name: 'hostid', type: 'int' })
    hostid: number;

    @Column({ name: 'hostSince', type: 'varchar', length: 50 })
    hostSince: string;

    @Column({ name: 'hostLocation', type: 'varchar', length: 50 })
    hostLocation: string;

    @Column({ name: 'hostAbout', type: 'varchar', length: 50 })
    hostAbout: string;

    @Column({ name: 'hostResponse', type: 'varchar', length: 50 })
    hostResponse: string;

    @Column({ name: 'hostAcepptance', type: 'varchar', length: 50 })
    hostAcepptance: string;

    @Column({ name: 'hostIsSuperhost', type: 'varchar', length: 50 })
    hostIsSuperhost: string;

    @Column({ name: 'hostThumbinailUrl', type: 'varchar', length: 50 })
    hostThumbinailUrl: string;

    @Column({ name: 'hostPictureUrl', type: 'varchar', length: 50 })
    hostPictureUrl: string;

    @Column({ name: 'hostNeighbourhood', type: 'varchar', length: 50 })
    hostNeighbourhood: string;

    @Column({ name: 'hostListingCount', type: 'varchar', length: 50 })
    hostListingCount: string;

    @Column({ name: 'hostTotalListing', type: 'varchar', length: 50 })
    hostTotalListing: string;

    @Column({ name: 'hostVerification', type: 'varchar', length: 50 })
    hostVerification: string;

    @Column({ name: 'hostHasProfilePic', type: 'varchar', length: 50 })
    hostHasProfilePic: string;

    @Column({ name: 'hostIdentityVrified', type: 'varchar', length: 50 })
    hostIdentityVrified: string;

    @Column({ name: 'street', type: 'varchar', length: 50 })
    street: string;

    @Column({ name: 'neighbourhood', type: 'varchar', length: 50 })
    neighbourhood: string;

    @Column({ name: 'neighbourhoodCleansed', type: 'varchar', length: 50 })
    neighbourhoodCleansed: string;

    @Column({ name: 'city', type: 'varchar', length: 50 })
    city: string;

    @Column({ name: 'state', type: 'varchar', length: 50 })
    state: string;

    @Column({ name: 'zipcode', type: 'varchar', length: 50 })
    zipcode: number;

    @Column({ name: 'market', type: 'varchar', length: 50 })
    market: string;

    @Column({ name: 'smartLocation', type: 'varchar', length: 50 })
    smartLocation: string;

    @Column({ name: 'countryCode', type: 'varchar', length: 50 })
    countryCode: string;

    @Column({ name: 'country', type: 'varchar', length: 50 })
    country: string;

    @Column({ name: 'latitude', type: 'varchar', length: 50 })
    latitude: string;

    @Column({ name: 'longitude', type: 'varchar', length: 50 })
    longitude: string;

    @Column({ name: 'lsLocationExact', type: 'varchar', length: 50 })
    lsLocationExact: string;

    @Column({ name: 'propertyType', type: 'varchar', length: 50 })
    propertyType: string;

    @Column({ name: 'roomType', type: 'varchar', length: 50 })
    roomType: string;

    @Column({ name: 'accomodates', type: 'varchar', length: 50 })
    accomodates: string;

    @Column({ name: 'bathrooms', type: 'varchar', length: 50 })
    bathrooms: string;

    @Column({ name: 'bedrooms', type: 'varchar', length: 50 })
    bedrooms: string;

    @Column({ name: 'beds', type: 'varchar', length: 50 })
    beds: string;

    @Column({ name: 'bedType', type: 'varchar', length: 50 })
    bedType: string;

    @Column({ name: 'amenities', type: 'varchar', length: 50 })
    amenities: string;

    @Column({ name: 'squareFeet', type: 'varchar', length: 50 })
    squareFeet: string;

    @Column({ name: 'price', type: 'varchar', length: 50 })
    price: string;

    @Column({ name: 'weeklyPrice', type: 'varchar', length: 50 })
    weeklyPrice: string;

    @Column({ name: 'montlyPrice', type: 'varchar', length: 50 })
    montlyPrice: string;

    @Column({ name: 'securityDeposit', type: 'varchar', length: 50 })
    securityDeposit: string;

    @Column({ name: 'cleaningFee', type: 'varchar', length: 50 })
    cleaningFee: string;

    @Column({ name: 'guestsIncludes', type: 'varchar', length: 50 })
    guestsIncludes: string;

    @Column({ name: 'extraPeople', type: 'varchar', length: 50 })
    extraPeople: string;

    @Column({ name: 'minimumNights', type: 'int' })
    minimumNights: number;

    @Column({ name: 'maximunNights', type: 'int' })
    maximunNights: number;

    @Column({ name: 'calendarUpdated', type: 'varchar', length: 50 })
    calendarUpdated: string;

    @Column({ name: 'hasAvaliability', type: 'varchar', length: 50 })
    hasAvaliability: string;

    @Column({ name: 'availability30', type: 'varchar', length: 50 })
    availability30: string;

    @Column({ name: 'availability60', type: 'varchar', length: 50 })
    availability60: string;

    @Column({ name: 'availability90', type: 'varchar', length: 50 })
    availability90: string;

    @Column({ name: 'availability365', type: 'varchar', length: 50 })
    availability365: string;

    @Column({ name: 'calendarLastScrapped', type: 'varchar', length: 50 })
    calendarLastScrapped: string;

    @Column({ name: 'numberReviews', type: 'varchar', length: 50 })
    numberReviews: string;

    @Column({ name: 'firstReview', type: 'varchar', length: 50 })
    firstReview: string;

    @Column({ name: 'lastReview', type: 'varchar', length: 50 })
    lastReview: string;

    @Column({ name: 'first_name', type: 'int' })
    reviewScoresRating: number;

    @Column({ name: 'reviewScoresAccuracy', type: 'int' })
    reviewScoresAccuracy: number;

    @Column({ name: 'reviewScoresCleaniless', type: 'int' })
    reviewScoresCleaniless: number;

    @Column({ name: 'reviewScoresCheckin', type: 'int' })
    reviewScoresCheckin: number;

    @Column({ name: 'reviewScoresCmommunication', type: 'int' })
    reviewScoresCmommunication: number;

    @Column({ name: 'reviewScoresLocations', type: 'int' })
    reviewScoresLocations: number;

    @Column({ name: 'reviewScoresValues', type: 'int' })
    reviewScoresValues: number;

    @Column({ name: 'requiresLicence', type: 'varchar', length: 50 })
    requiresLicence: string;

    @Column({ name: 'licence', type: 'varchar', length: 50 })
    licence: string;

    @Column({ name: 'jurisdicionNames', type: 'varchar', length: 50 })
    jurisdicionNames: string;

    @Column({ name: 'instamtBookable', type: 'varchar', length: 50 })
    instamtBookable: string;

    @Column({ name: 'cancellationPolicy', type: 'varchar', length: 50 })
    cancellationPolicy: string;

    @Column({ name: 'requireGuestProfilePictures', type: 'varchar', length: 50 })
    requireGuestProfilePictures: string;

    @Column({ name: 'requireGuestPhoneVerification', type: 'varchar', length: 50 })
    requireGuestPhoneVerification: string;

    @Column({ name: 'calculatedHostListing', type: 'varchar', length: 50 })
    calculatedHostListing: string;

    @Column({ name: 'reviewsPerM', type: 'varchar', length: 50 })
    reviewsPerM: string;





}







