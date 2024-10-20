import {Component, OnInit, ViewChild} from '@angular/core';
import {JsonPipe, NgIf} from "@angular/common";
import {UserService} from "../../services/user.service";
import {MatCardModule} from "@angular/material/card";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import { BookedModel, ReviewModel, UserModel} from "../models/user.model";
import {MatButtonModule} from "@angular/material/button";
import {WebService} from "../../services/web.service";
import {DataService} from "../../services/data.service";
import {MatTableDataSource, MatTableModule} from "@angular/material/table";
import {HttpClientModule} from "@angular/common/http";
import {MatSort, MatSortModule} from "@angular/material/sort";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
      MatCardModule,
      MatButtonModule,
      RouterLink,
      NgIf,
      MatTableModule,
      HttpClientModule,
      MatSortModule,
      JsonPipe //TBRemoved
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})

export class ProfileComponent implements OnInit {
    public userService: UserService
    private webService: WebService
    public dataService: DataService
    public active: UserModel | null = null

    public displayedColumns: string[] = ['title', 'year', 'runtime', 'genre', 'writer'];
    public dataSource: MatTableDataSource<BookedModel> | null = null
    @ViewChild(MatSort)
    sort: MatSort = new MatSort;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.userService = UserService.getInstance()
    this.webService = WebService.getInstance()
    this.dataService = DataService.getInstance()
  }

    ngOnInit(): void {
        try {
            this.active = this.userService.getCurrentUser()

            if (this.active.booked.length == 0) return
            const ids = this.active.booked.map(obj => obj.imdbID)
            this.webService.getMoviesForIds(ids).subscribe(rsp => {
                for (let obj of this.active!.booked) {
                    for (let movie of rsp) {
                        if (obj.imdbID == movie.imdbID) {
                            // @ts-ignore
                            obj.title = movie
                        }
                    }
                }

                this.dataSource = new MatTableDataSource<BookedModel>(this.active!.booked)
                this.dataSource.sort = this.sort;
            })
        } catch (e) {
            this.router.navigate(['/login'], {
                relativeTo: this.route
            })
        }
    }

    public getAvatarUrl() {
        return 'https://ui-avatars.com/api/?name=' + this.active?.name
    }

    public doLogout() {
        this.userService.logout()
        this.router.navigate(['/'], {
            relativeTo: this.route
        })
    }

    public doPasswordChange() {
        //@ts-ignore
        Swal.fire({
            title: "Enter your new password",
            input: "text",
            inputAttributes: {
                autocapitalize: "off"
            },
            showCancelButton: true,
            confirmButtonText: "Change password",
            showLoaderOnConfirm: true,
            preConfirm: async (newPassword: string) => {
                try {
                    this.userService.changePassword(newPassword)
                } catch (error) {
                    //@ts-ignore
                    Swal.showValidationMessage('Failed to change password');
                }
            },
            //@ts-ignore
            allowOutsideClick: () => !Swal.isLoading()
        }).then((result: any) => {
            if (result.isConfirmed) {
                //@ts-ignore
                Swal.fire({
                    title: "Success",
                    text: "Your password has been changed successfully",
                    icon: "info"
                });
            }
        });
    }

    public doLikeButton(id: number) {
        for (let item of this.active!.booked) {
            if (item.imdbID == id) {
                // Is liked
                if (item.review == ReviewModel.LIKED) {
                    item.review = ReviewModel.NONE
                    return
                }

                // Is Not liked
                item.review = ReviewModel.LIKED
            }
        }

        console.log(this.active)
        this.userService.updateUser(this.active!)
    }

    public doDislikeButton(id: number) {
        for (let item of this.active!.booked) {
            if (item.imdbID == id) {
                // Is disliked
                if (item.review == ReviewModel.DISLIKED) {
                    item.review = ReviewModel.NONE
                    return
                }

                // Is Not Disliked
                item.review = ReviewModel.DISLIKED
            }
        }

        this.userService.updateUser(this.active!)
    }


}
