/**
 * Created by mac on 2016/12/10.
 */
angular.module('starter.controllers', [])
  .controller('HomeCtrl', ['$scope', function($scope){

  }])
  .controller('FenleiCtrl', ['$scope', function($scope, $ionicScrollDelegate){

  }])
  .controller('CartCtrl', ['$scope', '$stateParams', function($scope, $stateParams){
    //$stateParams是获取get请求携带的参数
    // 参数传递: goods.html#/id/0
    // 参数路由接收 /id/:id;

    $scope.items = [
      {
        'title': '施华蔻(Schwarzkopf)金致润养瞬柔精油75ml(护发素轻盈免洗防毛躁）',
        'img': './img/goods-1.jpg',
        'description': '重量: 0.12kg 产品: 瞬柔精油75ML',
        'price': '78',
        'num': '1'
      },
      {
        'title': '西域美农 生核桃仁250克新疆特产果仁',
        'img': './img/goods-2.jpg',
        'description': '重量: 0.28kg 规格: 生核桃仁250克',
        'price': '27.90',
        'num': '1'
      },
      {
        'title': 'hhhhhhhhhhhhhhhhhhhhhhhhh',
        'img': './img/goods-3.jpg',
        'description': 'bbbbbbbbbbbb'
      },
      {
        'title': 'hhhhhhhhhhhhhhhhhhhhhhhhh',
        'img': './img/goods-4.jpg',
        'description': 'bbbbbbbbbbbb'
      },
      {
        'title': 'hhhhhhhhhhhhhhhhhhhhhhhhh',
        'img': './img/goods-5.jpg',
        'description': 'bbbbbbbbbbbb'
      },
      {
        'title': 'hhhhhhhhhhhhhhhhhhhhhhhhh',
        'img': './img/goods-6.jpg',
        'description': 'bbbbbbbbbbbb'
      },
      {
        'title': 'hhhhhhhhhhhhhhhhhhhhhhhhh',
        'img': './img/goods-7.jpg',
        'description': 'bbbbbbbbbbbb'
      }
    ];

    //编辑
    $scope.edit = function(item){
      console.log(item+'被点击编辑的列表索引值');

      $ionicListDelegate.showDelete(true);//把show-delete="false"属性值设为true
    };

    //分享
    $scope.share = function(item){
      console.log(item+'被点击分享的列表索引值');
    };

    //on-reorder 当一项被重新排序时调用表达式。给定参数：$fromIndex, $toIndex。
    $scope.reorderItem = function(item, fromIndex, toIndex){
      //把该项移动到数组中
      $scope.items.splice(fromIndex, 1);
      $scope.items.splice(toIndex, 0, item);
      console.log(item+'on-reorder关于列表拖动排序的事件被触发额');
    };


    //当没有更多数据加载时，就可以用一个简单的方法阻止无限滚动，
    //那就是angular的ng-if 指令:
    $scope.itemss = [];
    $scope.loadMore = function() {
      //ajax请求获取更多的数据
      $http.get('/more-items').success(function(itemss) {
        useItems(itemss);
        $scope.$broadcast('scroll.infiniteScrollComplete');
        //在重新完全载入数据后，需要发送一个scroll.infiniteScrollComplete事件，
        // 告诉directive，我们完成了这个动作，
        // 系统会清理scroller和为下一次的载入数据，重新绑定这一事件。
      });
    };
    $scope.$on('stateChangeSuccess', function() {
      $scope.loadMore();
    });

  }])
  .controller('MimeCtrl', ['$scope', function($scope){

  }])
  .controller('GoodsCtrl', ['$scope', function($scope){

  }])

;
