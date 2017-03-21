using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Runtime.InteropServices.WindowsRuntime;
using Windows.Foundation;
using Windows.Foundation.Collections;
using Windows.UI.Xaml;
using Windows.UI.Xaml.Controls;
using Windows.UI.Xaml.Controls.Primitives;
using Windows.UI.Xaml.Data;
using Windows.UI.Xaml.Input;
using Windows.UI.Xaml.Media;
using Windows.UI.Xaml.Navigation;

// The Blank Page item template is documented at http://go.microsoft.com/fwlink/?LinkId=402352&clcid=0x409

namespace reaction_timer
{
    /// <summary>
    /// An empty page that can be used on its own or navigated to within a Frame.
    /// </summary>
    public sealed partial class MainPage : Page
    {
        private DispatcherTimer timer;
        DateTime now;
        DateTime clicked;
        public MainPage()
        {
            this.InitializeComponent();
        }

        protected override void OnNavigatedTo(NavigationEventArgs e)
        {
            base.OnNavigatedTo(e);
            //Documentation:https://docs.microsoft.com/en-us/uwp/api/windows.ui.xaml.dispatchertimer
            timer = new DispatcherTimer() { Interval = new TimeSpan(0, 0, 0, 2) };
            timer.Start();
            //Sample:https://github.com/Microsoft/Windows-universal-samples/blob/master/Samples/Accelerometer/cs/Scenario3_Polling.xaml.cs
            timer.Tick += onStop;
        }
        private void onStop(object sender, object e)
        {
            ((DispatcherTimer)sender).Stop();
            MyRespond.IsEnabled = true;
            MyRespond.Visibility = Visibility.Visible;
            now = DateTime.Now;
        }

        private void MyRespond_Click(object sender, RoutedEventArgs e)
        {
            clicked = DateTime.Now;
            MainGrid.Background = new SolidColorBrush(Windows.UI.Colors.Red);
            var sum = clicked - now;
            Information.Text = "You did " + sum.TotalSeconds.ToString() + " seconds to respond";
            MyRespond.IsEnabled = false;
        }
}
}
