// interval.js (Date객체에 두시점을 날짜 계산하는 getInterval함수 추가 )

Date.prototype.getInterval = function(otherday) {
    // 날짜 계산하는 함수 만들기
    if ( this > otherday) {
        var interval = this.getTime() - otherday.getTime();
    } else {
        var interval = otherday.getTime() - this.getTime();
    }
    var intervalDay = Math.floor(interval / (1000 *60 * 60 *24));
    return intervalDay;
};