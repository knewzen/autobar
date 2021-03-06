import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import { Spreadsheet } from "./Spreadsheet";
import { Col } from "./Col";
import { Row } from "./Row";

@Entity()
export class ColRow {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("numeric")
    value: number = 0;

    @ManyToOne(type => Col, col => col.colRows, {
        cascadeInsert: true,
        cascadeUpdate: true,
    })
    col: Col;

    @ManyToOne(type => Row, row => row.colRows)
    row: Row;
}
