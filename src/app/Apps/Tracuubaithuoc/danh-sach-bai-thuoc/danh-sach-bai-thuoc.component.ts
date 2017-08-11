import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { BaithuocService } from '../../../Share/Services/baithuoc.service';
import { Baithuoc } from '../../../Share/Services/baithuoc.service';
import { SettingService } from '../../../Share/Services/setting.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
    selector: 'app-danh-sach-bai-thuoc',
    templateUrl: './danh-sach-bai-thuoc.component.html',
    styleUrls: ['./danh-sach-bai-thuoc.component.css']
})
export class DanhSachBaiThuocComponent implements OnInit {
    menu: any;
    iconText: any;
    name: any;
    elements: any;
    idea: any;
    urlIdea: any;
    idIdea: any;

    DsBaithuoc: Baithuoc[];
    TongSoLuong: number;
    startBaithuoc: number;
    endBaithuoc: number;
    public id: any;
    public empty = false;
    public page = 1;
    public url: any;

    constructor(
        // nhớ khai báo service
        private baithuocService: BaithuocService,
        private router: Router,
        private activedroute: ActivatedRoute,
        private settingService: SettingService
    ) {

    }

    ngOnInit() {
        // Hàm lấy dữ liệu bệnh
        this.baithuocService.getBaithuoc(1).subscribe(data => {
            this.DsBaithuoc = data.DsBaithuoc;
            this.TongSoLuong = data.TongSoLuong;
            this.startBaithuoc = 0;
            this.endBaithuoc = 50;
        });
        this.menu = this.settingService.getMenu();
        for (let i = 0; i < this.menu.length; i++) {
            for (let x = 0; x < this.menu[i].items.length; x++) {
                if (this.menu[i].items[x].url === 'tracuubaithuoc') {
                    this.name = this.menu[i].items[x].Ten;
                    this.iconText = this.menu[i].items[x].IconText;
                    this.idIdea = this.menu[i].items[x].Id;
                }
            }
        }
        this.url = 'apps';
        this.idea = true;
        this.urlIdea = 'tracuubaithuoc';

    }
}
