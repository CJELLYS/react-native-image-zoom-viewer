export default (width: number, height: number) => {
    return {
        modalContainer: {
            backgroundColor: '#000',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden'
        } as React.ViewStyle,
        watchOrigin: {
            position: 'absolute',
            width: width,
            bottom: 20,
            justifyContent: 'center',
            alignItems: 'center'
        } as React.ViewStyle,
        watchOriginTouchable: {
            paddingLeft: 10,
            paddingRight: 10,
            paddingTop: 5,
            paddingBottom: 5,
            borderRadius: 30,
            borderColor: 'white',
            borderWidth: 0.5,
            backgroundColor: 'rgba(0, 0, 0, 0.1)'
        } as React.ViewStyle,
        watchOriginText: {
            color: 'red',
            backgroundColor: 'transparent'
        } as React.TextStyle,
        imageStyle: {} as React.ImageStyle,
        container: {
            backgroundColor: 'black'
        } as React.ViewStyle,
        // 多图浏览需要调整整体位置的盒子
        moveBox: {
            flexDirection: 'row',
            alignItems: 'center'
        } as React.ViewStyle,
        menuContainer: {
            position: 'absolute',
            width: width,
            height: height,
            left: 0,
            bottom: 0
        } as React.ViewStyle,
        menuShadow: {
            position: 'absolute',
            width: width,
            height: height,
            backgroundColor: 'black',
            left: 0,
            bottom: 0,
            opacity: 0.2,
            zIndex: 10
        } as React.ViewStyle,
        menuContent: {
            position: 'absolute',
            width: width,
            left: 0,
            bottom: 0,
            zIndex: 11
        } as React.ViewStyle,
        operateContainer: {
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
            height: 40,
            borderBottomColor: '#ccc',
            borderBottomWidth: 1
        } as React.ViewStyle,
        operateText: {
            color: '#333'
        },
        loadingTouchable: {
            width: width,
            height: height
        } as React.ViewStyle,
        loadingContainer: {
            justifyContent: 'center',
            alignItems: 'center',
            width: width,
            height: height
        } as React.ViewStyle,
        failContainer: {
            justifyContent: 'center',
            alignItems: 'center',
            width: width,
            height: height
        } as React.ViewStyle,
        failImage: {
            width: 90,
            height: 60
        },
        arrowLeftContainer: {
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            justifyContent: 'center'
        } as React.ViewStyle,
        arrowRightContainer: {
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            justifyContent: 'center'
        } as React.ViewStyle
    }
}

export const simpleStyle = {
    count: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 38,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent'
    } as React.ViewStyle,
    countText: {
        color: 'white',
        fontSize: 16,
        backgroundColor: 'transparent',
        textShadowColor: 'rgba(0, 0, 0, 0.3)',
        textShadowOffset: {
            width: 0, height: 0.5
        },
        textShadowRadius: 0
    } as React.TextStyle
}