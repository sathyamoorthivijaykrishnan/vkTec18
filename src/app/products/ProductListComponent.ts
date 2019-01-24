import { Component, OnInit, OnChanges } from '@angular/core';
import { Iproducts } from './products';
@Component({
    selector: 'pm-products',
    templateUrl: './products_list.component.html',
    styleUrls: ['./products_list.component.css']
})
export class ProductListComponent implements OnInit, OnChanges {
    ngOnInit(): void {
        console.log("on Init");
    }
    pageTitle: string = 'Resource Management';
    listFilter: string = 'vijay';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = true;
    products: Iproducts[] = [{
        "employeeId": 570670,
        "employeeName": "Vijay Krishnan",
        "designation": "Associate",
        "joiningDate": "01/06/2018",
        "primarySkill": "Java",
        "secondarySkill": "Spring, Struts, Hibernate, Webservices",
        "skillRating": 4.2,
        "experience": 4,
        "annualSalary": 500000,
        "imageUrl": '../assets/images/vijay.jpg'
    }, {
        "employeeId": 548548,
        "employeeName": "Muruganantham",
        "designation": "Sr.Manager",
        "joiningDate": "08/05/2007",
        "primarySkill": "PMO",
        "secondarySkill": "Java",
        "skillRating": 4.2,
        "experience": 16,
        "annualSalary": 1825000,
        "imageUrl": "../assets/images/muruga.jpg"
    }];
    toggleImage(): void {
        this.showImage = !this.showImage;
    }
}
