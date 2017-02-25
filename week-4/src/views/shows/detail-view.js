class DetailView extends erste.View {
    constructor(show) {
        super();

        this.show = show;
    }

    get supportsBackGesture() {
        return true;
    }

    onTap(e) {
        console.log(`tapping ${this.show.title}`);
    };


    template() {
        var imgFile = this.show['images']['fanart'].split('/').slice(-1);

        var show = this.show;

        return `
<view class="detail-view" id="${this.id}"
style="-webkit-transform: translate3d(100%, 0, ${this.index}px);
background-image: url(static/img/poster/${imgFile})">
    <div class="info">
        <p>Title: ${show.title}</p>
        <p>Year: ${show.year}</p>
        <p># of seasons: ${show.num_seasons}</p>
    </div>
</view>
`;
    }

    get events() {
        return {
            'tap': {
                '.detail-view': this.onTap
            }
        };
    };
}

module.exports = DetailView;
