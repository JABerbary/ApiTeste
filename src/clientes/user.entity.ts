import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

//--old--
//@Entity('user')
@Entity()
export class Users extends BaseEntity {


    @PrimaryGeneratedColumn('increment')
    user_id: number;

    @Column({ name: 'first_name', type: 'varchar', length: 50 })
    first_name: string;

    @Column({ name: 'email', type: 'varchar', length: 50 })
    email: string;

    @Column({ name: 'passwords', type: 'varchar', length: 50 })
    passwords: string;

    @Column({ name: 'createAt', type: 'date', nullable: true })
    createAt: Date;

    // @UpdateDateColumn({ name: 'updated_at', type: 'date', nullable: true })
    // updateAt: Date;





}
