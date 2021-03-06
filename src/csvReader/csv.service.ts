import { ForbiddenException, Injectable } from '@nestjs/common';
import { CreateCsvDto } from './dto/create-csv.dto';
import { UpdateCsvDto } from './dto/update-csv.dto';
import * as fs from 'fs';
import { CsvParser, ParsedData } from 'nest-csv-parser'
import { Csv } from './entities/csv.entity'

class entityCSV {

  id: number;
  listing_url: string;
  scrape_id: number;
  last_scraped: Date;
  name: string;
  summary: string;
  space: string;
  description: string;
  experiences_offered: string;
  neighborhood_overview: string;
  notes: string;
  transit: string;
  thumbnail_url: string;
  medium_url: string;
  picture_url: string;
  xl_picture_url: string;
  host_id: number;
  host_url: string;
  host_name: string;
  host_since: Date;
  host_location: string;
  host_about: string;
  host_response_time: string;
  host_response_rate: string;
  host_acceptance_rate: string;
  host_is_superhost: string;
  host_thumbnail_url: string;
  host_picture_url: string;
  host_neighbourhood: string;
  host_listings_count: number;
  host_total_listings_count: number;
  host_verifications: string;
  host_has_profile_pic: string;
  host_identity_verified: string;
  street: string;
  neighbourhood: string;
  neighbourhood_cleansed: string;
  neighbourhood_group_cleansed: string;
  city: string;
  state: string;
  zipcode: number;
  market: string;
  smart_location: string;
  country_code: string;
  country: string;
  latitude: number;
  longitude: number;
  is_location_exact: string;
  property_type: string;
  room_type: string;
  accommodates: number;
  bathrooms: number;
  bedrooms: number;
  beds: number;
  bed_type: string;
  amenities: string;
  square_feet: string;
  price: string;
  weekly_price: string;
  monthly_price: string;
  security_deposit: string;
  cleaning_fee: string;
  guests_included: number;
  extra_people: string;
  minimum_nights: number;
  maximum_nights: number;
  calendar_updated: string;
  has_availability: string;
  availability_30: number;
  availability_60: number;
  availability_90: number;
  availability_365: number;
  calendar_last_scraped: Date;
  number_of_reviews: number;
  first_review: Date;
  last_review: Date;
  review_scores_rating: number;
  review_scores_accuracy: number;
  review_scores_cleanliness: number;
  review_scores_checkin: number;
  review_scores_communication: number;
  review_scores_location: number;
  review_scores_value: number;
  requires_license: string;
  license: string;
  jurisdiction_names: string;
  instant_bookable: string;
  cancellation_policy: string;
  require_guest_profile_picture: string;
  require_guest_phone_verification: string;
  calculated_host_listings_count: number;
  reviews_per_month: number;
}



@Injectable()
export class CsvService {
  constructor(private readonly csvParser: CsvParser) { }

  async parse() {
    try {
      // Create stream from file (or get it from S3)
      const stream = fs.createReadStream('./src/csvReader/dataset/backend.csv');
      const entities: ParsedData<any> = await this.csvParser.parse(stream, entityCSV);
      console.log(entities);
      return entities
    } catch (e) {
      console.log(e);
    }
    return null;

  }

  create(createCsvDto: CreateCsvDto) {
    return 'This action adds a new csv';
  }

  findAll() {
    return `This action returns all csv`;
  }

  findOne(id: number) {
    return `This action returns a #${id} csv`;
  }

  update(id: number, updateCsvDto: UpdateCsvDto) {
    return `This action updates a #${id} csv`;
  }

  remove(id: number) {
    return `This action removes a #${id} csv`;
  }
}
