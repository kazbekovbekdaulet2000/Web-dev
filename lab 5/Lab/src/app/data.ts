export interface Item{
    id: number
    name: string
    image: string
    des: string
    rating: number
    link:string
    category: string
}

  
export const first: Item[] = [
    {id: 1, name: "Dr. Elsey's Premium Clumping Cat Litter", image: "https://images-na.ssl-images-amazon.com/images/I/61po%2BblqBuL._AC_SL1000_.jpg", des: "NOTE: Item package indicates weight in both Kg and lb. 40 Lb is equal to 18.14 kg 99.9% dust free, hypo-allergenic natural litter to keep your surfaces clean and perfect for families who suffer from allergies", rating: 4.48, link: "https://www.amazon.com/Dr-Elseys-Premium-Clumping-Litter/dp/B0009X29WK/?_encoding=UTF8&pd_rd_w=aYbiA&pf_rd_p=ae204524-9feb-47cc-8936-b890d679e0d6&pf_rd_r=MJCF2RPMW8CWQJCJQEE5&pd_rd_r=6e3cac2c-68dc-45f5-ac62-b17c938e28db&pd_rd_wg=Em68q&ref_=pd_gw_unk", category: "first"},
    {id: 2, name: "Oculus Rift S PC-Powered VR Gaming Headset", image: "https://images-na.ssl-images-amazon.com/images/I/71URNvzoWqL._SL1500_.jpg", des: "Top VR gaming library: Blast, slash and soar your way through the top library in VR gaming. Oculus Rift S lets you play hundreds of games and exclusives already available in the Oculus store, with so much more to come.", rating: 4.35, link: "https://www.amazon.com/Oculus-Rift-PC-Powered-Gaming-Headset-pc/dp/B07PTMKYS7/?_encoding=UTF8&pd_rd_w=aYbiA&pf_rd_p=ae204524-9feb-47cc-8936-b890d679e0d6&pf_rd_r=MJCF2RPMW8CWQJCJQEE5&pd_rd_r=6e3cac2c-68dc-45f5-ac62-b17c938e28db&pd_rd_wg=Em68q&ref_=pd_gw_unk", category: "second"},
    {id: 3, name: "Cable Matters Long USB to USB Extension Cable", image: "https://images-na.ssl-images-amazon.com/images/I/71n8CVtSoJL._AC_SL1500_.jpg", des: "High performance USB extension cord extends the connection between a computer or Windows tablet and both USB 3.0 and USB 2.0 peripherals including VR headsets HMD, hard drives, USB hubs, mice, keyboards, flash drives, printers, and more", rating: 4.5, link: "https://www.amazon.com/dp/B00C7SA21U/ref=sspa_dk_detail_5?psc=1&pd_rd_i=B00C7SA21U&pd_rd_w=TRKGF&pf_rd_p=4269e1a0-a218-4fbd-9748-1cd337d2f2a5&pd_rd_wg=iynv6&pf_rd_r=37VCEBGJ9YA05MWF0JRH&pd_rd_r=0253b8f2-8b21-4e7c-97a1-557caa8f3417&smid=A1AMUYYA3CT6HJ&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFYNkQ0SlZRNlZFSU0mZW5jcnlwdGVkSWQ9QTA2NjM3OTgzSEVERDBQSVpZVldNJmVuY3J5cHRlZEFkSWQ9QTAxMDQzNTIzMDQyTllBUjBYTVJaJndpZGdldE5hbWU9c3BfZGV0YWlsJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==", category: "first"},
    {id: 4, name: "HP 24mh FHD Monitor", image: "https://images-na.ssl-images-amazon.com/images/I/91fAU6mxFsL._AC_SL1500_.jpg", des: "OUTSTANDING VISUALS – This FHD display with IPS technology gives you brilliant visuals and unforgettable quality; with a maximum resolution of 1920 x 1080 @ 75 Hz, you’ll experience the image accuracy and wide-viewing spectrums of premium tablets and mobile devices", rating: 4.9, link: "https://www.amazon.com/HP-24mh-FHD-Monitor-Built/dp/B08BF4CZSV/ref=sr_1_6?dchild=1&qid=1614145491&s=electronics&sr=1-6", category: "third"},
    {id: 5, name: "BenQ 24 Inch IPS Monitor | 1080P", image: "https://images-na.ssl-images-amazon.com/images/I/712ZOa8Ze2L._AC_SL1280_.jpg", des: "24 inch full HD 1080P IPS panel: 23. 8” full HD IPS widescreen with 1920x1080 resolution, 250 nits of brightness, built-in speakers", rating: 4.7, link: "https://www.amazon.com/BenQ-proprietary-borderless-Brightness-GW2480/dp/B072XCZSSW/ref=pd_sbs_3?pd_rd_w=RmwsC&pf_rd_p=c52600a3-624a-4791-b4c4-3b112e19fbbc&pf_rd_r=R2PQ5B2GTR0TJWFYNMR7&pd_rd_r=6e5e3253-443a-4524-a6ac-96d2a6482812&pd_rd_wg=qA8tk&pd_rd_i=B072XCZSSW&psc=1", category: "fourth"},
    {id: 6, name: "iOttie Easy One Touch 4 Dash & Windshield Car Mount Phone Holder Desk", image: "https://images-na.ssl-images-amazon.com/images/I/718NVofDrCL._AC_SL1500_.jpg", des: "Easy One Touch Lock/Release: Patented easy one touch mechanism allows quick one hand open and close operation", rating: 4.4, link: "https://www.amazon.com/iOttie-Dashboard-Windshield-Samsung-Smartphone/dp/B076B27WP6/ref=sr_1_4?dchild=1&qid=1614145691&s=electronics&sr=1-4", category: "second"},
    {id: 7, name: "42pcs Felt Fabric Sheet 4\"x4\" Assorted Color DIY", image: "https://images-na.ssl-images-amazon.com/images/I/71XL8mnP3NL._AC_SL1000_.jpg", des: "Size:4\"x4\" (10cm*10cm)", rating: 4.3, link: "https://www.amazon.com/42pcs-Fabric-Assorted-Squares-Nonwoven/dp/B01GCLS32M/ref=sr_1_5?dchild=1&qid=1614145788&s=arts-crafts-intl-ship&sr=1-5", category: "second"},
    {id: 8, name: "GeIL Orion DDR4 RAM, 16GB (8GBx2) 3200MHz", image: "https://images-na.ssl-images-amazon.com/images/I/81ks%2BOAWLeL._AC_SL1500_.jpg", des: "Up to 4400MHz high speed and 128GB (4x32GB) massive capacity to deliver a powerful and smooth performance. Multiple speed and capacity options are available to take your ultimate gaming experience and multimedia content creation to the next level.", rating: 4.8, link: "https://www.amazon.com/GeIL-Compatible-Immersive-Multimedia-Streaming/dp/B08T9142K2/ref=sr_1_1_sspa?dchild=1&qid=1614145895&s=computers-intl-ship&sr=1-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExNUlPNDBVV0k0QlpRJmVuY3J5cHRlZElkPUEwNTcwNzQ5MVRSWkVIRTAwSUpaUCZlbmNyeXB0ZWRBZElkPUEwMDg5MzI2V1FBMTlBTUVZWVRNJndpZGdldE5hbWU9c3BfYXRmX2Jyb3dzZSZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=", category: "third"},
    {id: 9, name: "MSI MPG X570 GAMING PLUS Motherboard (AMD AM4)", image: "https://images-na.ssl-images-amazon.com/images/I/61VWJiLgfuL._AC_SL1024_.jpg", des: "Supports 2nd and 3rd Gen AMD Ryzen/ Ryzen with Radeon Vega Graphics desktop processors for AM4 socket", rating: 4.6, link: "https://www.amazon.com/MSI-X570-Gaming-Plus-Motherboard/dp/B07T5QDRFX/ref=pd_sbs_5?pd_rd_w=k5ZZi&pf_rd_p=c52600a3-624a-4791-b4c4-3b112e19fbbc&pf_rd_r=Y6R446RHKKSTW8AVRXP0&pd_rd_r=b69e285c-606d-41b5-a0c7-b3ddb84155fe&pd_rd_wg=3WQas&pd_rd_i=B07T5QDRFX&psc=1", category: "fourth"},
    {id: 10, name: "NZXT H510i - CA-H510i-W1 - Compact ATX Mid -Tower PC Gaming Case", image: "https://images-na.ssl-images-amazon.com/images/I/71cETrgYI8L._AC_SL1500_.jpg", des: "New features: Front I/O USB Type-C Port, Vertical GPU Mount, Tempered glass side panel with single screw installation, and upgraded Smart Device V2", rating: 4.8, link: "https://www.amazon.com/dp/B07TD9S3HZ/ref=sspa_dk_detail_6?psc=1&pd_rd_i=B07TD9S3HZ&pd_rd_w=XSln1&pf_rd_p=4269e1a0-a218-4fbd-9748-1cd337d2f2a5&pd_rd_wg=xxRl2&pf_rd_r=ZWFGVNSDDDB2YYD78HRA&pd_rd_r=9aa4754f-0fdb-4da1-9464-3a262922784d&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzVFRJQVk5VVczUzE4JmVuY3J5cHRlZElkPUEwODEwOTU5MThBUllGQkJIM0hVSyZlbmNyeXB0ZWRBZElkPUEwODk5NDA4M1VSWkdZTlUwWFlFMiZ3aWRnZXROYW1lPXNwX2RldGFpbCZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=", category: "first"}
]
